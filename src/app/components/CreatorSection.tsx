import { Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CreatorSection() {
  return (
    <section id="creators" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20">
              <Sparkles className="size-4 text-fuchsia-500" />
              <span className="text-sm text-fuchsia-600 dark:text-fuchsia-400">For Creators & Influencers</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl">Real Creators, Scaled with AI</h2>
              <p className="text-xl text-muted-foreground">
                Join our network of creators and monetize your likeness through AI-generated content—while maintaining full creative control.
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="size-6 text-fuchsia-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="mb-1">Earn passive income from your digital likeness</div>
                  <div className="text-sm text-muted-foreground">Get compensated every time your AI-generated content is used</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="size-6 text-fuchsia-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="mb-1">Maintain creative control and approval rights</div>
                  <div className="text-sm text-muted-foreground">You decide how your likeness is used and which brands you work with</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="size-6 text-fuchsia-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="mb-1">Scale your content without the grind</div>
                  <div className="text-sm text-muted-foreground">One shoot becomes hundreds of variations—work smarter, not harder</div>
                </div>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/creators" className="group px-8 py-4 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white hover:opacity-90 transition-all flex items-center justify-center gap-2">
                Browse Creators
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-4 rounded-xl border border-border hover:bg-accent transition-colors flex items-center justify-center gap-2">
                Apply as a Creator
              </button>
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 to-violet-500 rounded-3xl blur-3xl opacity-20" />
            <div className="relative grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758876202699-abeb827f35b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHdvcmtzcGFjZSUyMG1vZGVybnxlbnwxfHx8fDE3NzY5NTI0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creative professional"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758876202124-cc941ebb8446?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHdvcmtzcGFjZSUyMG1vZGVybnxlbnwxfHx8fDE3NzY5NTI0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional workspace"
                className="w-full h-64 object-cover rounded-2xl mt-8"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758613654707-8bdab92f711d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBmYXNoaW9uJTIwc3R1ZGlvJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NzY5NTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Studio photography"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764016888054-d8d3b8d66945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtb2Rlcm4lMjBmYXNoaW9uJTIwc3R1ZGlvJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NzY5NTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Model photography"
                className="w-full h-64 object-cover rounded-2xl -mt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
