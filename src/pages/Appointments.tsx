import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Video, Calendar as CalendarIcon, Clock } from "lucide-react";

export default function Appointments() {
  const [appointmentType, setAppointmentType] = useState("in-person");

  return (
    <div className="pt-24 pb-24 min-h-screen bg-brand-offwhite">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Private Appointments</h1>
          <p className="text-lg text-brand-gray leading-relaxed">
            Experience AURELL with undivided attention. Whether you are seeking a signature piece, discussing a custom design, or simply exploring our collections, we invite you to book a private consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div 
            className={`p-10 border cursor-pointer transition-all duration-300 ${appointmentType === "in-person" ? "border-brand-black bg-white shadow-sm" : "border-brand-beige/50 bg-transparent hover:border-brand-black/50"}`}
            onClick={() => setAppointmentType("in-person")}
          >
            <MapPin className={`w-8 h-8 mb-6 ${appointmentType === "in-person" ? "text-brand-gold" : "text-brand-gray"}`} />
            <h3 className="font-serif text-2xl mb-4">In-Person Consultation</h3>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              Visit our private atelier to view collections, try on pieces, and discuss custom designs with our master jewelers in an intimate setting.
            </p>
            <span className={`text-xs uppercase tracking-widest font-medium ${appointmentType === "in-person" ? "text-brand-black" : "text-brand-gray"}`}>
              Select In-Person
            </span>
          </div>
          
          <div 
            className={`p-10 border cursor-pointer transition-all duration-300 ${appointmentType === "virtual" ? "border-brand-black bg-white shadow-sm" : "border-brand-beige/50 bg-transparent hover:border-brand-black/50"}`}
            onClick={() => setAppointmentType("virtual")}
          >
            <Video className={`w-8 h-8 mb-6 ${appointmentType === "virtual" ? "text-brand-gold" : "text-brand-gray"}`} />
            <h3 className="font-serif text-2xl mb-4">Virtual Consultation</h3>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              Connect with our experts from anywhere in the world. We offer high-definition video consultations to showcase pieces and discuss bespoke creations.
            </p>
            <span className={`text-xs uppercase tracking-widest font-medium ${appointmentType === "virtual" ? "text-brand-black" : "text-brand-gray"}`}>
              Select Virtual
            </span>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="bg-brand-warmwhite py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 border border-brand-beige/50 shadow-sm">
            <h2 className="text-3xl font-serif mb-8 text-center">Schedule Your {appointmentType === "in-person" ? "Visit" : "Call"}</h2>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-gray mb-2">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-brand-beige py-3 text-brand-black focus:outline-none focus:border-brand-black transition-colors" required />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-gray mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-transparent border-b border-brand-beige py-3 text-brand-black focus:outline-none focus:border-brand-black transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-gray mb-2">Purpose of Appointment</label>
                <select className="w-full bg-transparent border-b border-brand-beige py-3 text-brand-black focus:outline-none focus:border-brand-black transition-colors appearance-none">
                  <option value="">Select an option</option>
                  <option value="custom">Custom Design Consultation</option>
                  <option value="engagement">Engagement / Wedding Rings</option>
                  <option value="viewing">Collection Viewing</option>
                  <option value="styling">Styling Advice</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-gray mb-2">Preferred Date</label>
                  <div className="relative">
                    <input type="date" className="w-full bg-transparent border-b border-brand-beige py-3 text-brand-black focus:outline-none focus:border-brand-black transition-colors" required />
                    <CalendarIcon className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-brand-gray pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-gray mb-2">Preferred Time</label>
                  <div className="relative">
                    <select className="w-full bg-transparent border-b border-brand-beige py-3 text-brand-black focus:outline-none focus:border-brand-black transition-colors appearance-none" required>
                      <option value="">Select a time</option>
                      <option value="morning">Morning (10am - 12pm)</option>
                      <option value="afternoon">Afternoon (1pm - 4pm)</option>
                      <option value="evening">Late Afternoon (4pm - 6pm)</option>
                    </select>
                    <Clock className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-brand-gray pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-gray mb-2">Additional Notes</label>
                <textarea rows={3} className="w-full bg-transparent border-b border-brand-beige py-3 text-brand-black focus:outline-none focus:border-brand-black transition-colors resize-none" placeholder="Let us know if there are specific pieces you'd like to see..."></textarea>
              </div>
              
              <div className="pt-8 text-center">
                <button type="submit" className="w-full md:w-auto px-16 py-4 bg-brand-black text-white uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors">
                  Request Appointment
                </button>
                <p className="text-brand-gray text-xs mt-4">
                  Appointments are subject to availability. Our concierge will contact you to confirm your booking.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-24 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-[500px] bg-brand-warmwhite">
              <img 
                src="https://images.unsplash.com/photo-1573408301145-b98c46544c85?q=80&w=1000&auto=format&fit=crop" 
                alt="Jewellery consultation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-8">The Experience</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl mb-2">Personalized Attention</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Enjoy a dedicated 45-minute session with one of our senior consultants, focused entirely on your needs and preferences.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Exclusive Access</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    View our complete signature collections, including pieces not yet available online, and explore our archive of custom designs.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Expert Guidance</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Receive expert advice on styling, diamond selection, and the nuances of different metals to ensure you make an informed decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
