import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { HashScrollManager } from '../components/HashScrollManager';

export function RootLayout() {
  return (
    <div id="app-scroll-container" className="size-full bg-background text-foreground overflow-y-auto">
      <HashScrollManager />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
