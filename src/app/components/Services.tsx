import { Wand2, UserCheck, ImageIcon, Share2, Zap, TrendingUp } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground">
            Two powerful offerings to scale your visual content production
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* AI Content Studio */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative p-10 rounded-3xl bg-card border border-border hover:border-violet-500/50 transition-all h-full">
              <div className="space-y-6">
                <div className="size-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <Wand2 className="size-8 text-white" />
                </div>

                <div>
                  <h3 className="text-3xl mb-3">AI Content Studio</h3>
                  <p className="text-muted-foreground text-lg">
                    Scalable, high-quality visual content without traditional shoots
                  </p>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ImageIcon className="size-5 text-violet-500 mt-1 flex-shrink-0" />
                    <span>Product imagery & lifestyle shots</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Share2 className="size-5 text-violet-500 mt-1 flex-shrink-0" />
                    <span>Social media content optimized for engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="size-5 text-violet-500 mt-1 flex-shrink-0" />
                    <span>Ad creatives that convert</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="size-5 text-violet-500 mt-1 flex-shrink-0" />
                    <span>No photoshoots, no production delays</span>
                  </li>
                </ul>

                <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:opacity-90 transition-opacity mt-6">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Talent & Creator Layer */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative p-10 rounded-3xl bg-card border border-border hover:border-fuchsia-500/50 transition-all h-full">
              <div className="space-y-6">
                <div className="size-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-500 flex items-center justify-center">
                  <UserCheck className="size-8 text-white" />
                </div>

                <div>
                  <h3 className="text-3xl mb-3">Talent & Creator Layer</h3>
                  <p className="text-muted-foreground text-lg">
                    Real creators, amplified with AI for unlimited scalability
                  </p>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ImageIcon className="size-5 text-fuchsia-500 mt-1 flex-shrink-0" />
                    <span>Work with authentic creators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Share2 className="size-5 text-fuchsia-500 mt-1 flex-shrink-0" />
                    <span>AI-enhanced influencer content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="size-5 text-fuchsia-500 mt-1 flex-shrink-0" />
                    <span>Scalable UGC-style visuals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="size-5 text-fuchsia-500 mt-1 flex-shrink-0" />
                    <span>Digital likeness technology</span>
                  </li>
                </ul>

                <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white hover:opacity-90 transition-opacity mt-6">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
