import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import type { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { SectionTitle } from '../components/SectionTitle';

export const ProductListingPage = () => {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setItems);
  }, []);

  return (
    <section className="section-wrapper">
      <SectionTitle eyebrow="Collection" title="Shop All Fragrances" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
