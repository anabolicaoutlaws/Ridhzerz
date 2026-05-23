import Header from './components/Header';
import Hero from './components/Hero';
import ProductDetails from './components/ProductDetails';
import ShadeFinder from './components/ShadeFinder';
import HowToApply from './components/HowToApply';
import Philosophy from './components/Philosophy';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-rose-100 selection:text-rose-900">
      <Header />
      <main>
        <Hero />
        <ProductDetails />
        <ShadeFinder />
        <HowToApply />
        <div id="about">
          <Philosophy />
        </div>
        <div id="reviews">
          <Reviews />
        </div>

        {/* Final CTA Section */}
        <section className="py-32 bg-neutral-900 text-white text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-transparent to-amber-900/10"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-rose-400 font-medium tracking-[0.3em] uppercase mb-6 block text-xs">
              One product. Endless skin.
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Ready to meet your <span className="italic">new skin</span>?
            </h2>
            <p className="text-neutral-300 mb-12 text-lg max-w-xl mx-auto leading-relaxed">
              Try Luminous Veil™ risk-free. If it's not the best skin tint you've ever worn, we'll refund you — no questions asked.
            </p>
            <a
              href="#product"
              className="inline-block bg-white text-neutral-900 px-12 py-5 text-sm tracking-widest uppercase hover:bg-rose-50 transition-all"
            >
              Shop the Skin Tint — $42
            </a>
            <p className="mt-6 text-xs tracking-widest uppercase text-neutral-500">
              30-day money-back guarantee
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
