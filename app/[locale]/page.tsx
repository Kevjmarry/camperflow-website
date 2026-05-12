import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import FeaturesSection from '@/components/FeaturesSection';
import FounderSection from '@/components/FounderSection';
import CtaSection from '@/components/CtaSection';

export default function LocalePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <FounderSection />
        <CtaSection />
      </main>
      <footer
        className="py-8 border-t text-center text-[13px]"
        style={{
          backgroundColor: 'var(--navy-950)',
          borderColor: 'var(--border-subtle)',
          color: 'var(--text-muted)',
        }}
      >
        © {new Date().getFullYear()} CamperFlow. All rights reserved.
      </footer>
    </>
  );
}
