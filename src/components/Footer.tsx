import { Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-white font-serif text-xl font-bold mb-4">Luminous Veil™</div>
            <p className="text-sm leading-relaxed">
              Beauty that includes everyone. One product. All skin tones.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Shop All</a></li>
              <li><a href="#" className="hover:text-white transition">Skin Tints</a></li>
              <li><a href="#" className="hover:text-white transition">Bundles</a></li>
              <li><a href="#" className="hover:text-white transition">Sale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
              <li><a href="#" className="hover:text-white transition">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-sm text-neutral-400">
              © 2026 Kayla X Aesthetics. All rights reserved.
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-neutral-300 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-700">
            <p className="text-xs text-neutral-500 text-center">
              This website uses cookies to enhance your experience. By continuing, you agree to our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
