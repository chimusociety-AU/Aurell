import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Gem, Clock, Truck, Star, User } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1599643478524-fb66f70a00ea?q=80&w=2940&auto=format&fit=crop"
            alt="Luxury fine jewellery"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl text-white font-serif tracking-wide mb-6"
          >
            Refined Fine Jewellery for the Modern Aesthete
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg md:text-xl text-brand-offwhite/90 font-light mb-10 max-w-2xl mx-auto"
          >
            Crafted from solid 18k gold. Timeless design, uncompromising quality, and bespoke creations tailored to your legacy.
          </motion.p>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/shop" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-brand-black uppercase tracking-widest text-sm hover:bg-brand-gold hover:text-white transition-colors"
            >
              Shop Collection
            </Link>
            <Link 
              to="/appointments" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-brand-black transition-colors"
            >
              Book Private Appointment
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-brand-black text-brand-beige py-8 border-b border-brand-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-xs uppercase tracking-widest">
            <div className="flex flex-col items-center gap-2">
              <Gem className="w-5 h-5 text-brand-gold" />
              <span>Real 18k Gold</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Star className="w-5 h-5 text-brand-gold" />
              <span>Premium Craftsmanship</span>
            </div>
            <div className="flex flex-col items-center gap-2 hidden md:flex">
              <ShieldCheck className="w-5 h-5 text-brand-gold" />
              <span>Custom-Made Pieces</span>
            </div>
            <div className="flex flex-col items-center gap-2 hidden md:flex">
              <Clock className="w-5 h-5 text-brand-gold" />
              <span>Private Appointments</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-5 h-5 text-brand-gold" />
              <span>Secure Shipping</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Curated Collections</h2>
            <p className="text-brand-gray max-w-2xl mx-auto">Discover our signature pieces, designed to be worn daily and cherished for a lifetime.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Signature Chains", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop" },
              { title: "Bracelets", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop" },
              { title: "Rings", image: "https://images.unsplash.com/photo-1605100804763-247f66150ce8?q=80&w=1000&auto=format&fit=crop" },
              { title: "Custom Pieces", image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=1000&auto=format&fit=crop" }
            ].map((collection, idx) => (
              <Link to="/shop" key={idx} className="group relative h-[400px] overflow-hidden block">
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-white">
                  <h3 className="font-serif text-xl">{collection.title}</h3>
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="py-24 bg-brand-warmwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1573408301145-b98c46544c85?q=80&w=1000&auto=format&fit=crop" 
                alt="Jewellery craftsmanship" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">The Art of Fine Jewellery</h2>
              <p className="text-brand-gray mb-6 leading-relaxed">
                AURELL was founded on a simple principle: true luxury is quiet, enduring, and deeply personal. We source only the finest 18k solid gold and ethically sourced stones to create pieces that transcend seasonal trends.
              </p>
              <p className="text-brand-gray mb-10 leading-relaxed">
                Every piece in our collection is a testament to meticulous craftsmanship, designed to be an extension of your identity and a future heirloom.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center uppercase tracking-widest text-sm font-medium hover:text-brand-gold transition-colors border-b border-current pb-1"
              >
                Discover Our Story <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-serif">Featured Pieces</h2>
            <Link to="/shop" className="hidden sm:inline-flex items-center uppercase tracking-widest text-xs hover:text-brand-gold transition-colors">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "The Classic Herringbone", price: "$1,250", image: "https://images.unsplash.com/photo-1599643478514-4a1101861343?q=80&w=800&auto=format&fit=crop" },
              { name: "Eternity Diamond Band", price: "$2,800", image: "https://images.unsplash.com/photo-1605100804763-247f66150ce8?q=80&w=800&auto=format&fit=crop" },
              { name: "Minimalist Gold Cuff", price: "$1,850", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop" },
              { name: "Signature Signet Ring", price: "$950", image: "https://images.unsplash.com/photo-1602752250014-49035222629b?q=80&w=800&auto=format&fit=crop" }
            ].map((product, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-[350px] mb-4 overflow-hidden bg-brand-warmwhite">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full bg-white text-brand-black py-3 uppercase tracking-widest text-xs hover:bg-brand-black hover:text-white transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>
                <h3 className="font-serif text-lg mb-1">{product.name}</h3>
                <p className="text-brand-gray text-sm">{product.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/shop" className="inline-flex items-center uppercase tracking-widest text-xs border-b border-current pb-1">
              View All Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose AURELL */}
      <section className="py-24 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">The AURELL Standard</h2>
            <p className="text-brand-gray max-w-2xl mx-auto">Uncompromising quality and service at every touchpoint.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <ShieldCheck className="w-8 h-8 mx-auto mb-6 text-brand-gold" />
              <h3 className="font-serif text-xl mb-3">Authenticity Guaranteed</h3>
              <p className="text-brand-gray text-sm leading-relaxed">Every piece is crafted from solid 18k gold and accompanied by a certificate of authenticity. We stand behind our craftsmanship for a lifetime.</p>
            </div>
            <div>
              <Star className="w-8 h-8 mx-auto mb-6 text-brand-gold" />
              <h3 className="font-serif text-xl mb-3">Designed to Endure</h3>
              <p className="text-brand-gray text-sm leading-relaxed">We reject fast fashion. Our designs are timeless, and our materials are chosen for their longevity, ensuring your jewellery becomes a future heirloom.</p>
            </div>
            <div>
              <User className="w-8 h-8 mx-auto mb-6 text-brand-gold" />
              <h3 className="font-serif text-xl mb-3">Personalized Service</h3>
              <p className="text-brand-gray text-sm leading-relaxed">From private appointments to custom commissions, our dedicated concierge team provides an unparalleled, exclusive experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-brand-warmwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "The craftsmanship of my custom engagement ring exceeded all expectations. The entire process felt incredibly exclusive and personal.", author: "Eleanor V." },
              { text: "I wear my Signature Herringbone chain every single day. The weight and color of the 18k gold are simply perfect.", author: "James T." },
              { text: "AURELL's private appointment experience in London was exceptional. They guided me to the perfect anniversary gift.", author: "Sophia M." }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-10 border border-brand-beige/50 relative">
                <div className="text-brand-gold text-4xl font-serif absolute top-6 left-6 opacity-20">"</div>
                <p className="text-brand-gray text-sm leading-relaxed mb-6 relative z-10 italic">"{testimonial.text}"</p>
                <p className="text-brand-black text-xs uppercase tracking-widest font-medium">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Jewellery & Appointments */}
      <section className="py-24 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-serif mb-6">Bespoke Creations</h2>
              <p className="text-brand-beige/80 mb-10 leading-relaxed max-w-md">
                Bring your vision to life. Work directly with our master jewelers to design a custom piece that tells your unique story. From engagement rings to reimagined heirlooms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/custom" 
                  className="px-8 py-4 bg-white text-brand-black text-center uppercase tracking-widest text-sm hover:bg-brand-gold hover:text-white transition-colors"
                >
                  Start a Custom Piece
                </Link>
              </div>
            </div>
            <div className="relative h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=1000&auto=format&fit=crop" 
                alt="Custom jewellery design" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Private Appointment */}
      <section className="py-24 bg-brand-warmwhite text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">The Atelier Experience</h2>
          <p className="text-brand-gray mb-10 leading-relaxed">
            We invite you to experience AURELL in person. Book a private consultation at our showroom to explore the collections, discuss a custom design, or receive personalized styling advice.
          </p>
          <Link 
            to="/appointments" 
            className="inline-block px-8 py-4 bg-brand-black text-white uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
