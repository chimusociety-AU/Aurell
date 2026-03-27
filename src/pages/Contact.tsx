import { MessageCircle, Instagram, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Client Care</h1>
          <p className="text-lg text-brand-gray leading-relaxed">
            We are here to assist you with any inquiries regarding our collections, bespoke services, or existing orders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="bg-brand-warmwhite p-10 md:p-16 border border-brand-beige/50">
            <h2 className="text-3xl font-serif mb-10">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-medium mb-1">Email</h3>
                  <a href="mailto:concierge@aurell.com" className="text-brand-gray hover:text-brand-black transition-colors">concierge@aurell.com</a>
                  <p className="text-brand-gray text-sm mt-1">We aim to reply within 24 hours.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MessageCircle className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-medium mb-1">WhatsApp</h3>
                  <a href="#" className="text-brand-gray hover:text-brand-black transition-colors">+44 7700 900077</a>
                  <p className="text-brand-gray text-sm mt-1">Available for immediate assistance.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Instagram className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-medium mb-1">Instagram</h3>
                  <a href="#" className="text-brand-gray hover:text-brand-black transition-colors">@aurell.jewellery</a>
                  <p className="text-brand-gray text-sm mt-1">Follow us for the latest drops.</p>
                </div>
              </div>

              <div className="pt-8 border-t border-brand-beige/50">
                <div className="flex items-start space-x-4 mb-8">
                  <MapPin className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-medium mb-1">The Atelier</h3>
                    <p className="text-brand-gray">15 Mount Street<br/>Mayfair, London<br/>W1K 2RN</p>
                    <p className="text-brand-gray text-sm mt-2 italic">By appointment only.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-medium mb-1">Hours</h3>
                    <p className="text-brand-gray text-sm">Monday - Friday: 10:00 AM - 6:00 PM<br/>Saturday: 11:00 AM - 4:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-16 border border-brand-beige/50 shadow-sm">
            <h2 className="text-3xl font-serif mb-8">Send a Message</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-gray mb-2">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-brand-beige py-3 text-brand-black focus:outline-none focus:border-brand-black transition-colors" required />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-gray mb-2">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-brand-beige py-3 text-brand-black focus:outline-none focus:border-brand-black transition-colors" required />
                </div>
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-gray mb-2">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-brand-beige py-3 text-brand-black focus:outline-none focus:border-brand-black transition-colors" required />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-gray mb-2">Subject</label>
                <select className="w-full bg-transparent border-b border-brand-beige py-3 text-brand-black focus:outline-none focus:border-brand-black transition-colors appearance-none">
                  <option value="">Select a topic</option>
                  <option value="order">Existing Order</option>
                  <option value="product">Product Enquiry</option>
                  <option value="custom">Custom Design</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-gray mb-2">Message</label>
                <textarea rows={5} className="w-full bg-transparent border-b border-brand-beige py-3 text-brand-black focus:outline-none focus:border-brand-black transition-colors resize-none" placeholder="How can we help you?" required></textarea>
              </div>
              
              <div className="pt-6">
                <button type="submit" className="w-full px-8 py-4 bg-brand-black text-white uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
