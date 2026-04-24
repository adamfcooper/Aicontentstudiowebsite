import { ArrowRight, Menu, X } from 'lucide-react';
import { type ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { navigationItems } from '../data/siteContent';
import { ContactDemoDialog } from './ContactDemoDialog';
import { OllyLogo, OllyMark } from './OllyLogo';

type NavPillProps = {
  children: ReactNode;
  isScrolled: boolean;
  className?: string;
};

function NavPill({ children, isScrolled, className = '' }: NavPillProps) {
  return (
    <span
      className={`glass-button relative overflow-hidden rounded-full border border-black/75 backdrop-blur-md transition-all duration-500 ${
        isScrolled ? 'border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.08)]' : 'bg-white/10'
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-0 origin-left rounded-full bg-gradient-to-r from-[#050505] to-[#1a1a1a] transition-transform duration-[2000ms] ease-out ${
          isScrolled ? 'scale-x-100' : 'scale-x-0'
        }`}
      />
      <span
        className={`relative z-10 flex items-center transition-colors duration-[2000ms] ease-out ${
          isScrolled ? 'text-white' : 'text-black'
        }`}
      >
        {children}
      </span>
    </span>
  );
}

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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="mx-auto max-w-none px-4 py-4 lg:px-5">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              aria-label="Logo"
              className="hidden text-xl tracking-tight text-black transition-all duration-300 md:block md:absolute md:left-1/2 md:z-20 md:-translate-x-1/2"
            >
              <span
                className={`relative block overflow-hidden transition-[width,height] duration-300 ease-out ${
                  isScrolled ? 'h-[1.8rem] w-[1.8rem]' : 'h-[1.6rem] w-[3.5rem]'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 block transition-all duration-300 ${
                    isScrolled ? 'translate-y-[-120%] opacity-0' : 'translate-y-0 opacity-100'
                  }`}
                >
                  <OllyLogo className="h-full w-full" />
                </span>
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 block transition-all duration-300 ${
                    isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
                  }`}
                >
                  <OllyMark className="h-full w-full" />
                </span>
              </span>
            </Link>

            {!isScrolled ? (
              <Link to="/" aria-label="Logo" className="text-black md:hidden">
                <OllyLogo className="h-6 w-auto" />
              </Link>
            ) : null}

            <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
              <div className="flex items-center gap-3 text-white">
                <div className="flex items-center rounded-full px-3 py-2">
                  {navigationItems.map((item, index) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="rounded-full px-6 py-2 text-sm tracking-[0.08em] text-black transition-opacity duration-200 hover:opacity-80"
                      onClick={() => handleNavClick(item.href)}
                    >
                      <span className="mr-2 text-[0.7rem] tracking-[0.14em] text-black/65">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="group flex items-center"
              >
                <NavPill
                  isScrolled={isScrolled}
                  className="px-6 py-3 text-sm tracking-[0.08em] transition-transform duration-200 group-active:scale-[0.99]"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </NavPill>
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
