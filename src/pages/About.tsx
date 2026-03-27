import { Link } from "react-router-dom";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function About() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-brand-offwhite">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
          >
            The AURELL Philosophy
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg text-brand-gray leading-relaxed"
          >
            A pursuit of timeless elegance, uncompromising quality, and the profound connection between wearer and adornment.
          </motion.p>
        </div>
        
        <div className="w-full h-[600px] relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1573408301145-b98c46544c85?q=80&w=2000&auto=format&fit=crop" 
            alt="Jewellery craftsmanship" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-brand-warmwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif mb-8">A Legacy in the Making</h2>
              <div className="space-y-6 text-brand-gray leading-relaxed">
                <p>
                  AURELL was born from a desire to return to the essence of fine jewellery: pieces that are crafted to last generations, not seasons. In a world of fleeting trends and mass production, we stand for intentional design and enduring value.
                </p>
                <p>
                  Our atelier is dedicated to the art of goldsmithing. We believe that true luxury lies in the details—the weight of solid 18k gold, the precision of a hand-set diamond, and the seamless finish that can only be achieved by masterful hands.
                </p>
                <p>
                  Every piece we create is an invitation to celebrate life's most significant moments, or simply to elevate the everyday. We design for the modern aesthete who appreciates subtlety, strength, and authenticity.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop" 
                alt="Aurell signature pieces" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-24 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-brand-gold">Uncompromising Craftsmanship</h2>
            <p className="text-brand-beige/80 leading-relaxed">
              We do not compromise on materials. AURELL exclusively uses solid 18k gold, platinum, and ethically sourced, conflict-free diamonds and gemstones. Our commitment to quality ensures that your jewellery will never tarnish, fade, or lose its intrinsic value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-brand-beige/20 hover:border-brand-gold transition-colors">
              <h3 className="font-serif text-xl mb-4 text-brand-gold">Solid 18k Gold</h3>
              <p className="text-sm text-brand-beige/70 leading-relaxed">
                The perfect balance of purity and durability. Our gold is rich in color and crafted to withstand the test of time.
              </p>
            </div>
            <div className="p-8 border border-brand-beige/20 hover:border-brand-gold transition-colors">
              <h3 className="font-serif text-xl mb-4 text-brand-gold">Ethical Sourcing</h3>
              <p className="text-sm text-brand-beige/70 leading-relaxed">
                We trace our materials to ensure they meet the highest ethical and environmental standards.
              </p>
            </div>
            <div className="p-8 border border-brand-beige/20 hover:border-brand-gold transition-colors">
              <h3 className="font-serif text-xl mb-4 text-brand-gold">Master Artisans</h3>
              <p className="text-sm text-brand-beige/70 leading-relaxed">
                Each piece is hand-finished by master jewelers who bring decades of experience to their craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-24 bg-brand-offwhite text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Begin Your Journey</h2>
          <p className="text-brand-gray mb-12 leading-relaxed">
            Whether you are seeking a signature piece from our collection or wish to commission a bespoke design, we invite you to experience AURELL.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/shop" 
              className="px-8 py-4 bg-brand-black text-white uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors"
            >
              Explore the Collection
            </Link>
            <Link 
              to="/custom" 
              className="px-8 py-4 bg-transparent border border-brand-black text-brand-black uppercase tracking-widest text-sm hover:bg-brand-black hover:text-white transition-colors"
            >
              Enquire About Custom
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
