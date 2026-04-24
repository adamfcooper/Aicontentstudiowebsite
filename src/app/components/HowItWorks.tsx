import { homePageContent } from '../data/siteContent';
import { SectionIntro } from './SectionIntro';

export function HowItWorks() {
  const { howItWorks } = homePageContent;

  return (
    <section id={howItWorks.id} className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionIntro
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
          description={howItWorks.description}
        />

        <div className="grid lg:grid-cols-3 gap-12">
          {howItWorks.steps.map((step) => {
            return (
            <div key={step.number} className="relative">
              <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-foreground/20 to-transparent -z-10 last:hidden" />

              <div className="space-y-3">
                <div className="flex items-baseline gap-8">
                  <div className="min-w-[2.75rem] text-[16px] leading-none text-black">
                    {step.number}.
                  </div>
                  <h3 className="text-2xl">{step.title}</h3>
                </div>

                <p className="ml-[4.75rem] text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
