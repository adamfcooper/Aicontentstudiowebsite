export const brand = {
  name: 'Catalyst Studio',
  email: 'hello@hello.com',
  tagline:
    'AI-powered content creation meets real human talent. Transform your visual content production without the complexity.',
};

export const navigationItems = [
  { label: 'How It Works', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Creators', href: '/creators' },
];

export const footerColumns = [
  {
    title: 'Contact',
    links: [
      { label: 'Get in Touch', href: '#contact-modal' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
  },
];

export const socialLinks = [
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
];

export const homePageContent = {
  hero: {
    badge: 'AI-Powered Content Studio',
    title: 'Create stunning content without the shoot',
    description:
      'We combine AI technology with real creators to produce high-performing visual content faster, smarter, and without traditional production costs.',
    primaryCta: { label: 'Book a Demo', href: '/#cta' },
    secondaryCta: { label: 'Browse Creators', href: '/creators' },
    stats: [
      { value: '10x', label: 'Faster Production' },
      { value: '70%', label: 'Cost Savings' },
      { value: '500+', label: 'Brands Trust Us' },
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1768818504222-00858f3e0eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXNoaW9uJTIwc3R1ZGlvJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NzY5NTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Fashion model studio photography',
        className: 'w-full h-64 object-cover rounded-2xl',
      },
      {
        src: 'https://images.unsplash.com/photo-1634725110352-d76625c7572a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBhdXRvbW90aXZlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc2OTUyNDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Luxury automotive photography',
        className: 'w-full h-48 object-cover rounded-2xl',
      },
      {
        src: 'https://images.unsplash.com/photo-1742540425845-8d8dabe893ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBmYXNoaW9uJTIwc3R1ZGlvJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NzY5NTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Creative model photography',
        className: 'w-full h-48 object-cover rounded-2xl',
      },
      {
        src: 'https://images.unsplash.com/photo-1612066149888-efcde7d17c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBjYXIlMjBhdXRvbW90aXZlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc2OTUyNDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Ferrari automotive photography',
        className: 'w-full h-64 object-cover rounded-2xl',
      },
    ],
  },
  howItWorks: {
    id: 'work',
    eyebrow: 'Process',
    title: 'How It Works',
    description: 'Three simple steps to transform your content creation process',
    steps: [
      {
        icon: 'users',
        number: '01',
        title: 'Partner with Creators',
        description:
          'We work with real creators or leverage AI workflows tailored to your brand needs.',
      },
      {
        icon: 'sparkles',
        number: '02',
        title: 'Generate High-Quality Content',
        description:
          'Our AI technology produces studio-quality visuals without traditional photoshoots.',
      },
      {
        icon: 'rocket',
        number: '03',
        title: 'Receive Ready Assets',
        description:
          'Get campaign-ready content for ads, social media, and marketing delivered fast.',
      },
    ],
  },
  services: {
    id: 'services',
    eyebrow: 'Offerings',
    title: 'Our Services',
    description:
      'Two powerful offerings to scale your visual content production.',
    items: [
      {
        icon: 'wand2',
        title: 'AI Content Studio',
        description:
          'Scalable, high-quality visual content without traditional shoots.',
        accent: 'violet',
        cta: { label: 'Learn More', href: '/#cta' },
        features: [
          { icon: 'image', text: 'Product imagery and lifestyle shots' },
          { icon: 'share2', text: 'Social media content optimized for engagement' },
          { icon: 'zap', text: 'Ad creatives that convert' },
          { icon: 'trendingUp', text: 'No photoshoots and no production delays' },
        ],
      },
      {
        icon: 'userCheck',
        title: 'Talent & Creator Layer',
        description:
          'Real creators, amplified with AI for unlimited scalability.',
        accent: 'fuchsia',
        cta: { label: 'Explore the Creator Model', href: '/#creators' },
        features: [
          { icon: 'image', text: 'Work with authentic creators' },
          { icon: 'share2', text: 'AI-enhanced influencer content' },
          { icon: 'zap', text: 'Scalable UGC-style visuals' },
          { icon: 'trendingUp', text: 'Digital likeness technology' },
        ],
      },
    ],
  },
  useCases: {
    id: 'industries',
    eyebrow: 'Industries',
    title: 'Built for Every Industry',
    description:
      'From automotive to fashion, we create content that resonates with your audience.',
    items: [
      {
        icon: 'car',
        title: 'Automotive',
        description: 'Studio-quality car photography in any environment.',
        image:
          'https://images.unsplash.com/photo-1612066149888-efcde7d17c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBjYXIlMjBhdXRvbW90aXZlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc2OTUyNDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        icon: 'shoppingBag',
        title: 'Ecommerce',
        description: 'Product lifestyle shots that drive conversions.',
        image:
          'https://images.unsplash.com/photo-1548761013-f4c9d4f524ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxlY29tbWVyY2UlMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzc2OTUyNDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        icon: 'shirt',
        title: 'Fashion',
        description: 'AI-generated model imagery for any style.',
        image:
          'https://images.unsplash.com/photo-1768818504222-00858f3e0eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXNoaW9uJTIwc3R1ZGlvJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NzY5NTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        icon: 'building2',
        title: 'Hospitality',
        description: 'Stunning venue visuals without location shoots.',
        image:
          'https://images.unsplash.com/photo-1776763018821-8feeaeeee0a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGludGVyaW9yJTIwaG9zcGl0YWxpdHl8ZW58MXx8fHwxNzc2OTUyNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
  },
  benefits: {
    id: 'about',
    eyebrow: 'Benefits',
    title:
      'Why brands choose us: lower costs, faster turnaround, scalable output, consistent branding, and no production hassle.',
    description:
      "Transform your content creation with benefits that traditional production can't match.",
    items: [
      {
        icon: 'dollarSign',
        title: 'Lower Cost',
        description:
          'Save up to 70% compared to traditional photoshoots and production.',
      },
      {
        icon: 'clock',
        title: 'Faster Turnaround',
        description: 'Get campaign-ready assets in days, not weeks or months.',
      },
      {
        icon: 'barChart3',
        title: 'Scalable Production',
        description: 'Generate unlimited variations and iterations on demand.',
      },
      {
        icon: 'layers',
        title: 'Consistent Branding',
        description:
          'Maintain visual consistency across all your marketing channels.',
      },
      {
        icon: 'shield',
        title: 'No Logistics Hassle',
        description:
          'Skip location scouting, permits, crews, and equipment rentals.',
      },
      {
        icon: 'zap',
        title: 'Instant Revisions',
        description: 'Make changes and get new versions without reshooting.',
      },
    ],
  },
  creators: {
    id: 'creators',
    badge: 'For Creators & Influencers',
    title: 'Real Creators, Scaled with AI',
    description:
      'Join our network of creators and monetize your likeness through AI-generated content while maintaining full creative control.',
    primaryCta: { label: 'Browse Creators', href: '/creators' },
    secondaryCta: { label: 'Apply as a Creator', href: `mailto:${brand.email}` },
    items: [
      {
        title: 'Earn passive income from your digital likeness',
        description:
          'Get compensated every time your AI-generated content is used.',
      },
      {
        title: 'Maintain creative control and approval rights',
        description:
          'You decide how your likeness is used and which brands you work with.',
      },
      {
        title: 'Scale your content without the grind',
        description:
          'One shoot becomes hundreds of variations, so you can work smarter, not harder.',
      },
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1758876202699-abeb827f35b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHdvcmtzcGFjZSUyMG1vZGVybnxlbnwxfHx8fDE3NzY5NTI0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Creative professional',
        className: 'w-full h-64 object-cover rounded-2xl',
      },
      {
        src: 'https://images.unsplash.com/photo-1758876202124-cc941ebb8446?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHdvcmtzcGFjZSUyMG1vZGVybnxlbnwxfHx8fDE3NzY5NTI0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Professional workspace',
        className: 'w-full h-64 object-cover rounded-2xl',
      },
      {
        src: 'https://images.unsplash.com/photo-1758613654707-8bdab92f711d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBmYXNoaW9uJTIwc3R1ZGlvJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NzY5NTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Studio photography',
        className: 'w-full h-64 object-cover rounded-2xl',
      },
      {
        src: 'https://images.unsplash.com/photo-1764016888054-d8d3b8d66945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtb2Rlcm4lMjBmYXNoaW9uJTIwc3R1ZGlvJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NzY5NTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Model photography',
        className: 'w-full h-64 object-cover rounded-2xl',
      },
    ],
  },
  testimonials: {
    id: 'testimonials',
    eyebrow: 'Proof',
    title: 'Loved by Brands',
    description:
      'See what our clients say about transforming their content creation.',
    items: [
      {
        name: 'Sarah Chen',
        role: 'Marketing Director',
        company: 'Luxe Fashion Co.',
        content:
          'Catalyst Studio helped us create an entire seasonal campaign in half the time and a fraction of the cost. The quality is indistinguishable from traditional shoots.',
        rating: 5,
      },
      {
        name: 'Marcus Rodriguez',
        role: 'Founder & CEO',
        company: 'AutoElite Motors',
        content:
          'We needed automotive content for 15 different models in various environments. What would have taken months and hundreds of thousands was done in two weeks.',
        rating: 5,
      },
      {
        name: 'Emily Watson',
        role: 'E-commerce Manager',
        company: 'Urban Lifestyle',
        content:
          'The ability to iterate and test different creative variations without additional photoshoots has transformed our conversion rates. Absolutely game-changing.',
        rating: 5,
      },
    ],
    brands: ['TechCorp', 'StyleHub', 'AutoLux', 'FreshMart', 'UrbanWear', 'VenueVista'],
  },
  pricing: {
    id: 'pricing',
    eyebrow: 'Pricing',
    title: 'Simple, Transparent Pricing',
    description:
      'Choose the plan that fits your content needs and scale up or down anytime.',
    note:
      'All plans include commercial usage rights. No hidden fees. Cancel anytime.',
    items: [
      {
        name: 'Starter',
        price: '$2,500',
        period: '/month',
        description: 'Perfect for small businesses testing AI content.',
        cta: { label: 'Start Free Trial', href: '/#cta' },
        highlighted: false,
        features: [
          '50 AI-generated images per month',
          'Basic product and lifestyle shots',
          '2 revision rounds included',
          'Email support',
          '7-day turnaround',
        ],
      },
      {
        name: 'Professional',
        price: '$6,500',
        period: '/month',
        description: 'For brands scaling their content production.',
        cta: { label: 'Get Started', href: '/#cta' },
        highlighted: true,
        features: [
          '200 AI-generated images per month',
          'All content types included',
          'Unlimited revisions',
          'Dedicated account manager',
          '3-day turnaround',
          'Priority support',
          'Brand style training',
        ],
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Tailored solutions for large organizations.',
        cta: { label: 'Contact Sales', href: `mailto:${brand.email}` },
        highlighted: false,
        features: [
          'Unlimited AI-generated content',
          'Custom creator partnerships',
          'API access and integrations',
          'White-glove service',
          '24-hour turnaround',
          'Custom licensing agreements',
          'Quarterly strategy sessions',
        ],
      },
    ],
  },
  finalCta: {
    id: 'cta',
    title: 'Start creating content without the shoot',
    description:
      'Join hundreds of brands transforming their content creation with AI. Book a demo and see the difference.',
    primaryCta: { label: 'Book a Demo', href: `mailto:${brand.email}` },
    secondaryCta: { label: 'View Sample Work', href: '/our-work' },
    note:
      'No credit card required • 30-minute consultation • Custom demo for your brand',
  },
};
