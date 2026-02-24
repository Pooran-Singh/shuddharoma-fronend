import { SectionTitle } from '../components/SectionTitle';

export const AboutPage = () => (
  <section className="section-wrapper space-y-10">
    <SectionTitle eyebrow="About Us" title="A fragrance house shaped by mindful luxury" />
    <div className="grid gap-6 md:grid-cols-3">
      <article className="rounded-2xl bg-white p-6 shadow-luxe">
        <h3 className="font-heading text-3xl text-forest-700">Brand Philosophy</h3>
        <p className="mt-2 text-sm text-slate-600">Elevated rituals that merge sensory wellbeing with design-forward living.</p>
      </article>
      <article className="rounded-2xl bg-white p-6 shadow-luxe">
        <h3 className="font-heading text-3xl text-forest-700">Sustainability</h3>
        <p className="mt-2 text-sm text-slate-600">Refill-first packaging, responsible sourcing, and lower-impact production.</p>
      </article>
      <article className="rounded-2xl bg-white p-6 shadow-luxe">
        <h3 className="font-heading text-3xl text-forest-700">Craftsmanship</h3>
        <p className="mt-2 text-sm text-slate-600">Each formula is balanced in small batches for depth, elegance, and consistency.</p>
      </article>
    </div>
  </section>
);
