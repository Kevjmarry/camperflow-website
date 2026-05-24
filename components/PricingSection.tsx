type Plan = {
  name: string;
  price: number;
  vehicles: number;
  staff: number;
  popular: boolean;
  description: string;
};

const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: 29,
    vehicles: 3,
    staff: 3,
    popular: false,
    description: 'For small fleets getting started.',
  },
  {
    name: 'Core',
    price: 49,
    vehicles: 5,
    staff: 5,
    popular: true,
    description: 'For growing rental operations.',
  },
  {
    name: 'Growth',
    price: 79,
    vehicles: 15,
    staff: 15,
    popular: false,
    description: 'For established multi-vehicle fleets.',
  },
  {
    name: 'Pro',
    price: 119,
    vehicles: 30,
    staff: 30,
    popular: false,
    description: 'For large professional operations.',
  },
];

const INCLUDED = [
  'Unlimited bookings',
  'Digital checklists',
  'Automated reminders',
  'Guest portal access',
];

function CheckIcon({ dark }: { dark: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5 shrink-0"
      style={{ color: dark ? 'var(--blue-light)' : 'var(--blue-brand)' }}
    >
      <path d="M3 8l3.5 3.5L13 4" />
    </svg>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const dark = plan.popular;

  return (
    <div
      className="relative flex flex-col rounded-2xl border p-6"
      style={{
        backgroundColor: dark ? 'var(--navy-800)' : 'var(--surface-light)',
        borderColor: dark ? 'var(--blue-brand)' : 'var(--border-light)',
        boxShadow: dark ? '0 0 0 1px var(--blue-brand)' : 'none',
      }}
    >
      {dark && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap"
          style={{ backgroundColor: 'var(--blue-brand)', color: '#fff' }}
        >
          Most popular
        </div>
      )}

      <div className="mb-5">
        <div
          className="text-[11px] font-semibold uppercase tracking-widest mb-3"
          style={{ color: dark ? 'var(--blue-light)' : 'var(--blue-brand)' }}
        >
          {plan.name}
        </div>
        <div className="flex items-baseline gap-1 mb-1.5">
          <span
            className="text-[34px] font-bold tracking-tight"
            style={{ color: dark ? 'var(--text-primary)' : 'var(--on-light-primary)' }}
          >
            €{plan.price}
          </span>
          <span
            className="text-[13px]"
            style={{ color: dark ? 'var(--text-muted)' : 'var(--on-light-muted)' }}
          >
            /mo
          </span>
        </div>
        <p
          className="text-[13px] leading-snug"
          style={{ color: dark ? 'var(--text-secondary)' : 'var(--on-light-secondary)' }}
        >
          {plan.description}
        </p>
      </div>

      <div
        className="mb-4 pb-4 border-b"
        style={{ borderColor: dark ? 'var(--border-subtle)' : 'var(--border-light)' }}
      >
        <div
          className="flex items-center gap-2 text-[13px] mb-1.5"
          style={{ color: dark ? 'var(--text-secondary)' : 'var(--on-light-primary)' }}
        >
          <CheckIcon dark={dark} />
          {plan.vehicles} vehicles included
        </div>
        <div
          className="flex items-center gap-2 text-[13px]"
          style={{ color: dark ? 'var(--text-secondary)' : 'var(--on-light-primary)' }}
        >
          <CheckIcon dark={dark} />
          {plan.staff} staff included
        </div>
      </div>

      <ul className="flex-1 space-y-1.5 mb-5">
        {INCLUDED.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-[13px]"
            style={{ color: dark ? 'var(--text-secondary)' : 'var(--on-light-secondary)' }}
          >
            <CheckIcon dark={dark} />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="mailto:info@camperflow.io"
        className="block text-center px-4 py-3 rounded-xl text-[14px] font-semibold transition-colors"
        style={
          dark
            ? { backgroundColor: 'var(--blue-brand)', color: '#fff' }
            : {
                backgroundColor: 'transparent',
                color: 'var(--blue-brand)',
                border: '1.5px solid var(--blue-brand)',
              }
        }
      >
        Book a demo
      </a>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-16 lg:py-24"
      style={{ backgroundColor: 'var(--surface-white)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div data-reveal="" className="text-center max-w-2xl mx-auto mb-14">
          <div
            className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-4 border"
            style={{
              backgroundColor: 'var(--surface-blue-pale)',
              borderColor: 'var(--border-blue-light)',
              color: 'var(--blue-brand)',
            }}
          >
            Pricing
          </div>
          <h2
            className="text-[28px] sm:text-[36px] font-bold tracking-tight leading-tight mb-4"
            style={{ color: 'var(--on-light-primary)' }}
          >
            Simple, transparent pricing
          </h2>
          <p
            className="text-[16px] leading-relaxed"
            style={{ color: 'var(--on-light-secondary)' }}
          >
            Start small, scale as your fleet grows. All plans include the full operational layer.
          </p>
        </div>

        <div data-reveal="" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>


      </div>
    </section>
  );
}
