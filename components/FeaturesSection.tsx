'use client';

import {useState} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

type TabIndex = 0 | 1 | 2 | 3 | 4 | 5;

const TAB_ICONS: Record<TabIndex, React.ReactNode> = {
  0: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-4 h-4">
      <rect x="2" y="3" width="16" height="14" rx="1.5" />
      <path d="M2 7h16M6 7v10" />
    </svg>
  ),
  1: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-4 h-4">
      <rect x="2" y="2" width="7" height="7" rx="1" />
      <rect x="11" y="2" width="7" height="7" rx="1" />
      <rect x="2" y="11" width="7" height="7" rx="1" />
      <rect x="11" y="11" width="7" height="7" rx="1" />
    </svg>
  ),
  2: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-4 h-4">
      <path d="M5 10l3 3 7-7" />
      <rect x="2" y="2" width="16" height="16" rx="2" />
    </svg>
  ),
  3: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-4 h-4">
      <circle cx="10" cy="10" r="8" />
      <path d="M10 6v4l2.5 2.5" />
    </svg>
  ),
  4: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-4 h-4">
      <path d="M10 2l7 2.5V10c0 4.5-3 7.5-7 8-4-0.5-7-3.5-7-8V4.5L10 2z" />
      <path d="M7 10l2 2 4-4" />
    </svg>
  ),
  5: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-4 h-4">
      <rect x="2" y="4" width="16" height="12" rx="2" />
      <path d="M6 9h8M6 12h5" />
    </svg>
  ),
};

function BookingsVisual() {
  return (
    <div className="rounded-xl overflow-hidden" style={{border: '1px solid var(--border-subtle)'}}>
      <div className="relative" style={{height: '300px', overflow: 'hidden'}}>
        <Image
          src="/screenshots/bookings.png"
          alt="CamperFlow Bookings view showing upcoming rentals with statuses and next actions"
          width={2561}
          height={4973}
          style={{width: '100%', height: 'auto', display: 'block'}}
        />
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '60px',
            background: 'linear-gradient(to bottom, transparent, var(--navy-900))',
          }}
        />
      </div>
    </div>
  );
}

function VehicleReadinessVisual() {
  const vehicles = [
    {id: 'A3', status: 'Ready', c: '#22c55e'},
    {id: 'B7', status: 'Check', c: '#f59e0b'},
    {id: 'C2', status: 'Ready', c: '#22c55e'},
    {id: 'D5', status: 'Ready', c: '#22c55e'},
    {id: 'E1', status: 'Ready', c: '#22c55e'},
    {id: 'F9', status: 'Off', c: '#ef4444'},
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[12px] font-semibold" style={{color: 'var(--text-primary)'}}>Fleet status</span>
        <span className="text-[11px]" style={{color: 'var(--text-muted)'}}>6 vehicles</span>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {vehicles.map((v) => (
          <div key={v.id} className="rounded-xl p-3 border text-center"
            style={{backgroundColor: 'rgba(255,255,255,0.02)', borderColor: 'var(--border-subtle)'}}>
            <div className="text-[11px] font-mono font-bold mb-2" style={{color: 'var(--text-secondary)'}}>EV-{v.id}</div>
            <div className="w-2 h-2 rounded-full mx-auto mb-1" style={{backgroundColor: v.c}} />
            <div className="text-[10px]" style={{color: v.c}}>{v.status}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-3">
        {[{label: 'Ready', c: '#22c55e', n: 4}, {label: 'Check', c: '#f59e0b', n: 1}, {label: 'Offline', c: '#ef4444', n: 1}].map(s => (
          <div key={s.label} className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: s.c}} />
            <span className="text-[11px]" style={{color: 'var(--text-muted)'}}>{s.n} {s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChecklistVisual() {
  const items = [
    {label: 'Vehicle exterior inspection', done: true},
    {label: 'Interior cleaning complete', done: true},
    {label: 'Fuel level verified', done: true},
    {label: 'Documentation checked', done: true},
    {label: 'Final walkthrough', done: false},
    {label: 'Key handover', done: false},
  ];
  const done = items.filter((i) => i.done).length;
  const pct = Math.round((done / items.length) * 100);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[12px] font-semibold" style={{color: 'var(--text-primary)'}}>Handover — EV-A3</span>
        <span className="text-[11px]" style={{color: 'var(--text-muted)'}}>{done}/{items.length}</span>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 h-1.5 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.06)'}}>
          <div className="h-full rounded-full transition-all" style={{width: `${pct}%`, backgroundColor: '#22c55e'}} />
        </div>
        <span className="text-[11px] font-semibold" style={{color: '#22c55e'}}>{pct}%</span>
      </div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 px-3 py-2 rounded-lg border"
            style={{
              backgroundColor: item.done ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.02)',
              borderColor: item.done ? 'rgba(34,197,94,0.15)' : 'var(--border-subtle)',
            }}>
            <div className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0"
              style={{backgroundColor: item.done ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.05)'}}>
              {item.done && (
                <svg viewBox="0 0 12 12" fill="none" stroke="#22c55e" strokeWidth={2} strokeLinecap="round" className="w-2.5 h-2.5">
                  <path d="M2 6l3 3 5-5" />
                </svg>
              )}
            </div>
            <span className="text-[12px]" style={{color: item.done ? 'var(--text-muted)' : 'var(--text-secondary)'}}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function IssueTrackingVisual() {
  const issues = [
    {title: 'Rear wiper blade worn', priority: 'High', vehicle: 'EV-B7', c: '#ef4444'},
    {title: 'Water pump noise', priority: 'Med', vehicle: 'EV-F9', c: '#f59e0b'},
    {title: 'Scratch on rear bumper', priority: 'Low', vehicle: 'EV-A3', c: '#3b82f6'},
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[12px] font-semibold" style={{color: 'var(--text-primary)'}}>Open issues</span>
        <span className="text-[11px] px-2 py-0.5 rounded-full" style={{backgroundColor: 'rgba(239,68,68,0.15)', color: '#ef4444'}}>
          {issues.length} open
        </span>
      </div>
      <div className="space-y-2 mb-3">
        {issues.map((iss, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-xl border"
            style={{backgroundColor: 'rgba(255,255,255,0.02)', borderColor: 'var(--border-subtle)'}}>
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{backgroundColor: iss.c}} />
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-medium" style={{color: 'var(--text-primary)'}}>{iss.title}</div>
              <div className="text-[10px]" style={{color: 'var(--text-muted)'}}>{iss.vehicle}</div>
            </div>
            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded" style={{color: iss.c, backgroundColor: `${iss.c}20`}}>
              {iss.priority}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-4 pt-2 border-t" style={{borderColor: 'var(--border-subtle)'}}>
        <div className="text-[11px]" style={{color: 'var(--text-muted)'}}>This month: <span style={{color: 'var(--text-secondary)'}}>7 total</span></div>
        <div className="text-[11px]" style={{color: 'var(--text-muted)'}}>Resolved: <span style={{color: '#22c55e'}}>4</span></div>
      </div>
    </div>
  );
}

function ComplianceVisual() {
  return (
    <div className="rounded-xl overflow-hidden" style={{border: '1px solid var(--border-subtle)'}}>
      {/* Show the compliance section of the vehicle page — crop to compliance rows */}
      <div className="relative" style={{height: '300px', overflow: 'hidden'}}>
        <Image
          src="/screenshots/vehicle.png"
          alt="CamperFlow vehicle compliance view showing service dates, insurance status and compliance blockers"
          width={2561}
          height={2834}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            marginTop: '-52%',
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '60px',
            background: 'linear-gradient(to bottom, transparent, var(--navy-900))',
          }}
        />
      </div>
    </div>
  );
}

function GuestPageVisual() {
  return (
    <div className="rounded-xl overflow-hidden" style={{border: '1px solid var(--border-subtle)'}}>
      {/* Show the full guest portal page — it's compact enough to fit */}
      <div className="relative" style={{height: '300px', overflow: 'hidden'}}>
        <Image
          src="/screenshots/guest-portal.png"
          alt="CamperFlow guest portal showing My Booking page with booking details, pickup info, return info and multilingual access"
          width={2561}
          height={1264}
          style={{width: '100%', height: 'auto', display: 'block'}}
        />
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '40px',
            background: 'linear-gradient(to bottom, transparent, var(--navy-900))',
          }}
        />
      </div>
    </div>
  );
}

const TAB_VISUALS: Record<TabIndex, React.ReactNode> = {
  0: <BookingsVisual />,
  1: <VehicleReadinessVisual />,
  2: <ChecklistVisual />,
  3: <IssueTrackingVisual />,
  4: <ComplianceVisual />,
  5: <GuestPageVisual />,
};

const TABS = [0, 1, 2, 3, 4, 5] as TabIndex[];

export default function FeaturesSection() {
  const t = useTranslations('features');
  const [active, setActive] = useState<TabIndex>(0);
  const [visible, setVisible] = useState(true);

  function selectTab(idx: TabIndex) {
    if (idx === active) return;
    setVisible(false);
    setTimeout(() => {
      setActive(idx);
      setVisible(true);
    }, 120);
  }

  return (
    <section
      id="features"
      className="py-20 lg:py-28"
      style={{backgroundColor: 'var(--navy-900)'}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div
            className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-4 border"
            style={{
              backgroundColor: 'rgba(37,99,235,0.08)',
              borderColor: 'rgba(37,99,235,0.2)',
              color: 'var(--blue-light)',
            }}
          >
            {t('badge')}
          </div>
          <h2
            className="text-[30px] sm:text-[36px] font-bold tracking-tight leading-tight mb-4"
            style={{color: 'var(--text-primary)'}}
          >
            {t('headline')}
          </h2>
          <p className="text-[17px] leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            {t('subheadline')}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">

          {/* Left: tab list */}
          <div className="lg:col-span-2 space-y-1">
            {TABS.map((idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={idx}
                  onClick={() => selectTab(idx)}
                  className="w-full text-left flex items-start gap-3 px-4 py-3.5 rounded-xl border transition-all"
                  style={{
                    backgroundColor: isActive ? 'rgba(37,99,235,0.08)' : 'rgba(255,255,255,0.01)',
                    borderColor: isActive ? 'rgba(37,99,235,0.25)' : 'var(--border-subtle)',
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors"
                    style={{
                      backgroundColor: isActive ? 'rgba(37,99,235,0.2)' : 'rgba(255,255,255,0.04)',
                      color: isActive ? 'var(--blue-light)' : 'var(--text-muted)',
                    }}
                  >
                    {TAB_ICONS[idx]}
                  </div>
                  <div className="min-w-0">
                    <div
                      className="text-[13px] font-semibold leading-snug mb-0.5 transition-colors"
                      style={{color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)'}}
                    >
                      {t(`tab${idx}`)}
                    </div>
                    {isActive && (
                      <div className="text-[12px] leading-relaxed" style={{color: 'var(--text-muted)'}}>
                        {t(`tab${idx}Desc`)}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: visual card */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl border p-5 sm:p-6 transition-all duration-150"
              style={{
                backgroundColor: 'var(--navy-800)',
                borderColor: 'var(--border-dim)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(6px)',
              }}
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="text-[15px] font-semibold mb-1" style={{color: 'var(--text-primary)'}}>
                    {t(`tab${active}`)}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                    {t(`tab${active}Detail`)}
                  </p>
                </div>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ml-3"
                  style={{backgroundColor: 'rgba(37,99,235,0.15)', color: 'var(--blue-light)'}}
                >
                  {TAB_ICONS[active]}
                </div>
              </div>

              {/* Visual */}
              <div
                className="rounded-xl p-4 border"
                style={{
                  backgroundColor: 'var(--navy-900)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                {TAB_VISUALS[active]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
