import { Users, Sparkles, Rocket } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Users,
      number: '01',
      title: 'Partner with Creators',
      description: 'We work with real creators or leverage AI workflows tailored to your brand needs.',
    },
    {
      icon: Sparkles,
      number: '02',
      title: 'Generate High-Quality Content',
      description: 'Our AI technology produces studio-quality visuals without traditional photoshoots.',
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Receive Ready Assets',
      description: 'Get campaign-ready content for ads, social media, and marketing—delivered fast.',
    },
  ];

  return (
    <section id="work" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl mb-6">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to transform your content creation process
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Connector line (hidden on last item) */}
              <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-violet-500/50 to-transparent -z-10 last:hidden" />

              <div className="space-y-6">
                <div className="relative inline-flex">
                  <div className="size-24 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                    <step.icon className="size-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 size-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-sm">
                    {step.number}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
