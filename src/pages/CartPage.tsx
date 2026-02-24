import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

export const CartPage = () => {
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <section className="section-wrapper grid gap-8 lg:grid-cols-[2fr_1fr]">
      <div className="space-y-4">
        {items.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 shadow-luxe">
            <p>Your cart is empty.</p>
            <Link className="mt-3 inline-block text-forest-700 underline" to="/products">
              Continue shopping
            </Link>
          </div>
        ) : (
          items.map((item) => (
            <article key={item.product.id} className="grid gap-4 rounded-2xl bg-white p-4 shadow-luxe md:grid-cols-[120px_1fr_auto]">
              <img src={item.product.image} className="h-28 w-full rounded-lg object-cover" />
              <div>
                <h3 className="font-heading text-2xl text-forest-700">{item.product.name}</h3>
                <p className="text-sm">₹{item.product.price.toLocaleString('en-IN')}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded border px-2" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button className="rounded border px-2" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                  +
                </button>
                <button className="ml-2 text-xs text-red-500" onClick={() => removeItem(item.product.id)}>
                  Remove
                </button>
              </div>
            </article>
          ))
        )}
      </div>
      <aside className="h-fit rounded-2xl bg-white p-6 shadow-luxe">
        <h2 className="font-heading text-3xl text-forest-700">Summary</h2>
        <p className="mt-3 text-sm text-slate-600">Subtotal</p>
        <p className="text-2xl font-semibold text-forest-700">₹{subtotal.toLocaleString('en-IN')}</p>
        <Link to="/checkout" className="mt-5 block rounded-full bg-forest-700 px-4 py-3 text-center text-sm text-white">
          Proceed to Checkout
        </Link>
      </aside>
    </section>
  );
};
