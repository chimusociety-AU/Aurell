import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";
import { cn } from "../../lib/utils";

const navLinks = [
  { name: "Shop", path: "/shop" },
  { name: "Custom", path: "/custom" },
  { name: "Appointments", path: "/appointments" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isTransparent = isHome && !isScrolled && !mobileMenuOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isTransparent
          ? "bg-transparent text-white"
          : "bg-brand-offwhite text-brand-black border-brand-beige shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <div className="flex items-center flex-1 lg:hidden">
            <button
              type="button"
              className="p-2 -ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm tracking-widest uppercase hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="font-serif text-3xl tracking-[0.2em] uppercase">
              Aurell
            </Link>
          </div>

          {/* Right icons & CTAs */}
          <div className="flex items-center space-x-4 lg:space-x-6 justify-end flex-1 lg:flex-none">
            <Link
              to="/appointments"
              className="hidden lg:block text-xs tracking-widest uppercase border border-current px-4 py-2 hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-colors"
            >
              Book Appointment
            </Link>
            <button className="p-2 hover:text-brand-gold transition-colors hidden sm:block">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hover:text-brand-gold transition-colors hidden sm:block">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 hover:text-brand-gold transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-brand-gold"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 bg-brand-offwhite text-brand-black pt-20 transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 h-full flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-4 text-lg font-serif uppercase tracking-widest border-b border-brand-beige"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/faq"
            className="block px-3 py-4 text-lg font-serif uppercase tracking-widest border-b border-brand-beige"
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-4 text-lg font-serif uppercase tracking-widest border-b border-brand-beige"
          >
            Contact
          </Link>
          
          <div className="mt-auto pb-8 space-y-4 px-3">
            <Link
              to="/appointments"
              className="block w-full text-center bg-brand-black text-white px-6 py-3 uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
