/* SavageFX static site (GitHub Pages)
   - Mobile nav toggle
   - Header scroll state
   - Scroll reveal animations (IntersectionObserver)
   - WhatsApp contact helpers
*/

const PHONE_NUMBER = "263715443409";
const DEFAULT_MESSAGE = "Hey, found your number on your website. I'm here to talk about forex.";

function buildWhatsAppUrl(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${PHONE_NUMBER}?text=${text}`;
}

function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");
  if (!toggle || !mobileNav) return;

  const close = () => {
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.classList.toggle("is-open", !isOpen);
    mobileNav.hidden = isOpen;
  });

  mobileNav.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.tagName === "A") close();
  });

  window.addEventListener("resize", () => {
    // If user resizes to desktop, ensure mobile nav is closed
    if (window.innerWidth >= 980) close();
  });
}

function initScrollReveal() {
  const els = Array.from(document.querySelectorAll(".reveal"));
  if (els.length === 0) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.14, rootMargin: "0px 0px -10% 0px" },
  );

  els.forEach((el, i) => {
    // stagger a bit for a Framer-like feel
    el.style.transitionDelay = `${Math.min(i * 60, 240)}ms`;
    io.observe(el);
  });
}

function initWhatsApp() {
  const waDirect = document.getElementById("waDirect");
  const waFloat = document.getElementById("waFloat");
  const contactForm = document.getElementById("contactForm");

  const defaultUrl = buildWhatsAppUrl(DEFAULT_MESSAGE);
  if (waDirect) waDirect.href = defaultUrl;
  if (waFloat) waFloat.href = defaultUrl;

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.currentTarget;

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const subject = String(data.get("subject") || "").trim();
      const message = String(data.get("message") || "").trim();

      const composed = [
        "SavageFX enquiry",
        "—",
        `Name: ${name || "N/A"}`,
        `Email: ${email || "N/A"}`,
        `Subject: ${subject || "N/A"}`,
        "—",
        message,
      ].join("\n");

      window.open(buildWhatsAppUrl(composed), "_blank", "noopener,noreferrer");
    });
  }
}

function initYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMobileNav();
  initScrollReveal();
  initWhatsApp();
  initYear();
});
