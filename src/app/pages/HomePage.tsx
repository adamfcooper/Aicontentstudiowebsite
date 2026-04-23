import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { Services } from '../components/Services';
import { UseCases } from '../components/UseCases';
import { Benefits } from '../components/Benefits';
import { CreatorSection } from '../components/CreatorSection';
import { SocialProof } from '../components/SocialProof';
import { Pricing } from '../components/Pricing';
import { FinalCTA } from '../components/FinalCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <UseCases />
      <Benefits />
      <CreatorSection />
      <SocialProof />
      <Pricing />
      <FinalCTA />
    </>
  );
}
