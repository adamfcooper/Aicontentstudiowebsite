import { Sparkles, Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <Sparkles className="size-6 text-white" />
              </div>
              <span className="text-xl tracking-tight">Catalyst Studio</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              AI-powered content creation meets real human talent. Transform your visual content production without the complexity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-10 rounded-lg bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="size-10 rounded-lg bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors">
                <Linkedin className="size-5" />
              </a>
              <a href="#" className="size-10 rounded-lg bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors">
                <Instagram className="size-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">AI Content Studio</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Talent Network</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">For Automotive</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">For Fashion</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">For Ecommerce</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Become a Creator</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Get in Touch</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Catalyst Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="size-4" />
            <a href="mailto:hello@catalyststudio.ai" className="hover:text-foreground transition-colors">
              hello@catalyststudio.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
