export interface Creator {
  id: string;
  name: string;
  profileImage: string;
  niche: string[];
  descriptor: string;
  followers: string;
  engagementRate: string;
  gender: string;
  location: string;
  contentStyle: string[];
  audienceSize: 'micro' | 'mid' | 'large';
  bio: string;
  galleryImages: string[];
  aiCapabilities: string[];
  pastCollaborations: string[];
}

export const creators: Creator[] = [
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    profileImage: 'https://images.unsplash.com/photo-1768818504222-00858f3e0eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXNoaW9uJTIwc3R1ZGlvJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NzY5NTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    niche: ['Fashion', 'Lifestyle'],
    descriptor: 'Minimal luxury aesthetic with editorial focus',
    followers: '125K',
    engagementRate: '4.2%',
    gender: 'Female',
    location: 'New York, USA',
    contentStyle: ['Luxury', 'Minimal'],
    audienceSize: 'mid',
    bio: 'Fashion content creator specializing in high-end editorial and minimalist lifestyle photography. 8+ years of experience working with luxury brands and creating compelling visual narratives.',
    galleryImages: [
      'https://images.unsplash.com/photo-1768818504222-00858f3e0eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1742540425845-8d8dabe893ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1764016888054-d8d3b8d66945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1758613654707-8bdab92f711d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    aiCapabilities: [
      'Generate content in any luxury location worldwide',
      'Create seasonal campaigns without travel',
      'Produce unlimited outfit variations',
      'Scale editorial shoots instantly',
    ],
    pastCollaborations: ['Luxe Fashion Co.', 'Elite Style', 'Modern Couture'],
  },
  {
    id: 'marcus-johnson',
    name: 'Marcus Johnson',
    profileImage: 'https://images.unsplash.com/photo-1768696081771-062d3b0ab4f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    niche: ['Automotive', 'Tech'],
    descriptor: 'High-performance automotive and tech lifestyle',
    followers: '230K',
    engagementRate: '5.1%',
    gender: 'Male',
    location: 'Los Angeles, USA',
    contentStyle: ['Sporty', 'Luxury'],
    audienceSize: 'large',
    bio: 'Automotive enthusiast and tech creator known for premium car content and lifestyle photography. Worked with leading automotive brands to create stunning visual campaigns.',
    galleryImages: [
      'https://images.unsplash.com/photo-1634725110352-d76625c7572a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1612066149888-efcde7d17c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1684965747763-9b8fc4f721f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1760413451833-fcb5643423ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    aiCapabilities: [
      'Place vehicles in any studio or outdoor environment',
      'Create dynamic action shots without location shoots',
      'Generate seasonal automotive campaigns',
      'Scale product placement across multiple settings',
    ],
    pastCollaborations: ['AutoElite Motors', 'Performance Dynamics', 'TechDrive'],
  },
  {
    id: 'emma-rodriguez',
    name: 'Emma Rodriguez',
    profileImage: 'https://images.unsplash.com/photo-1742540425845-8d8dabe893ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    niche: ['Fitness', 'Lifestyle'],
    descriptor: 'Athletic lifestyle with vibrant energy',
    followers: '180K',
    engagementRate: '6.3%',
    gender: 'Female',
    location: 'Miami, USA',
    contentStyle: ['Sporty', 'Casual'],
    audienceSize: 'mid',
    bio: 'Fitness and wellness creator focusing on authentic, energetic lifestyle content. Passionate about helping brands connect with health-conscious audiences.',
    galleryImages: [
      'https://images.unsplash.com/photo-1758876202699-abeb827f35b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1758876202124-cc941ebb8446?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1491898487514-29e95d92e3f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1548761013-f4c9d4f524ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    aiCapabilities: [
      'Generate workout content in any gym or outdoor setting',
      'Create seasonal activewear campaigns',
      'Scale product demonstrations effortlessly',
      'Produce lifestyle shots in multiple environments',
    ],
    pastCollaborations: ['FitLife Pro', 'Active Apparel', 'Wellness Studio'],
  },
  {
    id: 'alex-kim',
    name: 'Alex Kim',
    profileImage: 'https://images.unsplash.com/photo-1752860872185-78926b52ef77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    niche: ['Tech', 'Lifestyle'],
    descriptor: 'Modern minimalist with tech focus',
    followers: '95K',
    engagementRate: '5.8%',
    gender: 'Male',
    location: 'San Francisco, USA',
    contentStyle: ['Minimal', 'Casual'],
    audienceSize: 'micro',
    bio: 'Tech content creator and early adopter with a passion for minimalist design and modern lifestyle. Specialized in making technology approachable and aspirational.',
    galleryImages: [
      'https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1758874572628-8a63fb0c9851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1548761013-f4c9d4f524ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/flagged/photo-1562597021-bae50de4d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    aiCapabilities: [
      'Create tech product reviews in multiple settings',
      'Generate workspace lifestyle content',
      'Scale product unboxing and demos',
      'Produce editorial tech photography',
    ],
    pastCollaborations: ['TechFlow', 'Digital Essentials', 'Modern Workspace'],
  },
  {
    id: 'olivia-martinez',
    name: 'Olivia Martinez',
    profileImage: 'https://images.unsplash.com/photo-1764016888054-d8d3b8d66945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    niche: ['Fashion', 'Lifestyle'],
    descriptor: 'Elegant evening and luxury lifestyle',
    followers: '310K',
    engagementRate: '4.7%',
    gender: 'Female',
    location: 'Paris, France',
    contentStyle: ['Luxury', 'Casual'],
    audienceSize: 'large',
    bio: 'International fashion creator with a sophisticated eye for luxury lifestyle content. Known for elegant evening wear and high-end brand collaborations.',
    galleryImages: [
      'https://images.unsplash.com/photo-1764016888054-d8d3b8d66945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1768818504222-00858f3e0eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1742540425845-8d8dabe893ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1758613654707-8bdab92f711d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    aiCapabilities: [
      'Generate luxury destination content without travel',
      'Create evening wear campaigns in any setting',
      'Produce high-end lifestyle photography at scale',
      'Scale seasonal fashion collections instantly',
    ],
    pastCollaborations: ['Haute Couture Paris', 'Luxury Living', 'Elite Fashion'],
  },
  {
    id: 'david-thompson',
    name: 'David Thompson',
    profileImage: 'https://images.unsplash.com/photo-1758874572628-8a63fb0c9851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    niche: ['Lifestyle', 'Tech'],
    descriptor: 'Professional workspace and modern living',
    followers: '145K',
    engagementRate: '5.5%',
    gender: 'Male',
    location: 'London, UK',
    contentStyle: ['Minimal', 'Casual'],
    audienceSize: 'mid',
    bio: 'Creator focused on modern professional lifestyle and workspace optimization. Helps brands connect with remote workers and digital professionals.',
    galleryImages: [
      'https://images.unsplash.com/photo-1758874572628-8a63fb0c9851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1758876202699-abeb827f35b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1548761013-f4c9d4f524ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    aiCapabilities: [
      'Generate professional workspace content',
      'Create lifestyle shots in any modern interior',
      'Scale product placements across environments',
      'Produce tech and lifestyle hybrid content',
    ],
    pastCollaborations: ['WorkSmart', 'Modern Office Co.', 'Digital Nomad Essentials'],
  },
];
