import { useState } from "react";
import { Link } from "react-router-dom";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

const products = [
  { id: 1, name: "The Classic Herringbone", price: "$1,250", category: "Chains", metal: "Yellow Gold", image: "https://images.unsplash.com/photo-1599643478514-4a1101861343?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Eternity Diamond Band", price: "$2,800", category: "Rings", metal: "White Gold", image: "https://images.unsplash.com/photo-1605100804763-247f66150ce8?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Minimalist Gold Cuff", price: "$1,850", category: "Bracelets", metal: "Yellow Gold", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Signature Signet Ring", price: "$950", category: "Rings", metal: "Yellow Gold", image: "https://images.unsplash.com/photo-1602752250014-49035222629b?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Diamond Tennis Bracelet", price: "$4,500", category: "Bracelets", metal: "White Gold", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Opal Pendant Necklace", price: "$1,100", category: "Necklaces", metal: "Rose Gold", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop" },
  { id: 7, name: "Twisted Rope Chain", price: "$1,450", category: "Chains", metal: "Yellow Gold", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop" },
  { id: 8, name: "Solitaire Stud Earrings", price: "$2,200", category: "Earrings", metal: "White Gold", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop" },
];

export default function Shop() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="pt-24 pb-24 min-h-screen bg-brand-offwhite">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">The Collection</h1>
        <p className="text-brand-gray max-w-2xl mx-auto">
          Explore our signature pieces, crafted from solid 18k gold and ethically sourced stones. Designed for the modern aesthete.
        </p>
      </div>

      {/* Filters & Sorting Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 border-y border-brand-beige/50">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 text-sm uppercase tracking-widest hover:text-brand-gold transition-colors mb-4 sm:mb-0"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter</span>
          </button>
          
          <div className="flex items-center space-x-2 text-sm uppercase tracking-widest cursor-pointer hover:text-brand-gold transition-colors">
            <span>Sort By: Featured</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Expandable Filter Area */}
        {isFilterOpen && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-b border-brand-beige/50 text-sm">
            <div>
              <h3 className="font-serif text-lg mb-4">Category</h3>
              <ul className="space-y-2 text-brand-gray">
                <li className="hover:text-brand-black cursor-pointer">All Pieces</li>
                <li className="hover:text-brand-black cursor-pointer">Rings</li>
                <li className="hover:text-brand-black cursor-pointer">Necklaces & Chains</li>
                <li className="hover:text-brand-black cursor-pointer">Bracelets</li>
                <li className="hover:text-brand-black cursor-pointer">Earrings</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg mb-4">Metal</h3>
              <ul className="space-y-2 text-brand-gray">
                <li className="hover:text-brand-black cursor-pointer">18k Yellow Gold</li>
                <li className="hover:text-brand-black cursor-pointer">18k White Gold</li>
                <li className="hover:text-brand-black cursor-pointer">18k Rose Gold</li>
                <li className="hover:text-brand-black cursor-pointer">Platinum</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg mb-4">Price</h3>
              <ul className="space-y-2 text-brand-gray">
                <li className="hover:text-brand-black cursor-pointer">Under $1,000</li>
                <li className="hover:text-brand-black cursor-pointer">$1,000 - $2,500</li>
                <li className="hover:text-brand-black cursor-pointer">$2,500 - $5,000</li>
                <li className="hover:text-brand-black cursor-pointer">Over $5,000</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="group block">
              <div className="relative h-[400px] mb-4 overflow-hidden bg-brand-warmwhite">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-white text-brand-black py-3 uppercase tracking-widest text-xs hover:bg-brand-black hover:text-white transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-lg mb-1 group-hover:text-brand-gold transition-colors">{product.name}</h3>
                  <p className="text-brand-gray text-xs uppercase tracking-wider">{product.metal}</p>
                </div>
                <p className="text-brand-black text-sm">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Pagination / Load More */}
        <div className="mt-20 text-center">
          <button className="px-8 py-4 bg-transparent border border-brand-black text-brand-black uppercase tracking-widest text-sm hover:bg-brand-black hover:text-white transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
