import { Link } from "react-router-dom";
import { Instagram, MessageCircle, ArrowUpRight, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="savage-title text-xl text-foreground">SavageFX</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Professional price action trading. Precision, discipline, and consistent results in the forex markets.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-gold/20 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://vm.tiktok.com/ZMHErPSdm/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-gold/20 transition-all"
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://wa.me/263715443409"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-gold/20 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6 tracking-wide">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Trade Setups", path: "/charts" },
                { name: "Videos", path: "/videos" },
                { name: "Testimonials", path: "/testimonials" },
              ].map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                  <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6 tracking-wide">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-foreground">Harare, Zimbabwe</p>
                  <p className="text-xs text-muted-foreground">Local Time: GMT+2</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MessageCircle size={14} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-foreground">+263 71 544 3409</p>
                  <p className="text-xs text-muted-foreground">WhatsApp Available</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={14} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-foreground">hello@savagefx.com</p>
                  <p className="text-xs text-muted-foreground">Response within 24hrs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6 tracking-wide">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get trading insights and market updates delivered to your inbox.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-secondary border border-white/5 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-gold rounded-xl text-white text-sm font-semibold hover:shadow-gold transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} SavageFX. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/faqs" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              FAQs
            </Link>
            <Link to="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;