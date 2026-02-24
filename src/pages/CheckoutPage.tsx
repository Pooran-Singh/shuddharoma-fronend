import { useCartStore } from '../store/cartStore';

export const CheckoutPage = () => {
  const items = useCartStore((s) => s.items);
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <section className="section-wrapper grid gap-8 lg:grid-cols-[2fr_1fr]">
      <form className="space-y-5 rounded-2xl bg-white p-6 shadow-luxe">
        <h1 className="font-heading text-4xl text-forest-700">Checkout</h1>
        <div className="grid gap-4 md:grid-cols-2">
          <input className="rounded-lg border p-3" placeholder="First Name" />
          <input className="rounded-lg border p-3" placeholder="Last Name" />
          <input className="rounded-lg border p-3 md:col-span-2" placeholder="Address" />
          <input className="rounded-lg border p-3" placeholder="City" />
          <input className="rounded-lg border p-3" placeholder="Postal Code" />
        </div>
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.15em] text-slate-500">Payment Method</p>
          <div className="space-y-2 text-sm">
            <label className="flex gap-2"><input type="radio" name="pay" defaultChecked /> UPI</label>
            <label className="flex gap-2"><input type="radio" name="pay" /> Credit / Debit Card</label>
            <label className="flex gap-2"><input type="radio" name="pay" /> Net Banking</label>
          </div>
        </div>
        <button type="button" className="rounded-full bg-forest-700 px-6 py-3 text-sm text-white">Place Order (Mock)</button>
      </form>
      <aside className="h-fit rounded-2xl bg-white p-6 shadow-luxe">
        <h2 className="font-heading text-3xl text-forest-700">Order Summary</h2>
        <div className="mt-4 space-y-2">
          {items.map((item) => (
            <p key={item.product.id} className="flex justify-between text-sm">
              <span>{item.product.name} × {item.quantity}</span>
              <span>₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
            </p>
          ))}
        </div>
        <p className="mt-5 border-t pt-3 text-xl font-semibold text-forest-700">Total: ₹{total.toLocaleString('en-IN')}</p>
      </aside>
    </section>
  );
};
