import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { homePageContent } from '../data/siteContent';
import { SectionIntro } from './SectionIntro';

export function Pricing() {
  const { pricing } = homePageContent;

  return (
    <section id={pricing.id} className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionIntro
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          description={pricing.description}
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {pricing.items.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-3xl border transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-foreground/8 to-foreground/3 border-foreground/25 scale-105 shadow-2xl'
                  : 'bg-card border-border hover:border-foreground/20'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-black text-white text-sm">
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
                    <Check className={`size-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-foreground' : 'text-muted-foreground'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.cta.href.startsWith('mailto:') ? (
                <a
                  href={plan.cta.href}
                  className={`glass-button w-full px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2 group ${
                    plan.highlighted
                      ? 'monochrome-button'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {plan.cta.label}
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <Link
                  to={plan.cta.href}
                  className={`glass-button w-full px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2 group ${
                    plan.highlighted
                      ? 'monochrome-button'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {plan.cta.label}
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          {pricing.note}
        </p>
      </div>
    </section>
  );
}
