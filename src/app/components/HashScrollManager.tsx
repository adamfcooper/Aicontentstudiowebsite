import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function HashScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const scrollContainer = document.getElementById('app-scroll-container');

    if (!location.hash) {
      scrollContainer?.scrollTo({ top: 0, behavior: 'auto' });
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const id = location.hash.replace('#', '');
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    requestAnimationFrame(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.hash, location.pathname]);

  return null;
}
