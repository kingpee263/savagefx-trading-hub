import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="savage-title text-2xl text-gradient-gold">SavageFX</span>
              <span className="block text-gold text-xs font-semibold tracking-widest mt-1">
                #Zvichipera
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Master the markets with savage precision. Harare-based price action trader with 3+ years of experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                About
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Services
              </Link>
              <Link to="/charts" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Trade Setups
              </Link>
              <Link to="/testimonials" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Testimonials
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gold font-semibold mb-4">Resources</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/videos" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Trade Videos
              </Link>
              <Link to="/faqs" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                FAQs
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gold font-semibold mb-4">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe for trading tips and market updates.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-surface border border-border rounded-md text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gold text-background font-semibold rounded-md hover:bg-gold-light transition-colors text-sm"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SavageFX. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://vm.tiktok.com/ZMHErPSdm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a
              href="https://wa.me/263715443409?text=Hey,%20found%20your%20number%20on%20your%20website.%20I'm%20here%20to%20talk%20about%20forex."
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
