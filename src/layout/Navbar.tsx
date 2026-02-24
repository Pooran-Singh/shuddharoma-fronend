import { Link, NavLink } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/checkout', label: 'Checkout' },
];

export const Navbar = () => {
  const count = useCartStore((state) => state.items.reduce((sum, item) => sum + item.quantity, 0));

  return (
    <header className="sticky top-0 z-30 border-b border-cream-100 bg-cream-50/90 backdrop-blur">
      <div className="section-wrapper flex h-20 items-center justify-between">
        <Link to="/" className="font-heading text-3xl text-forest-700">
          ShuddhAroma
        </Link>
        <nav className="flex items-center gap-5 text-sm text-forest-700">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'font-semibold text-gold-500' : '')}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/cart" className="rounded-full border border-forest-700 px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
            Cart ({count})
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
