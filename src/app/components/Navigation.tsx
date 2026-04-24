import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { navigationItems } from '../data/siteContent';
import { ContactDemoDialog } from './ContactDemoDialog';

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleNavClick = (href: string) => {
    if (location.pathname === href && !href.includes('#')) {
      const scrollContainer = document.getElementById('app-scroll-container');
      scrollContainer?.scrollTo({ top: 0, behavior: 'smooth' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const scrollContainer = document.getElementById('app-scroll-container');

    const handleScroll = () => {
      const scrollTop = scrollContainer?.scrollTop ?? window.scrollY;
      setIsScrolled(scrollTop > 24);
    };

    handleScroll();
    scrollContainer?.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      scrollContainer?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" aria-label="Logo" className="text-xl tracking-tight">
              <span
                className={`relative block h-[1.2em] overflow-hidden transition-[width] duration-300 ease-out ${
                  isScrolled ? 'w-[1ch]' : 'w-[4ch]'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 block transition-all duration-300 ${
                    isScrolled ? 'translate-y-[-120%] opacity-0' : 'translate-y-0 opacity-100'
                  }`}
                >
                  Logo
                </span>
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 block transition-all duration-300 ${
                    isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
                  }`}
                >
                  L
                </span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="glass-button monochrome-button px-6 py-2.5 rounded-full"
              >
                Book a Demo
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden pt-4 pb-2 flex flex-col gap-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => {
                    handleNavClick(item.href);
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                className="glass-button monochrome-button px-6 py-2.5 rounded-full text-left"
                onClick={() => {
                  setIsOpen(false);
                  setIsContactOpen(true);
                }}
              >
                Book a Demo
              </button>
            </div>
          )}
        </div>
      </nav>

      <ContactDemoDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}
