import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { products } from '../mocks/data';
import { ProductCard } from '../components/ProductCard';

export const HomePage = () => {
  return (
    <div className="space-y-20">
      <section className="section-wrapper grid gap-8 rounded-3xl bg-white p-8 shadow-luxe md:grid-cols-2 md:items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-sandal-500">Luxury Home Fragrance</p>
          <h1 className="font-heading text-5xl text-forest-700 md:text-6xl">Fragrance That Feels Sacred</h1>
          <p className="mt-4 max-w-xl text-slate-600">
            Curated scent rituals inspired by contemporary Indian calm — made for refined living spaces.
          </p>
          <Link to="/products" className="mt-6 inline-flex rounded-full bg-forest-700 px-6 py-3 text-sm text-white">
            Explore Collection
          </Link>
        </motion.div>
        <img
          src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80"
          alt="Luxury living room"
          className="h-96 w-full rounded-2xl object-cover"
        />
      </section>

      <section className="section-wrapper">
        <SectionTitle eyebrow="Featured" title="Signature Collection" subtitle="Handpicked bestsellers with elevated scent performance." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="section-wrapper grid gap-6 rounded-3xl bg-forest-700 p-10 text-cream-50 md:grid-cols-3">
        {['Clean burn soy blend', 'Refillable sustainable vessels', 'IFRA-compliant premium oils'].map((item) => (
          <p key={item} className="text-center text-sm uppercase tracking-[0.15em]">
            {item}
          </p>
        ))}
      </section>

      <section className="section-wrapper grid gap-12 md:grid-cols-2">
        <div>
          <SectionTitle eyebrow="Our Story" title="Indian roots, modern ritual" />
          <p className="text-slate-600">
            ShuddhAroma blends artisanal fragrance craft with understated design. Every product is designed to feel intentional,
            calming, and deeply luxurious.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            'https://images.unsplash.com/photo-1602872023784-4f84d7d5c903?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1605217613423-0f85ccaf4d22?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80',
          ].map((img) => (
            <img key={img} src={img} className="h-40 w-full rounded-xl object-cover" />
          ))}
        </div>
      </section>

      <section className="section-wrapper">
        <SectionTitle eyebrow="Testimonials" title="Loved by design-forward homes" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            'The scent profile feels bespoke and elegant.',
            'Packaging and quality rival international brands.',
            'Our signature mood-setting ritual every evening.',
          ].map((quote) => (
            <div key={quote} className="rounded-2xl bg-white p-6 shadow-luxe">
              <p className="text-sm text-slate-600">“{quote}”</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrapper">
        <SectionTitle eyebrow="Instagram" title="@shuddharoma" subtitle="A visual diary of scent, space, and stillness." />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {products.map((product) => (
            <img key={product.id} src={product.image} alt={product.name} className="aspect-square rounded-xl object-cover" />
          ))}
        </div>
      </section>

      <section className="section-wrapper rounded-3xl bg-white p-10 text-center shadow-luxe">
        <h3 className="font-heading text-4xl text-forest-700">Join our fragrance circle</h3>
        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">Receive rituals, launches, and styling inspiration.</p>
        <div className="mx-auto mt-6 flex max-w-lg flex-col gap-3 sm:flex-row">
          <input className="w-full rounded-full border border-cream-100 px-5 py-3" placeholder="Email address" />
          <button className="rounded-full bg-forest-700 px-6 py-3 text-sm text-white">Subscribe</button>
        </div>
      </section>
    </div>
  );
};
