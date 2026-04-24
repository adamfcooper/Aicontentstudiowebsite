import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, MapPin, Users, TrendingUp, Sparkles } from 'lucide-react';
import { creators } from '../data/creators';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ContactDemoDialog } from '../components/ContactDemoDialog';

export function CreatorProfilePage() {
  const { id } = useParams();
  const creator = creators.find((c) => c.id === id);
  const [isContactOpen, setIsContactOpen] = useState(false);

  if (!creator) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Creator Not Found</h1>
          <Link to="/creators" className="text-foreground hover:underline">
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
            <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-black text-white flex items-center gap-2">
              <Sparkles className="size-4" />
              AI-Enhanced
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-8">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {creator.niche.map((n) => (
                  <span key={n} className="px-3 py-1 rounded-full bg-foreground/5 text-foreground/70 text-sm">
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
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
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

              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="glass-button monochrome-button px-6 py-4 rounded-full"
              >
                Work with Creator
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

      <ContactDemoDialog
        open={isContactOpen}
        onOpenChange={setIsContactOpen}
        title="Work with Creator"
        description="Tell us about your brand and project and we'll put together the right creator-led brief."
        submitLabel="Send Enquiry"
        subject={creator.name}
      />
    </div>
  );
}
