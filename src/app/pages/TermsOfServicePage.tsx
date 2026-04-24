const termsSections = [
  {
    title: 'Using the site',
    body: [
      'By accessing or using this site, you agree to use it lawfully and in a way that does not interfere with the site, its users, or our business operations. You may not misuse the site, attempt unauthorized access, or use the site for harmful, deceptive, or unlawful purposes.',
    ],
  },
  {
    title: 'Service information',
    body: [
      'Information on this site is provided for general business and marketing purposes. While we aim to keep content accurate and current, the site may contain incomplete information, evolving capabilities, or service descriptions that change over time.',
      'Nothing on the site should be interpreted as a binding offer, guarantee of availability, or commitment to enter into a commercial relationship.',
    ],
  },
  {
    title: 'Creator and brand submissions',
    body: [
      'If you submit information through a contact form, creator application, roster request, or similar feature, you confirm that the information you provide is accurate and that you have the right to share it.',
      'Submission of information does not guarantee acceptance, onboarding, campaign placement, roster access, or any specific commercial outcome.',
    ],
  },
  {
    title: 'Intellectual property',
    body: [
      'Unless otherwise stated, the site design, copy, branding, layout, and related materials are owned by us or used with permission. You may not reproduce, republish, distribute, or commercially exploit site materials without prior written consent.',
      'Project deliverables, creator assets, and client work may be subject to separate contractual terms, licensing arrangements, and usage rights outside the scope of these site terms.',
    ],
  },
  {
    title: 'Third-party links and tools',
    body: [
      'The site may include links, embeds, or references to third-party services and platforms. We are not responsible for the availability, content, or practices of those third parties, and your use of them may be subject to their own terms and policies.',
    ],
  },
  {
    title: 'Liability',
    body: [
      'To the fullest extent permitted by law, the site is provided on an as-is basis without warranties of any kind. We are not liable for indirect, incidental, or consequential losses arising from use of the site, inability to access it, or reliance on its content.',
      'Where specific services are provided under contract, any liability, delivery obligations, and commercial terms will be governed by the relevant written agreement.',
    ],
  },
  {
    title: 'Changes to these terms',
    body: [
      'We may update these terms from time to time to reflect changes in the business, site functionality, or legal requirements. Continued use of the site after updates are published will constitute acceptance of the revised terms.',
    ],
  },
];

export function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-foreground/70">Terms of Service</p>
          <h1 className="max-w-2xl text-2xl font-normal leading-snug text-foreground/80 lg:text-3xl">
            The basic terms that apply when using this site, submitting information, or engaging with our services.
          </h1>
        </div>

        <div className="border-t border-border">
          {termsSections.map((section) => (
            <div
              key={section.title}
              className="grid gap-4 border-b border-border py-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-8"
            >
              <div className="text-base leading-relaxed text-muted-foreground">{section.title}</div>
              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="max-w-3xl text-base leading-relaxed text-foreground/80">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
