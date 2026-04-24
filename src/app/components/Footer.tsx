import { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router';
import { brand, footerColumns } from '../data/siteContent';
import { ContactDemoDialog } from './ContactDemoDialog';
import { OllyLogo } from './OllyLogo';
import { Input } from './ui/input';

export function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <footer className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_220px_360px] gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <OllyLogo className="h-7 w-auto text-foreground" />
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              {brand.tagline}
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4">{column.title}</h4>
              <ul className="space-y-3 text-muted-foreground">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href === '#contact-modal' ? (
                      <button
                        type="button"
                        onClick={() => setIsContactOpen(true)}
                        className="hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </button>
                    ) : link.href.startsWith('mailto:') ? (
                      <a href={link.href} className="hover:text-foreground transition-colors">
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.href} className="hover:text-foreground transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-4">Newsletter</h4>
            <p className="mb-6 max-w-sm text-muted-foreground">
              Get occasional updates on new creators, campaigns, and platform news.
            </p>
            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="glass-button h-12 rounded-full border-border bg-white px-5 pr-14"
                />
                <button
                  type="submit"
                  aria-label="Submit newsletter signup"
                  className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white transition-opacity hover:opacity-80"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </form>
          </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="size-4" />
              <a href={`mailto:${brand.email}`} className="hover:text-foreground transition-colors">
                {brand.email}
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ContactDemoDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}
