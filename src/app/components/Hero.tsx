import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { homePageContent } from '../data/siteContent';

type HeroProps = {
  onBookDemo: () => void;
};

export function Hero({ onBookDemo }: HeroProps) {
  const { hero } = homePageContent;
  const heroImageClasses = [
    'hero-float hero-float-delay-1 z-20',
    'hero-float hero-float-delay-2 z-10',
    'hero-float hero-float-delay-3 z-10',
    'hero-float hero-float-delay-4 z-10',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black/6 via-background to-neutral-400/8" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              {hero.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              {hero.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={onBookDemo}
              className="glass-button monochrome-button group px-8 py-4 rounded-full flex items-center justify-center gap-2"
            >
              {hero.primaryCta.label}
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link to={hero.secondaryCta.href} className="glass-button px-8 py-4 rounded-full border border-border hover:bg-accent transition-colors flex items-center justify-center gap-2">
              <Play className="size-5" />
              {hero.secondaryCta.label}
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-black blur-3xl opacity-15" />
          <div className="relative grid grid-cols-2 gap-4 lg:hidden">
            <div className="space-y-4">
              {hero.images.slice(0, 2).map((image) => (
                <ImageWithFallback
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={image.className}
                />
              ))}
            </div>
            <div className="space-y-4 pt-8">
              {hero.images.slice(2).map((image) => (
                <ImageWithFallback
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={image.className}
                />
              ))}
            </div>
          </div>

          <div className="relative hidden grid-cols-2 gap-4 overflow-visible lg:grid">
            <div className="space-y-4">
              {hero.images.slice(0, 2).map((image, index) => (
                <div
                  key={image.src}
                  className={`relative ${heroImageClasses[index]}`}
                >
                  <div
                    className={`origin-center transition-transform duration-700 ease-out will-change-transform hover:scale-[1.18] hover:z-30 ${
                      index === 0 ? 'scale-[1.2]' : ''
                    }`}
                  >
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      className={image.className}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4 pt-8">
              {hero.images.slice(2).map((image, index) => (
                <div
                  key={image.src}
                  className={`relative ${heroImageClasses[index + 2]}`}
                >
                  <div className="origin-center transition-transform duration-700 ease-out will-change-transform hover:scale-[1.18] hover:z-30">
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      className={image.className}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
