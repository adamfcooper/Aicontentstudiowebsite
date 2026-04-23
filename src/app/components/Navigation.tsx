import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
              <Sparkles className="size-6 text-white" />
            </div>
            <span className="text-xl tracking-tight">Catalyst Studio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </button>
            <Link to="/creators" className="text-muted-foreground hover:text-foreground transition-colors">
              Creators
            </Link>
            <button onClick={() => scrollToSection('work')} className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <button onClick={() => scrollToSection('services')} className="text-left text-muted-foreground hover:text-foreground transition-colors">
              Services
            </button>
            <Link to="/creators" className="text-left text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
              Creators
            </Link>
            <button onClick={() => scrollToSection('work')} className="text-left text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-left text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-left"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
