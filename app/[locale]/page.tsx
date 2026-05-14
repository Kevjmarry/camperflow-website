import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import AdoptionStrip from '@/components/AdoptionStrip';
import LifecycleSection from '@/components/LifecycleSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProductShowcaseSection from '@/components/ProductShowcaseSection';
import ComplianceSection from '@/components/ComplianceSection';
import GuestPortalSection from '@/components/GuestPortalSection';
import BookingFlowSection from '@/components/BookingFlowSection';
import FounderSection from '@/components/FounderSection';
import CtaSection from '@/components/CtaSection';

export default function LocalePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero — operations screenshot as the visual hero */}
        <HeroSection />
        {/* 2. Survival mode — old way vs CamperFlow way */}
        <ProblemSection />
        {/* 2b. Setup friction reassurance — no need to replace booking system, any device */}
        <AdoptionStrip />
        {/* 3. Checklists — seasonal staff training pain, digital-checklists.png */}
        <LifecycleSection />
        {/* 4. Operational clarity — accountability, ops crops + reminders/readiness */}
        <FeaturesSection />
        {/* 5. Fleet mission control — operations.png large, dark navy */}
        <ProductShowcaseSection />
        {/* 6. Compliance anxiety — compliance-monitoring.png, red Expired status */}
        <ComplianceSection />
        {/* 7. Guest portal — lighter section, guest-portal.png */}
        <GuestPortalSection />
        {/* 8. Connected workflows — booking-details.png, everything tied to the booking */}
        <BookingFlowSection />
        {/* 9. Built by operators — founder section */}
        <FounderSection />
        {/* 9. Final CTA */}
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
