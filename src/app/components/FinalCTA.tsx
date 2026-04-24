import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router';
import { homePageContent } from '../data/siteContent';

type FinalCTAProps = {
  onBookDemo: () => void;
};

export function FinalCTA({ onBookDemo }: FinalCTAProps) {
  const { finalCta } = homePageContent;

  return (
    <section id={finalCta.id} className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-black" />

          <div className="relative px-8 py-20 lg:py-32 text-center">
            <h2 className="text-4xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto">
              {finalCta.title}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {finalCta.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={onBookDemo}
                className="glass-button group px-8 py-4 rounded-full bg-white text-black hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <Calendar className="size-5" />
                {finalCta.primaryCta.label}
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link to={finalCta.secondaryCta.href} className="glass-button px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                {finalCta.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
