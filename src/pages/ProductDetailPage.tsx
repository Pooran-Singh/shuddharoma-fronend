import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, getReviewsByProduct } from '../api/products';
import { useCartStore } from '../store/cartStore';
import type { Product, Review } from '../types';

export const ProductDetailPage = () => {
  const { id = '' } = useParams();
  const [product, setProduct] = useState<Product>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentImage, setCurrentImage] = useState<string>('');
  const addToCart = useCartStore((s) => s.addToCart);

  useEffect(() => {
    getProductById(id).then((result) => {
      setProduct(result);
      setCurrentImage(result?.image ?? '');
    });
    getReviewsByProduct(id).then(setReviews);
  }, [id]);

  if (!product) return <div className="section-wrapper">Loading product details...</div>;

  return (
    <section className="section-wrapper grid gap-10 lg:grid-cols-2">
      <div>
        <img src={currentImage} className="h-[420px] w-full rounded-2xl object-cover" />
        <div className="mt-4 grid grid-cols-3 gap-3">
          {product.gallery.map((img) => (
            <button key={img} onClick={() => setCurrentImage(img)}>
              <img src={img} className="h-24 w-full rounded-lg object-cover" />
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.2em] text-sandal-500">{product.category}</p>
        <h1 className="font-heading text-5xl text-forest-700">{product.name}</h1>
        <p className="text-slate-600">{product.description}</p>
        <p className="text-2xl font-semibold text-forest-700">₹{product.price.toLocaleString('en-IN')}</p>
        <button onClick={() => addToCart(product)} className="rounded-full bg-forest-700 px-6 py-3 text-white">
          Add to Cart
        </button>
        <div>
          <h2 className="font-heading text-3xl text-forest-700">Ingredients</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
            {product.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-3xl text-forest-700">Usage Guide</h2>
          <p className="mt-2 text-sm text-slate-600">{product.usage}</p>
        </div>
        <div>
          <h2 className="font-heading text-3xl text-forest-700">Reviews</h2>
          <div className="mt-3 space-y-3">
            {reviews.map((review) => (
              <article key={review.id} className="rounded-xl bg-white p-4 shadow-luxe">
                <p className="font-medium text-forest-700">{review.author}</p>
                <p className="text-xs text-gold-500">{'★'.repeat(review.rating)}</p>
                <p className="text-sm text-slate-600">{review.message}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
