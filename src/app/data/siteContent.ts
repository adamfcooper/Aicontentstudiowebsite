export const brand = {
  name: 'Catalyst Studio',
  email: 'hello@hello.com',
  tagline:
    'AI-powered content creation built for modern brands. Produce more visual content with less cost, less delay, and zero production complexity.',
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
    title: 'Create premium content without the shoot',
    description:
      'We help modern brands produce campaign visuals, social content, and ad creatives faster using AI production and real creators.',
    primaryCta: { label: 'Book a Demo', href: '/#cta' },
    secondaryCta: { label: 'Browse Creators', href: '/creators' },
    stats: [
      { value: '10x', label: 'Faster Turnaround' },
      { value: '70%', label: 'Lower Production Costs' },
      { value: 'Unlimited', label: 'Content Scale' },
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
    eyebrow: 'PROCESS',
    title: 'How It Works',
    description: 'Three simple steps to modernise your content production.',
    steps: [
      {
        icon: 'users',
        number: '01',
        title: 'Choose Your Content Model',
        description:
          'Use AI production, real creators, or a hybrid approach tailored to your brand.',
      },
      {
        icon: 'sparkles',
        number: '02',
        title: 'We Create Your Assets',
        description:
          'Receive premium visuals for ads, ecommerce, launches, and social media.',
      },
      {
        icon: 'rocket',
        number: '03',
        title: 'Launch Faster',
        description:
          'Ready-to-use content delivered in days, not weeks.',
      },
    ],
  },
  services: {
    id: 'services',
    eyebrow: 'OFFERINGS',
    title: 'Our Services',
    description:
      'Flexible solutions built for brands that need more content with less friction.',
    items: [
      {
        icon: 'wand2',
        title: 'AI Content Production',
        description:
          'High-quality visual content created without traditional shoots.',
        accent: 'violet',
        cta: { label: 'Learn More', href: '/#cta' },
        features: [
          { icon: 'image', text: 'Product imagery' },
          { icon: 'share2', text: 'Lifestyle visuals' },
          { icon: 'zap', text: 'Paid ad creatives' },
          { icon: 'trendingUp', text: 'Fast monthly output' },
          { icon: 'clock', text: 'No production delays' },
        ],
      },
      {
        icon: 'userCheck',
        title: 'Creator Network',
        description:
          'Real creators, scaled with AI for faster and more flexible campaigns.',
        accent: 'fuchsia',
        cta: { label: 'Explore Creators', href: '/creators' },
        features: [
          { icon: 'image', text: 'Authentic creator campaigns' },
          { icon: 'share2', text: 'AI-enhanced UGC' },
          { icon: 'zap', text: 'Scalable creator output' },
          { icon: 'trendingUp', text: 'Digital likeness licensing' },
          { icon: 'clock', text: 'Faster approvals' },
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
      `Why brands switch to ${brand.name}: lower production costs, faster turnaround, scalable output, consistent branding, and zero shoot-day hassle.`,
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
    title: 'Real Creators. Infinite Output.',
    description:
      'Partner with creators who monetise their likeness through AI-generated content while maintaining full creative control.',
    primaryCta: { label: 'Browse Creators', href: '/creators' },
    secondaryCta: { label: 'Apply as a Creator', href: `mailto:${brand.email}` },
    items: [
      {
        title: 'Earn passive income from your digital likeness',
        description: '',
      },
      {
        title: 'Approve every campaign before content goes live',
        description: '',
      },
      {
        title: 'Work with brands that match your style',
        description: '',
      },
      {
        title: 'Scale your content opportunities without constant shooting',
        description: '',
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
    title: 'Ready to scale content without scaling costs?',
    description:
      'Join brands replacing expensive production with faster, smarter content creation.',
    primaryCta: { label: 'Book a Demo', href: `mailto:${brand.email}` },
    secondaryCta: { label: 'View Sample Work', href: '/our-work' },
    note:
      'No credit card required • 30-minute consultation • Custom demo for your brand',
  },
};
