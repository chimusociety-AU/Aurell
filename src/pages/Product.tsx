import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, Minus, Plus, MessageCircle, ShieldCheck, Truck, RotateCcw, Star } from "lucide-react";
import { motion } from "motion/react";

const productData = {
  id: 1,
  name: "The Classic Herringbone",
  price: "$1,250",
  description: "A masterclass in fluid design. The Classic Herringbone chain is meticulously crafted from solid 18k yellow gold, designed to lay perfectly flat against the collarbone. Its high-polish finish catches the light with every movement, making it a striking standalone piece or the perfect foundation for layering.",
  details: [
    "Solid 18k Yellow Gold",
    "Width: 4.5mm",
    "Length: 16 inches or 18 inches",
    "Lobster clasp closure",
    "Hand-finished in our atelier"
  ],
  images: [
    "https://images.unsplash.com/photo-1599643478514-4a1101861343?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop"
  ]
};

export default function Product() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("16 inch");
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="pt-24 pb-24 min-h-screen bg-brand-offwhite">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs uppercase tracking-widest text-brand-gray flex items-center space-x-2">
        <Link to="/" className="hover:text-brand-black transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/shop" className="hover:text-brand-black transition-colors">Shop</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-brand-black">{productData.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Product Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-brand-warmwhite overflow-hidden">
              <img 
                src={productData.images[0]} 
                alt={productData.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-brand-warmwhite overflow-hidden">
                <img 
                  src={productData.images[1]} 
                  alt={`${productData.name} detail`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-square bg-brand-warmwhite overflow-hidden">
                <img 
                  src={productData.images[2]} 
                  alt={`${productData.name} worn`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-serif mb-2">{productData.name}</h1>
            <p className="text-xl text-brand-gray mb-6">{productData.price}</p>
            
            <p className="text-brand-gray leading-relaxed mb-8">
              {productData.description}
            </p>

            {/* Size Selector */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm uppercase tracking-widest">Length</span>
                <button className="text-xs text-brand-gray underline hover:text-brand-black transition-colors">Size Guide</button>
              </div>
              <div className="flex space-x-4">
                {["16 inch", "18 inch"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border text-sm transition-colors ${
                      selectedSize === size 
                        ? "border-brand-black bg-brand-black text-white" 
                        : "border-brand-beige text-brand-gray hover:border-brand-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex space-x-4 mb-8">
              <div className="flex items-center border border-brand-beige px-4 py-3">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-brand-gray hover:text-brand-black transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="mx-6 text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-brand-gray hover:text-brand-black transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button className="flex-1 bg-brand-black text-white uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors">
                Add to Cart
              </button>
            </div>

            {/* WhatsApp Enquiry */}
            <button className="w-full flex items-center justify-center space-x-2 border border-brand-beige py-4 uppercase tracking-widest text-xs hover:bg-brand-warmwhite transition-colors mb-10">
              <MessageCircle className="w-4 h-4" />
              <span>Enquire via WhatsApp</span>
            </button>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 py-6 border-y border-brand-beige/50 text-xs uppercase tracking-wider text-brand-gray">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span>Lifetime Warranty</span>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="w-4 h-4 text-brand-gold" />
                <span>Free Insured Shipping</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="w-4 h-4 text-brand-gold" />
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-4 h-4 text-brand-gold" />
                <span>Authenticity Guaranteed</span>
              </div>
            </div>

            {/* Accordion Details */}
            <div className="border-b border-brand-beige/50">
              <div className="flex border-b border-brand-beige/50">
                <button 
                  onClick={() => setActiveTab("details")}
                  className={`flex-1 py-4 text-sm uppercase tracking-widest transition-colors ${activeTab === "details" ? "text-brand-black border-b-2 border-brand-black" : "text-brand-gray hover:text-brand-black"}`}
                >
                  Details
                </button>
                <button 
                  onClick={() => setActiveTab("shipping")}
                  className={`flex-1 py-4 text-sm uppercase tracking-widest transition-colors ${activeTab === "shipping" ? "text-brand-black border-b-2 border-brand-black" : "text-brand-gray hover:text-brand-black"}`}
                >
                  Shipping
                </button>
              </div>
              <div className="py-6 text-brand-gray text-sm leading-relaxed min-h-[150px]">
                {activeTab === "details" && (
                  <ul className="list-disc pl-5 space-y-2">
                    {productData.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                )}
                {activeTab === "shipping" && (
                  <div className="space-y-4">
                    <p><strong>Made to Order:</strong> Please allow 2-3 weeks for production.</p>
                    <p><strong>Domestic Shipping:</strong> Complimentary overnight shipping via FedEx with signature required.</p>
                    <p><strong>International Shipping:</strong> Available worldwide. Duties and taxes calculated at checkout.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <h2 className="text-2xl md:text-3xl font-serif mb-10 text-center">Complete the Look</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Minimalist Gold Cuff", price: "$1,850", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop" },
            { name: "Signature Signet Ring", price: "$950", image: "https://images.unsplash.com/photo-1602752250014-49035222629b?q=80&w=800&auto=format&fit=crop" },
            { name: "Eternity Diamond Band", price: "$2,800", image: "https://images.unsplash.com/photo-1605100804763-247f66150ce8?q=80&w=800&auto=format&fit=crop" },
            { name: "Solitaire Stud Earrings", price: "$2,200", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop" }
          ].map((product, idx) => (
            <Link to={`/product/${idx + 2}`} key={idx} className="group block">
              <div className="relative h-[300px] mb-4 overflow-hidden bg-brand-warmwhite">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-serif text-lg mb-1 group-hover:text-brand-gold transition-colors">{product.name}</h3>
              <p className="text-brand-gray text-sm">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
