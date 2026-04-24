import { useEffect, useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

const caseStudies = [
  {
    date: 'Apr 22, 2026',
    category: 'Beauty',
    title: 'Launching a skincare campaign without a single reshoot',
    summary:
      'We helped a direct-to-consumer beauty brand create a full suite of launch visuals, paid social variations, and product detail imagery from one creator-led production workflow.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
        alt: 'Skincare campaign hero image',
      },
      {
        src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
        alt: 'Skincare product close-up',
      },
      {
        src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
        alt: 'Beauty campaign lifestyle image',
      },
    ],
  },
  {
    date: 'Apr 14, 2026',
    category: 'Fashion',
    title: 'Scaling creator-led fashion assets across seasonal drops',
    summary:
      'A fashion label used our pipeline to turn one creator partnership into a repeatable content system for launches, lookbooks, and conversion-led ad creative.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
        alt: 'Fashion campaign hero image',
      },
      {
        src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
        alt: 'Fashion retail imagery',
      },
      {
        src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
        alt: 'Editorial fashion portrait',
      },
    ],
  },
  {
    date: 'Apr 9, 2026',
    category: 'Technology',
    title: 'Making complex tech products feel human through creator storytelling',
    summary:
      'For a consumer tech brand, we paired clean product imagery with talent-led lifestyle content to make launch messaging feel warmer, clearer, and more premium.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
        alt: 'Technology campaign hero image',
      },
      {
        src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
        alt: 'Technology device close-up',
      },
      {
        src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
        alt: 'Workspace technology scene',
      },
    ],
  },
  {
    date: 'Apr 2, 2026',
    category: 'Automotive',
    title: 'Creating location-flexible automotive content at campaign speed',
    summary:
      'We delivered high-end automotive visuals across multiple environments without coordinating multiple physical shoots, cutting cost and production time dramatically.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
        alt: 'Automotive campaign hero image',
      },
      {
        src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
        alt: 'Automotive detail shot',
      },
      {
        src: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
        alt: 'Automotive lifestyle image',
      },
    ],
  },
  {
    date: 'Mar 31, 2026',
    category: 'Hospitality',
    title: 'Refreshing hospitality creative with flexible creator-led formats',
    summary:
      'A hospitality group used our workflow to produce polished brand storytelling, social-first edits, and booking-focused creative from a small set of core assets.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
        alt: 'Hospitality campaign hero image',
      },
      {
        src: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
        alt: 'Hotel interior image',
      },
      {
        src: 'https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
        alt: 'Hospitality lifestyle image',
      },
    ],
  },
];

function CaseStudyCarousel({
  images,
}: {
  images: Array<{
    src: string;
    alt: string;
  }>;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updateCurrent();
    api.on('select', updateCurrent);
    api.on('reInit', updateCurrent);

    return () => {
      api.off('select', updateCurrent);
    };
  }, [api]);

  return (
    <div className="space-y-4">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent className="ml-0">
          {images.map((image) => (
            <CarouselItem key={image.src} className="pl-0">
              <div className="overflow-hidden rounded-[2rem]">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="h-[34rem] w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-6 top-auto bottom-6 translate-y-0 border-white/20 bg-black/55 text-white hover:bg-black/75" />
        <CarouselNext className="right-6 top-auto bottom-6 translate-y-0 border-white/20 bg-black/55 text-white hover:bg-black/75" />
      </Carousel>

      <div className="flex justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
            className={`h-2.5 rounded-full transition-all ${
              current === index ? 'w-8 bg-black' : 'w-2.5 bg-black/20 hover:bg-black/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-foreground/70">Our Work</p>
          <h1 className="text-5xl leading-none lg:text-7xl">
            Case studies built from creator-led campaigns and AI-powered production.
          </h1>
        </div>

        <div className="space-y-20">
          {caseStudies.map((study) => (
            <article key={study.title} className="space-y-8">
              <CaseStudyCarousel images={study.images} />

              <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                <div>
                  <p className="mb-3 text-sm uppercase tracking-[0.22em] text-foreground/60">
                    {study.category}
                  </p>
                  <h2 className="max-w-3xl text-4xl leading-none lg:text-6xl">
                    {study.title}
                  </h2>
                </div>

                <div className="space-y-4 pt-2">
                  <p className="text-sm uppercase tracking-[0.22em] text-foreground/60">
                    {study.date}
                  </p>
                  <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground">
                    {study.summary}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
