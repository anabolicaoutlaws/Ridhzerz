export default function HowToApply() {
  const steps = [
    {
      number: '01',
      title: 'Prep',
      description: 'Start with moisturizer and sunscreen. Let it set for 1-2 minutes.'
    },
    {
      number: '02',
      title: 'Dispense',
      description: 'Pump 2-3 times into your palm. A little goes a long way.'
    },
    {
      number: '03',
      title: 'Apply',
      description: 'Dot across forehead, cheeks, nose, and chin. Use your fingers or a damp beauty sponge.'
    },
    {
      number: '04',
      title: 'Blend',
      description: 'Gently tap and blend until seamless. Build coverage as desired.'
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-rose-600 font-medium tracking-[0.3em] uppercase mb-4 block text-xs">
            Application Guide
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            How to Apply Luminous Veil™
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {steps.map((step, i) => (
            <div key={i} className="bg-neutral-50 p-8 rounded-lg border border-neutral-200">
              <div className="text-5xl font-serif text-rose-600 mb-4">{step.number}</div>
              <h3 className="text-2xl font-serif mb-3">{step.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-lg p-12 border border-rose-100">
          <h3 className="text-2xl font-serif mb-4">Pro Tips</h3>
          <ul className="space-y-3 text-neutral-700">
            <li>• Use less product on the cheeks and blend toward the temples</li>
            <li>• For more coverage, layer after 30 seconds instead of applying more product at once</li>
            <li>• Mix with your favorite moisturizer for a sheer, hydrated finish</li>
            <li>• Set with translucent powder if you have oily skin</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
