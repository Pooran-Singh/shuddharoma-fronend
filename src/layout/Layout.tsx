import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Layout = () => (
  <div>
    <Navbar />
    <main className="pb-16 pt-6">
      <Outlet />
    </main>
  </div>
);
