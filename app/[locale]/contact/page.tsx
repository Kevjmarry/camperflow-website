import Navbar from '@/components/Navbar';
import AnimatedRibbon from '@/components/AnimatedRibbon';

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <AnimatedRibbon />
      <Navbar />
      <main
        className="min-h-screen flex items-center justify-center pt-16"
        style={{backgroundColor: 'var(--navy-950)'}}
      >
        <div className="text-center px-4">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{color: 'var(--blue-brand)'}}
          >
            Coming soon
          </p>
          <h1
            className="text-3xl font-bold mb-3"
            style={{color: 'var(--text-primary)'}}
          >
            Contact
          </h1>
          <p className="text-[15px]" style={{color: 'var(--text-secondary)'}}>
            Get in touch and book a demo — coming in V2.
          </p>
        </div>
      </main>
    </div>
  );
}
