import { Check, ArrowRight } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses testing AI content',
      features: [
        '50 AI-generated images per month',
        'Basic product & lifestyle shots',
        '2 revision rounds included',
        'Email support',
        '7-day turnaround',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$6,500',
      period: '/month',
      description: 'For brands scaling their content production',
      features: [
        '200 AI-generated images per month',
        'All content types included',
        'Unlimited revisions',
        'Dedicated account manager',
        '3-day turnaround',
        'Priority support',
        'Brand style training',
      ],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited AI-generated content',
        'Custom creator partnerships',
        'API access & integrations',
        'White-glove service',
        '24-hour turnaround',
        'Custom licensing agreements',
        'Quarterly strategy sessions',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your content needs—scale up or down anytime
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-3xl border transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-violet-500/10 to-fuchsia-500/10 border-violet-500/50 scale-105 shadow-2xl'
                  : 'bg-card border-border hover:border-violet-500/30'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-5xl">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`size-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-violet-500' : 'text-muted-foreground'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 group ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:opacity-90'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {plan.cta}
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          All plans include commercial usage rights. No hidden fees. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
