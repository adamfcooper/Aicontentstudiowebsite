import { useParams, Link } from 'react-router';
import { ArrowLeft, MapPin, Users, TrendingUp, Sparkles, CheckCircle, Mail, Calendar } from 'lucide-react';
import { creators } from '../data/creators';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CreatorProfilePage() {
  const { id } = useParams();
  const creator = creators.find((c) => c.id === id);

  if (!creator) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Creator Not Found</h1>
          <Link to="/creators" className="text-violet-500 hover:underline">
            Back to Creators
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link
          to="/creators"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Creators
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden">
              <ImageWithFallback
                src={creator.profileImage}
                alt={creator.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-violet-500 text-white flex items-center gap-2">
              <Sparkles className="size-4" />
              AI-Enhanced
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-8">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {creator.niche.map((n) => (
                  <span key={n} className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm">
                    {n}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl mb-4">{creator.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{creator.descriptor}</p>

              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4" />
                  <span className="text-sm">{creator.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">{creator.gender}</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl bg-muted/50 border border-border">
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Users className="size-4" />
                  <span className="text-xs">Followers</span>
                </div>
                <div className="text-2xl">{creator.followers}</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <TrendingUp className="size-4" />
                  <span className="text-xs">Engagement</span>
                </div>
                <div className="text-2xl">{creator.engagementRate}</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Users className="size-4" />
                  <span className="text-xs">Audience</span>
                </div>
                <div className="text-2xl capitalize">{creator.audienceSize}</div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h3 className="text-xl mb-3">About</h3>
              <p className="text-muted-foreground leading-relaxed">{creator.bio}</p>
            </div>

            {/* Content Style Tags */}
            <div>
              <h3 className="text-xl mb-3">Content Style</h3>
              <div className="flex flex-wrap gap-2">
                {creator.contentStyle.map((style) => (
                  <span key={style} className="px-4 py-2 rounded-full border border-border bg-card">
                    {style}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Calendar className="size-5" />
                Request Content
              </button>
              <button className="flex-1 px-6 py-4 rounded-xl border border-border hover:bg-accent transition-colors flex items-center justify-center gap-2">
                <Mail className="size-5" />
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl mb-8">Example Content</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {creator.galleryImages.map((image, idx) => (
            <div key={idx} className="aspect-[3/4] rounded-2xl overflow-hidden group">
              <ImageWithFallback
                src={image}
                alt={`${creator.name} gallery ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-6 text-center">
          Mix of real photography and AI-generated content
        </p>
      </section>

      {/* AI Capabilities */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-muted/30 rounded-3xl my-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
              <Sparkles className="size-4 text-violet-500" />
              <span className="text-sm text-violet-600 dark:text-violet-400">AI-Powered Capabilities</span>
            </div>
            <h2 className="text-3xl mb-4">What You Can Create</h2>
            <p className="text-muted-foreground">
              Leverage AI technology to generate unlimited content variations with {creator.name}
            </p>
          </div>

          <div className="space-y-4">
            {creator.aiCapabilities.map((capability, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <CheckCircle className="size-6 text-violet-500 flex-shrink-0 mt-0.5" />
                <p className="text-lg">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Collaborations */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl mb-8">Past Brand Collaborations</h2>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          {creator.pastCollaborations.map((brand) => (
            <div key={brand} className="text-2xl text-muted-foreground/50 hover:text-foreground transition-colors">
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-violet-600" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="relative px-8 py-16 lg:py-24 text-center">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Ready to create with {creator.name.split(' ')[0]}?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Book a consultation and we'll show you exactly how AI-powered content can transform your campaigns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-xl bg-white text-violet-600 hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-xl">
                <Calendar className="size-5" />
                Book Campaign
              </button>
              <button className="px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-white/10 transition-all">
                View All Creators
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
