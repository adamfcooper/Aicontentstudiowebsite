import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Search, Filter, Sparkles, Users, TrendingUp } from 'lucide-react';
import { creators, Creator } from '../data/creators';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CreatorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedGender, setSelectedGender] = useState<string>('all');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [selectedAudienceSize, setSelectedAudienceSize] = useState<string>('all');

  const industries = ['all', 'Fashion', 'Automotive', 'Fitness', 'Lifestyle', 'Tech'];
  const genders = ['all', 'Female', 'Male'];
  const styles = ['all', 'Luxury', 'Minimal', 'Sporty', 'Casual'];
  const audienceSizes = ['all', 'micro', 'mid', 'large'];

  const filteredCreators = useMemo(() => {
    return creators.filter((creator) => {
      const matchesSearch = creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           creator.descriptor.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesIndustry = selectedIndustry === 'all' || creator.niche.includes(selectedIndustry);
      const matchesGender = selectedGender === 'all' || creator.gender === selectedGender;
      const matchesStyle = selectedStyle === 'all' || creator.contentStyle.includes(selectedStyle);
      const matchesAudienceSize = selectedAudienceSize === 'all' || creator.audienceSize === selectedAudienceSize;

      return matchesSearch && matchesIndustry && matchesGender && matchesStyle && matchesAudienceSize;
    });
  }, [searchQuery, selectedIndustry, selectedGender, selectedStyle, selectedAudienceSize]);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-violet-500/5 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Users className="size-4 text-violet-500" />
              <span className="text-sm text-violet-600 dark:text-violet-400">Talent Database</span>
            </div>
            <h1 className="text-5xl lg:text-6xl mb-6">Explore Our Creators</h1>
            <p className="text-xl text-muted-foreground">
              Real creators. Scaled with AI. Ready for your next campaign.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name, niche, or style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card border border-border focus:outline-none focus:border-violet-500/50 transition-colors"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filters */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="size-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filter by:</span>
          </div>

          <div className="space-y-6">
            {/* Industry Filter */}
            <div>
              <label className="text-sm text-muted-foreground mb-3 block">Industry</label>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-4 py-2 rounded-full border transition-all ${
                      selectedIndustry === industry
                        ? 'bg-violet-500 text-white border-violet-500'
                        : 'bg-card border-border hover:border-violet-500/50'
                    }`}
                  >
                    {industry === 'all' ? 'All Industries' : industry}
                  </button>
                ))}
              </div>
            </div>

            {/* Gender Filter */}
            <div>
              <label className="text-sm text-muted-foreground mb-3 block">Gender</label>
              <div className="flex flex-wrap gap-2">
                {genders.map((gender) => (
                  <button
                    key={gender}
                    onClick={() => setSelectedGender(gender)}
                    className={`px-4 py-2 rounded-full border transition-all ${
                      selectedGender === gender
                        ? 'bg-violet-500 text-white border-violet-500'
                        : 'bg-card border-border hover:border-violet-500/50'
                    }`}
                  >
                    {gender === 'all' ? 'All' : gender}
                  </button>
                ))}
              </div>
            </div>

            {/* Style Filter */}
            <div>
              <label className="text-sm text-muted-foreground mb-3 block">Content Style</label>
              <div className="flex flex-wrap gap-2">
                {styles.map((style) => (
                  <button
                    key={style}
                    onClick={() => setSelectedStyle(style)}
                    className={`px-4 py-2 rounded-full border transition-all ${
                      selectedStyle === style
                        ? 'bg-violet-500 text-white border-violet-500'
                        : 'bg-card border-border hover:border-violet-500/50'
                    }`}
                  >
                    {style === 'all' ? 'All Styles' : style}
                  </button>
                ))}
              </div>
            </div>

            {/* Audience Size Filter */}
            <div>
              <label className="text-sm text-muted-foreground mb-3 block">Audience Size</label>
              <div className="flex flex-wrap gap-2">
                {audienceSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedAudienceSize(size)}
                    className={`px-4 py-2 rounded-full border transition-all ${
                      selectedAudienceSize === size
                        ? 'bg-violet-500 text-white border-violet-500'
                        : 'bg-card border-border hover:border-violet-500/50'
                    }`}
                  >
                    {size === 'all' ? 'All Sizes' : size.charAt(0).toUpperCase() + size.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing {filteredCreators.length} {filteredCreators.length === 1 ? 'creator' : 'creators'}
          </p>
        </div>

        {/* Creator Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCreators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>

        {filteredCreators.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No creators found matching your filters.</p>
          </div>
        )}
      </div>

      {/* How It Works Section */}
      <section className="py-24 bg-muted/30 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl mb-4">How It Works with Creators</h2>
            <p className="text-muted-foreground text-lg">
              Seamlessly create AI-powered content with our talent network
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="size-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mx-auto mb-4">
                <Users className="size-8 text-white" />
              </div>
              <h3 className="text-xl mb-2">1. Select a Creator</h3>
              <p className="text-muted-foreground">
                Browse our talent database and choose the perfect creator for your brand
              </p>
            </div>
            <div className="text-center">
              <div className="size-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="size-8 text-white" />
              </div>
              <h3 className="text-xl mb-2">2. AI Content Generation</h3>
              <p className="text-muted-foreground">
                We generate high-quality content using their likeness and AI technology
              </p>
            </div>
            <div className="text-center">
              <div className="size-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="size-8 text-white" />
              </div>
              <h3 className="text-xl mb-2">3. Deploy & Scale</h3>
              <p className="text-muted-foreground">
                Receive ready-to-use assets and scale your content across all channels
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA for Creators */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-4">Are You a Creator?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our network and monetize your likeness through AI-generated content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:opacity-90 transition-opacity">
              Apply as a Creator
            </button>
            <button className="px-8 py-4 rounded-xl border border-border hover:bg-accent transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function CreatorCard({ creator }: { creator: Creator }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/creators/${creator.id}`}
      className="group relative rounded-3xl bg-card border border-border hover:border-violet-500/50 transition-all overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Profile Image */}
      <div className="aspect-[3/4] overflow-hidden relative">
        <ImageWithFallback
          src={creator.profileImage}
          alt={creator.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex items-end p-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Preview Gallery</p>
              <div className="grid grid-cols-3 gap-2">
                {creator.galleryImages.slice(0, 3).map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={img}
                      alt={`${creator.name} gallery ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* AI-Ready Badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-violet-500 text-white text-xs flex items-center gap-1">
          <Sparkles className="size-3" />
          AI-Ready
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl mb-1">{creator.name}</h3>
        <p className="text-sm text-violet-500 mb-3">{creator.niche.join(' • ')}</p>
        <p className="text-sm text-muted-foreground mb-4">{creator.descriptor}</p>

        <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
          <div>
            <span className="block">{creator.followers}</span>
            <span className="text-xs">Followers</span>
          </div>
          <div>
            <span className="block">{creator.engagementRate}</span>
            <span className="text-xs">Engagement</span>
          </div>
        </div>

        <button className="w-full mt-4 px-4 py-2 rounded-xl bg-secondary text-secondary-foreground group-hover:bg-violet-500 group-hover:text-white transition-colors">
          View Profile
        </button>
      </div>
    </Link>
  );
}
