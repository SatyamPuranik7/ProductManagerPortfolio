import { useState, useEffect, useCallback } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Pillars } from '@/components/sections/Pillars';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { ProcessApproach } from '@/components/sections/ProcessApproach';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { ResumeBanner } from '@/components/sections/ResumeBanner';
import { Contact, Footer } from '@/components/sections/Contact';
import { CaseStudy } from '@/components/CaseStudy';

function useHashRoute(): [string, (path: string) => void] {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((path: string) => {
    window.location.hash = path;
  }, []);

  return [hash, navigate];
}

function HomePage() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Pillars />
      <SelectedWork />
      <ProcessApproach />
      <About />
      <Skills />
      <ResumeBanner />
      <Contact />
    </div>
  );
}

function App() {
  const [hash] = useHashRoute();

  const caseStudyMatch = hash.match(/^#\/work\/(.+)$/);
  const isCaseStudy = !!caseStudyMatch;
  const caseStudySlug = caseStudyMatch?.[1] ?? '';

  return (
    <div className="min-h-screen bg-stone-100">
      <Navbar />
      {isCaseStudy ? (
        <CaseStudy slug={caseStudySlug} />
      ) : (
        <HomePage />
      )}
      <Footer />
    </div>
  );
}

export default App;
