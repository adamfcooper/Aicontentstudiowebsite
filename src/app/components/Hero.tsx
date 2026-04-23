import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-background to-fuchsia-500/10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
            <span className="size-2 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-sm text-violet-600 dark:text-violet-400">AI-Powered Content Studio</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Create stunning content without the shoot
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              We combine AI technology with real creators to produce high-performing visual content—faster, smarter, and without traditional production costs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all flex items-center justify-center gap-2">
              Book a Demo
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link to="/creators" className="px-8 py-4 rounded-xl border border-border hover:bg-accent transition-colors flex items-center justify-center gap-2">
              <Play className="size-5" />
              Browse Creators
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
            <div>
              <div className="text-3xl mb-1">10x</div>
              <div className="text-sm text-muted-foreground">Faster Production</div>
            </div>
            <div>
              <div className="text-3xl mb-1">70%</div>
              <div className="text-sm text-muted-foreground">Cost Savings</div>
            </div>
            <div>
              <div className="text-3xl mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Brands Trust Us</div>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 to-fuchsia-500 rounded-3xl blur-3xl opacity-20" />
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768818504222-00858f3e0eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXNoaW9uJTIwc3R1ZGlvJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NzY5NTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Fashion model studio photography"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1634725110352-d76625c7572a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBhdXRvbW90aXZlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc2OTUyNDk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury automotive photography"
                className="w-full h-48 object-cover rounded-2xl"
              />
            </div>
            <div className="space-y-4 pt-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1742540425845-8d8dabe893ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBmYXNoaW9uJTIwc3R1ZGlvJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NzY5NTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creative model photography"
                className="w-full h-48 object-cover rounded-2xl"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1612066149888-efcde7d17c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBjYXIlMjBhdXRvbW90aXZlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc2OTUyNDk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ferrari automotive photography"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
