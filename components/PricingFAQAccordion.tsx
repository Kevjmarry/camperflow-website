'use client';
import {useState} from 'react';

type FAQItem = {q: string; a: string};

export default function PricingFAQAccordion({items}: {items: FAQItem[]}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div
          key={i}
          style={{borderTop: i > 0 ? '1px solid var(--border-light)' : 'none'}}
        >
          <button
            className="w-full text-left py-5 flex items-start justify-between gap-4"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
          >
            <span
              className="text-[15px] font-semibold leading-snug"
              style={{color: 'var(--on-light-primary)'}}
            >
              {item.q}
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-4 h-4 mt-0.5 shrink-0 transition-transform duration-200 ${openIdx === i ? 'rotate-180' : ''}`}
              style={{color: 'var(--on-light-muted)'}}
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIdx === i && (
            <div
              className="pb-5 text-[14px] leading-relaxed"
              style={{color: 'var(--on-light-secondary)'}}
            >
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
