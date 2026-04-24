import { ImageWithFallback } from './figma/ImageWithFallback';
import { homePageContent } from '../data/siteContent';
import { SectionIntro } from './SectionIntro';

export function UseCases() {
  const { useCases } = homePageContent;

  return (
    <section id={useCases.id} className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionIntro
          eyebrow={useCases.eyebrow}
          title={useCases.title}
          description={useCases.description}
        />

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.items.map((useCase) => {
            return (
            <div key={useCase.title} className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-foreground/25 transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-white/25" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="mb-3 text-2xl">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
