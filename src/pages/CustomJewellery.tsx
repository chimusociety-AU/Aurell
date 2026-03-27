import { Link } from "react-router-dom";
import { MessageCircle, Calendar } from "lucide-react";

export default function CustomJewellery() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-brand-offwhite">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Bespoke Creations</h1>
            <p className="text-lg text-brand-gray leading-relaxed mb-10">
              Your story, cast in gold. AURELL's custom design service is an intimate collaboration between you and our master jewelers to create a piece that is entirely yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#enquiry-form" 
                className="px-8 py-4 bg-brand-black text-white text-center uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors"
              >
                Start Your Design
              </a>
              <Link 
                to="/appointments" 
                className="px-8 py-4 bg-transparent border border-brand-black text-brand-black text-center uppercase tracking-widest text-sm hover:bg-brand-black hover:text-white transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>
          <div className="h-[600px] bg-brand-warmwhite">
            <img 
              src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=1000&auto=format&fit=crop" 
              alt="Custom jewellery design sketches" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 bg-brand-warmwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">The Custom Process</h2>
            <p className="text-brand-gray max-w-2xl mx-auto">From initial concept to final polish, we guide you through every step of creating your bespoke piece.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We begin with a conversation to understand your vision, inspiration, and budget, either in-person or virtually." },
              { step: "02", title: "Design & Sourcing", desc: "Our designers create sketches and 3D renderings while we source the perfect stones for your approval." },
              { step: "03", title: "Craftsmanship", desc: "Once approved, our master jewelers bring the design to life using traditional techniques and modern precision." },
              { step: "04", title: "Delivery", desc: "Your finished piece is presented in our signature packaging, complete with certification and care instructions." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 border border-brand-beige/50">
                <span className="text-brand-gold font-serif text-2xl block mb-4">{item.step}</span>
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Examples */}
      <section className="py-24 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Recent Commissions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-square bg-brand-warmwhite overflow-hidden">
              <img src="https://images.unsplash.com/photo-1605100804763-247f66150ce8?q=80&w=800&auto=format&fit=crop" alt="Custom ring" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square bg-brand-warmwhite overflow-hidden">
              <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop" alt="Custom necklace" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square bg-brand-warmwhite overflow-hidden">
              <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop" alt="Custom bracelet" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry-form" className="py-24 bg-brand-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-brand-gold">Enquire About a Custom Piece</h2>
            <p className="text-brand-beige/80">Provide us with some initial details, and our design team will be in touch within 24 hours.</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-beige mb-2">First Name</label>
                <input type="text" className="w-full bg-transparent border-b border-brand-beige/30 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" required />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-beige mb-2">Last Name</label>
                <input type="text" className="w-full bg-transparent border-b border-brand-beige/30 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-beige mb-2">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-brand-beige/30 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" required />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-beige mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-transparent border-b border-brand-beige/30 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-brand-beige mb-2">Type of Jewellery</label>
              <select className="w-full bg-transparent border-b border-brand-beige/30 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                <option value="" className="bg-brand-black">Select an option</option>
                <option value="engagement" className="bg-brand-black">Engagement Ring</option>
                <option value="wedding" className="bg-brand-black">Wedding Band</option>
                <option value="necklace" className="bg-brand-black">Necklace / Pendant</option>
                <option value="bracelet" className="bg-brand-black">Bracelet</option>
                <option value="earrings" className="bg-brand-black">Earrings</option>
                <option value="other" className="bg-brand-black">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-brand-beige mb-2">Estimated Budget</label>
              <select className="w-full bg-transparent border-b border-brand-beige/30 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                <option value="" className="bg-brand-black">Select an option</option>
                <option value="2k-5k" className="bg-brand-black">$2,000 - $5,000</option>
                <option value="5k-10k" className="bg-brand-black">$5,000 - $10,000</option>
                <option value="10k-20k" className="bg-brand-black">$10,000 - $20,000</option>
                <option value="20k+" className="bg-brand-black">$20,000+</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-brand-beige mb-2">Tell us about your vision</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-brand-beige/30 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors resize-none" placeholder="Describe the piece you have in mind, materials, stones, or any specific inspiration..."></textarea>
            </div>
            
            <div className="pt-6 text-center">
              <button type="submit" className="px-12 py-4 bg-brand-gold text-white uppercase tracking-widest text-sm hover:bg-white hover:text-brand-black transition-colors">
                Submit Enquiry
              </button>
            </div>
          </form>

          <div className="mt-16 pt-12 border-t border-brand-beige/20 flex flex-col sm:flex-row justify-center items-center gap-6">
            <p className="text-brand-beige/80 text-sm">Prefer to speak directly?</p>
            <button className="flex items-center space-x-2 text-brand-gold hover:text-white transition-colors uppercase tracking-widest text-xs">
              <MessageCircle className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </button>
            <span className="hidden sm:inline text-brand-beige/30">|</span>
            <Link to="/appointments" className="flex items-center space-x-2 text-brand-gold hover:text-white transition-colors uppercase tracking-widest text-xs">
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
