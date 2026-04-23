import { DollarSign, Clock, BarChart3, Layers, Shield, Zap } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Lower Cost',
      description: 'Save up to 70% compared to traditional photoshoots and production',
    },
    {
      icon: Clock,
      title: 'Faster Turnaround',
      description: 'Get campaign-ready assets in days, not weeks or months',
    },
    {
      icon: BarChart3,
      title: 'Scalable Production',
      description: 'Generate unlimited variations and iterations on demand',
    },
    {
      icon: Layers,
      title: 'Consistent Branding',
      description: 'Maintain visual consistency across all your marketing channels',
    },
    {
      icon: Shield,
      title: 'No Logistics Hassle',
      description: 'Skip location scouting, permits, crews, and equipment rentals',
    },
    {
      icon: Zap,
      title: 'Instant Revisions',
      description: 'Make changes and get new versions without reshooting',
    },
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl mb-6">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground">
            Transform your content creation with benefits that traditional production can't match
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="p-8 rounded-2xl bg-card border border-border hover:border-violet-500/50 transition-all group">
              <div className="size-14 rounded-xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="size-7 text-violet-500" />
              </div>

              <h3 className="text-xl mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
