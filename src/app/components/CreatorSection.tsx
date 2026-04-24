import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { homePageContent } from '../data/siteContent';

type CreatorSectionProps = {
  onApplyAsCreator: () => void;
};

export function CreatorSection({ onApplyAsCreator }: CreatorSectionProps) {
  const { creators } = homePageContent;

  return (
    <section id={creators.id} className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl">{creators.title}</h2>
              <p className="text-xl text-muted-foreground">
                {creators.description}
              </p>
            </div>

            <ul className="space-y-4">
              {creators.items.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="mb-1">{item.title}</div>
                    {item.description ? (
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={creators.primaryCta.href} className="glass-button monochrome-button group px-8 py-4 rounded-full flex items-center justify-center gap-2">
                {creators.primaryCta.label}
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                type="button"
                onClick={onApplyAsCreator}
                className="glass-button px-8 py-4 rounded-full border border-border hover:bg-accent transition-colors flex items-center justify-center gap-2"
              >
                {creators.secondaryCta.label}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-black blur-3xl opacity-15" />
            <div className="relative grid grid-cols-2 gap-4">
              {creators.images.map((image) => (
                <ImageWithFallback
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={image.className}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
