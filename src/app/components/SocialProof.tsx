import { homePageContent } from '../data/siteContent';
import { SectionIntro } from './SectionIntro';

export function SocialProof() {
  const { testimonials } = homePageContent;

  return (
    <section id={testimonials.id} className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionIntro
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          description={testimonials.description}
        />

        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-12">
            {testimonials.brands.map((brand, index) => (
              <div key={`${brand}-${index}`} className="text-2xl text-muted-foreground/50 hover:text-foreground transition-colors">
                Logo
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
