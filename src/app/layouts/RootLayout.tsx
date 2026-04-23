import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export function RootLayout() {
  return (
    <div className="size-full bg-background text-foreground overflow-y-auto">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
