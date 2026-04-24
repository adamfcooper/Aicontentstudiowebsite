const privacySections = [
  {
    title: 'Information we collect',
    body: [
      'We may collect information you share with us directly through enquiry forms, creator application forms, newsletter signups, or other contact points on the site. This can include your name, business name, email address, social media links, and project information.',
      'We may also collect limited technical information such as browser type, device information, referring pages, and general usage data to help us understand how the site is being used and how it can be improved.',
    ],
  },
  {
    title: 'How we use your information',
    body: [
      'We use submitted information to respond to enquiries, review creator applications, provide access to private sections of the site, share updates you have asked to receive, and improve our services.',
      'We may also use the information to communicate with you about relevant projects, creator partnerships, platform updates, or operational matters related to our business relationship.',
    ],
  },
  {
    title: 'How we store and protect data',
    body: [
      'We take reasonable steps to protect personal information from unauthorized access, misuse, disclosure, or loss. While no digital system can guarantee absolute security, we aim to use appropriate technical and organizational safeguards.',
      'We retain information only for as long as it is reasonably necessary for the purposes described in this policy, or as required for legal, operational, or contractual reasons.',
    ],
  },
  {
    title: 'Sharing with third parties',
    body: [
      'We do not sell personal information. We may share information with trusted service providers, contractors, or partners who help us operate the site, communicate with users, or deliver our services, where that sharing is reasonably necessary.',
      'We may also disclose information if required to do so by law, to protect our rights, or to investigate misuse of the site or our services.',
    ],
  },
  {
    title: 'Cookies and analytics',
    body: [
      'We may use cookies, analytics tools, or similar technologies to understand traffic, measure engagement, and improve user experience. These tools help us understand which pages are useful and how visitors move through the site.',
      'You can usually control cookie settings through your browser preferences, although disabling certain technologies may affect how some parts of the site function.',
    ],
  },
  {
    title: 'Your choices',
    body: [
      'You can contact us if you want to update, correct, or delete information you have shared with us, subject to any legitimate business or legal reasons for retaining it.',
      'If you no longer want to receive updates or communications from us, you can ask us to stop at any time by reaching out directly.',
    ],
  },
];

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-foreground/70">Privacy Policy</p>
          <h1 className="max-w-2xl text-2xl font-normal leading-snug text-foreground/80 lg:text-3xl">
            How we collect, use, and protect information shared through our site and services.
          </h1>
        </div>

        <div className="border-t border-border">
          {privacySections.map((section) => (
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
