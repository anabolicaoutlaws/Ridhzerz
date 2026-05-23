import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-neutral-900">
          Luminous Veil™
        </div>
        
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#product" className="text-sm hover:text-rose-600 transition">Shop</a>
          <a href="#about" className="text-sm hover:text-rose-600 transition">About</a>
          <a href="#reviews" className="text-sm hover:text-rose-600 transition">Reviews</a>
          <button className="bg-neutral-900 text-white px-6 py-2 text-sm hover:bg-neutral-800 transition">
            Buy Now
          </button>
        </nav>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-t border-neutral-200 p-4 space-y-4">
          <a href="#product" className="block text-sm hover:text-rose-600">Shop</a>
          <a href="#about" className="block text-sm hover:text-rose-600">About</a>
          <a href="#reviews" className="block text-sm hover:text-rose-600">Reviews</a>
          <button className="w-full bg-neutral-900 text-white px-6 py-2 text-sm">Buy Now</button>
        </nav>
      )}
    </header>
  );
}
