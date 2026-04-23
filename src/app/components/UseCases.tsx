import { Car, ShoppingBag, Shirt, Building2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function UseCases() {
  const cases = [
    {
      icon: Car,
      title: 'Automotive',
      description: 'Studio-quality car photography in any environment',
      image: 'https://images.unsplash.com/photo-1612066149888-efcde7d17c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBjYXIlMjBhdXRvbW90aXZlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc2OTUyNDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: ShoppingBag,
      title: 'Ecommerce',
      description: 'Product lifestyle shots that drive conversions',
      image: 'https://images.unsplash.com/photo-1548761013-f4c9d4f524ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxlY29tbWVyY2UlMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzc2OTUyNDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Shirt,
      title: 'Fashion',
      description: 'AI-generated model imagery for any style',
      image: 'https://images.unsplash.com/photo-1768818504222-00858f3e0eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXNoaW9uJTIwc3R1ZGlvJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NzY5NTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Building2,
      title: 'Hospitality',
      description: 'Stunning venue visuals without location shoots',
      image: 'https://images.unsplash.com/photo-1776763018821-8feeaeeee0a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGludGVyaW9yJTIwaG9zcGl0YWxpdHl8ZW58MXx8fHwxNzc2OTUyNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl mb-6">Built for Every Industry</h2>
          <p className="text-xl text-muted-foreground">
            From automotive to fashion—we create content that resonates with your audience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((useCase) => (
            <div key={useCase.title} className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-violet-500/50 transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                    <useCase.icon className="size-6 text-white" />
                  </div>
                  <h3 className="text-2xl">{useCase.title}</h3>
                </div>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
