import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-offwhite pt-20 pb-10 border-t border-brand-beige/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="font-serif text-3xl tracking-[0.2em] uppercase block">
              Aurell
            </Link>
            <p className="text-sm text-brand-beige/80 leading-relaxed max-w-xs">
              A refined jewellery atelier focused on craftsmanship, real materials, and timeless elegance. Designed for those who value exclusivity.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-brand-beige hover:text-brand-gold transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-brand-beige hover:text-brand-gold transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </a>
              <a href="#" className="text-brand-beige hover:text-brand-gold transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg uppercase tracking-widest mb-6 text-brand-gold">Discover</h3>
            <ul className="space-y-4 text-sm text-brand-beige/80">
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop Collection</Link></li>
              <li><Link to="/custom" className="hover:text-white transition-colors">Custom Jewellery</Link></li>
              <li><Link to="/appointments" className="hover:text-white transition-colors">Private Appointments</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            </ul>
          </div>

          {/* Client Care */}
          <div>
            <h3 className="font-serif text-lg uppercase tracking-widest mb-6 text-brand-gold">Client Care</h3>
            <ul className="space-y-4 text-sm text-brand-beige/80">
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-white transition-colors">Jewellery Care</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg uppercase tracking-widest mb-6 text-brand-gold">The Atelier List</h3>
            <p className="text-sm text-brand-beige/80 mb-4">
              Join the AURELL list for new drops, private releases, and exclusive access.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-brand-beige/30 py-2 px-0 text-white placeholder-brand-beige/50 focus:outline-none focus:border-brand-gold transition-colors text-sm"
                required
              />
              <button
                type="submit"
                className="text-left text-xs uppercase tracking-widest text-brand-gold hover:text-white transition-colors pt-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-beige/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-brand-beige/60">
          <p>&copy; {new Date().getFullYear()} AURELL. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
