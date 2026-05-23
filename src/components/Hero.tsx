import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-rose-600 font-medium tracking-[0.3em] uppercase mb-6 block text-xs">
            Kayla X Aesthetics
          </span>
          
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Your skin, <span className="italic text-rose-600">elevated</span>
          </h1>
          
          <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Luminous Veil™ is the skin tint that adapts to you. One shade. All skin tones. 
            Buildable coverage that feels like nothing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-neutral-900 text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-neutral-800 transition">
              Shop Now — $42
            </button>
            <button className="border-2 border-neutral-900 text-neutral-900 px-8 py-4 text-sm tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition">
              Learn More
            </button>
          </div>

          <p className="text-xs text-neutral-500 tracking-widest uppercase">
            ✓ Free shipping on orders over $50 • ✓ 30-day money-back guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}
