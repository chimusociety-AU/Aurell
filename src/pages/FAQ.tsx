import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    category: "Materials & Authenticity",
    items: [
      {
        question: "What materials do you use?",
        answer: "AURELL exclusively uses solid 18k yellow, white, and rose gold, as well as platinum. We do not use gold plating, vermeil, or filled materials. All our diamonds and gemstones are ethically sourced and conflict-free."
      },
      {
        question: "How do I know my jewellery is authentic?",
        answer: "Every piece of AURELL jewellery comes with a certificate of authenticity and is hallmarked to guarantee the purity of the metal. Pieces featuring diamonds over 0.5ct are accompanied by a GIA certificate."
      }
    ]
  },
  {
    category: "Orders & Shipping",
    items: [
      {
        question: "What are your shipping options?",
        answer: "We offer complimentary fully insured overnight shipping via FedEx for all domestic orders. International shipping is available and calculated at checkout. All packages require a signature upon delivery."
      },
      {
        question: "What is your return policy?",
        answer: "We accept returns on unworn, unaltered signature collection pieces within 30 days of delivery. Custom, bespoke, and engraved items are final sale and cannot be returned."
      },
      {
        question: "What are your lead times?",
        answer: "In-stock items ship within 2 business days. Made-to-order pieces from our signature collection typically take 2-3 weeks. Custom bespoke commissions require 4-6 weeks from design approval."
      }
    ]
  },
  {
    category: "Custom & Appointments",
    items: [
      {
        question: "How does the custom design process work?",
        answer: "The process begins with a consultation to discuss your vision. We then provide sketches and 3D renderings. Once approved, our master jewelers craft the piece. The entire process takes approximately 4-6 weeks."
      },
      {
        question: "Do I need to pay for a consultation?",
        answer: "Initial consultations, whether in-person or virtual, are complimentary. If you choose to proceed with a custom design, a non-refundable deposit is required before we begin the rendering phase."
      }
    ]
  },
  {
    category: "Care & Sizing",
    items: [
      {
        question: "How should I care for my jewellery?",
        answer: "Solid 18k gold can be worn daily. To maintain its shine, clean gently with warm water, mild soap, and a soft brush. Avoid exposing your jewellery to harsh chemicals, chlorine, and extreme temperatures."
      },
      {
        question: "How do I find my ring size?",
        answer: "We recommend visiting a local jeweler to be sized professionally. Alternatively, you can request a complimentary ring sizer from us, or use our online sizing guide available on every product page."
      }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="pt-24 pb-24 min-h-screen bg-brand-offwhite">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-brand-gray">
            Find answers to common questions about our materials, shipping, and services.
          </p>
        </div>

        <div className="space-y-12">
          {faqs.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h2 className="text-2xl font-serif mb-6 text-brand-black border-b border-brand-beige pb-4">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.items.map((item, itemIdx) => {
                  const id = `${sectionIdx}-${itemIdx}`;
                  const isOpen = openIndex === id;
                  return (
                    <div 
                      key={itemIdx} 
                      className="border border-brand-beige/50 bg-white overflow-hidden transition-all duration-300"
                    >
                      <button
                        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                        onClick={() => toggleAccordion(id)}
                      >
                        <span className="font-serif text-lg">{item.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-brand-gold flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-brand-gray flex-shrink-0" />
                        )}
                      </button>
                      <div 
                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-brand-gray text-sm leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center p-10 bg-brand-warmwhite border border-brand-beige/50">
          <h3 className="font-serif text-2xl mb-4">Still have questions?</h3>
          <p className="text-brand-gray mb-8">
            Our client care team is available to assist you with any inquiries.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-brand-black text-white uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
