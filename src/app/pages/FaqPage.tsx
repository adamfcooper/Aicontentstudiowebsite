import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const faqs = [
  {
    category: 'Process',
    question: 'How does your content production workflow actually work?',
    answer:
      'We combine creator-led source material, AI-assisted production, and brand direction into a single streamlined workflow. That means fewer shoot days, faster revisions, and more output from one coordinated system.',
  },
  {
    category: 'Creators',
    question: 'Do you work with real creators or fully AI-generated talent?',
    answer:
      'We work with real creators and creator likeness workflows. Depending on the brief, we can use creator-led productions, AI-assisted asset generation, or a blend of both to match the brand and campaign requirements.',
  },
  {
    category: 'Usage',
    question: 'What kinds of content can you produce?',
    answer:
      'We create campaign visuals, paid social creative, e-commerce imagery, landing page assets, creator-led brand content, and scalable content variations for testing and rollout across channels.',
  },
  {
    category: 'Timeline',
    question: 'How quickly can a project go live?',
    answer:
      'Timelines depend on scope, but most projects move significantly faster than traditional production. We typically compress what would be weeks of coordination into a much shorter production and review cycle.',
  },
  {
    category: 'Brand',
    question: 'Can you match our existing brand guidelines and visual style?',
    answer:
      'Yes. We build around your existing brand system, references, and performance goals. The aim is not generic AI output, but content that feels aligned with your brand and commercially useful.',
  },
  {
    category: 'Access',
    question: 'How do we get access to the full creator roster?',
    answer:
      'Reach out through the site and we can provide access based on your brand, campaign needs, and intended use case. We use access control so creator rosters can be shared more intentionally.',
  },
];

export function FaqPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-foreground/70">FAQ</p>
          <h1 className="max-w-2xl text-2xl font-normal leading-snug text-foreground/80 lg:text-3xl">
            Frequently asked questions about how we work, what we make, and how to access the roster.
          </h1>
        </div>

        <div className="border-t border-border">
          <div className="hidden grid-cols-[220px_minmax(0,1fr)] gap-8 py-6 text-sm uppercase tracking-[0.18em] text-foreground/60 md:grid">
            <div>Category</div>
            <div>Question</div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} className="border-border">
                <AccordionTrigger className="grid w-full gap-3 py-5 text-left hover:no-underline md:grid-cols-[220px_minmax(0,1fr)_32px] md:gap-8">
                  <span className="text-base leading-relaxed text-muted-foreground">
                    {faq.category}
                  </span>
                  <span className="pr-4 text-base font-normal leading-relaxed text-foreground md:text-lg">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-7 md:pl-[220px]">
                  <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
