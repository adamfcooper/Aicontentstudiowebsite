import { ArrowRight, Calendar } from 'lucide-react';

export function FinalCTA() {
  return (
    <section id="cta" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-violet-600" />

          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Content */}
          <div className="relative px-8 py-20 lg:py-32 text-center">
            <h2 className="text-4xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto">
              Start creating content without the shoot
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join hundreds of brands transforming their content creation with AI. Book a demo and see the difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 rounded-xl bg-white text-violet-600 hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-xl">
                <Calendar className="size-5" />
                Book a Demo
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                View Sample Work
              </button>
            </div>

            <p className="text-white/70 text-sm mt-8">
              No credit card required • 30-minute consultation • Custom demo for your brand
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
