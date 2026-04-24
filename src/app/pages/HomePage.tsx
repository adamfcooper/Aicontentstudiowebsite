import { useState } from 'react';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { Services } from '../components/Services';
import { Benefits } from '../components/Benefits';
import { CreatorSection } from '../components/CreatorSection';
import { FinalCTA } from '../components/FinalCTA';
import { ContactDemoDialog } from '../components/ContactDemoDialog';
import { CreatorApplicationDialog } from '../components/CreatorApplicationDialog';

export function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCreatorApplicationOpen, setIsCreatorApplicationOpen] = useState(false);

  return (
    <>
      <Hero onBookDemo={() => setIsContactOpen(true)} />
      <HowItWorks />
      <Services />
      <Benefits onGetInTouch={() => setIsContactOpen(true)} />
      <CreatorSection onApplyAsCreator={() => setIsCreatorApplicationOpen(true)} />
      <FinalCTA onBookDemo={() => setIsContactOpen(true)} />
      <ContactDemoDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
      <CreatorApplicationDialog open={isCreatorApplicationOpen} onOpenChange={setIsCreatorApplicationOpen} />
    </>
  );
}
