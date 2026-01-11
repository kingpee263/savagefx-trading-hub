import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Charts", path: "/charts" },
  { name: "Videos", path: "/videos" },
  { name: "Reviews", path: "/testimonials" },
  { name: "FAQs", path: "/faqs" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-gold blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="savage-title text-xl text-foreground group-hover:text-gradient-gold transition-all">
                SavageFX
              </span>
              <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
                #Zvichipera
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-gold rounded-full text-white text-sm font-semibold hover:shadow-gold transition-all duration-300"
            >
              Get Started
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}>
              <Menu size={20} />
            </span>
            <span className={`absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
              <X size={20} />
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 py-4 border-t border-white/5">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-foreground bg-white/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isOpen ? 1 : 0,
                  transition: `all 0.3s ease ${index * 50}ms`
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="mt-4 mx-4 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-gold rounded-xl text-white font-semibold"
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;