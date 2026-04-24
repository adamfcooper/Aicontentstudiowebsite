import { Link } from 'react-router';
import { homePageContent } from '../data/siteContent';
import { iconMap } from '../lib/iconMap';
import { SectionIntro } from './SectionIntro';

export function Services() {
  const { services } = homePageContent;

  return (
    <section id={services.id} className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionIntro
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {services.items.map((service) => {
            const cardClasses =
              service.accent === 'violet'
                ? {
                    glow: 'from-black/10 to-neutral-500/10',
                    border: 'hover:border-foreground/25',
                    feature: 'text-foreground',
                  }
                : {
                    glow: 'from-neutral-700/10 to-black/10',
                    border: 'hover:border-foreground/25',
                    feature: 'text-foreground',
                  };

            return (
              <div key={service.title} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${cardClasses.glow} rounded-3xl blur-xl group-hover:blur-2xl transition-all`} />
                <div className={`relative p-10 rounded-3xl bg-card border border-border ${cardClasses.border} transition-all h-full`}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-lg">{service.description}</p>
                    </div>

                    <ul className="space-y-4">
                      {service.features.map((feature) => {
                        const FeatureIcon = iconMap[feature.icon];

                        return (
                          <li key={feature.text} className="flex items-start gap-3">
                            <FeatureIcon className={`size-5 mt-1 flex-shrink-0 ${cardClasses.feature}`} />
                            <span>{feature.text}</span>
                          </li>
                        );
                      })}
                    </ul>

                    <Link
                      to={service.cta.href}
                      className="glass-button monochrome-button block w-full px-6 py-3 rounded-full mt-6 text-center"
                    >
                      {service.cta.label}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
