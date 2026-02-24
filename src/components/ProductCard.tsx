import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Product } from '../types';
import { useCartStore } from '../store/cartStore';

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <motion.article whileHover={{ y: -4 }} className="overflow-hidden rounded-2xl border border-cream-100 bg-white shadow-luxe">
      <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
      <div className="space-y-3 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-sandal-500">{product.category}</p>
        <h3 className="font-heading text-2xl text-forest-700">{product.name}</h3>
        <p className="text-sm text-slate-600">{product.subtitle}</p>
        <p className="font-semibold text-forest-700">₹{product.price.toLocaleString('en-IN')}</p>
        <div className="flex gap-2">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 rounded-full border border-forest-700 px-4 py-2 text-center text-sm text-forest-700"
          >
            Quick View
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="flex-1 rounded-full bg-forest-700 px-4 py-2 text-sm text-white transition hover:bg-forest-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.article>
  );
};
