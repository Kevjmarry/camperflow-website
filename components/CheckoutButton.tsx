'use client';

import { useState } from 'react';

type Props = {
  plan: string;
  dark: boolean;
  label: string;
};

export default function CheckoutButton({ plan, dark, label }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('[checkout] No redirect URL:', data);
        setLoading(false);
      }
    } catch (err) {
      console.error('[checkout] Fetch error:', err);
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="block w-full text-center px-4 py-3 rounded-xl text-[14px] font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
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
      {loading ? '…' : label}
    </button>
  );
}
