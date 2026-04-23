import { Star, Quote } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'Luxe Fashion Co.',
      content: 'Catalyst Studio helped us create an entire seasonal campaign in half the time and a fraction of the cost. The quality is indistinguishable from traditional shoots.',
      rating: 5,
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder & CEO',
      company: 'AutoElite Motors',
      content: 'We needed automotive content for 15 different models in various environments. What would have taken months and hundreds of thousands was done in 2 weeks.',
      rating: 5,
    },
    {
      name: 'Emily Watson',
      role: 'E-commerce Manager',
      company: 'Urban Lifestyle',
      content: 'The ability to iterate and test different creative variations without additional photoshoots has transformed our conversion rates. Absolutely game-changing.',
      rating: 5,
    },
  ];

  const brands = [
    'TechCorp', 'StyleHub', 'AutoLux', 'FreshMart', 'UrbanWear', 'VenueVista'
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Testimonials */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl mb-6">Loved by Brands</h2>
          <p className="text-xl text-muted-foreground">
            See what our clients say about transforming their content creation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="p-8 rounded-2xl bg-card border border-border relative">
              <Quote className="size-10 text-violet-500/20 absolute top-6 right-6" />

              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="size-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="border-t border-border pt-4">
                <div className="font-medium">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Logos */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-8">TRUSTED BY LEADING BRANDS</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {brands.map((brand) => (
              <div key={brand} className="text-2xl text-muted-foreground/50 hover:text-foreground transition-colors">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
