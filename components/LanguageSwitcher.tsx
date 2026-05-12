'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/navigation';
import {routing} from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale: string) {
    router.replace(pathname, {locale: nextLocale});
  }

  return (
    <div className="flex gap-2">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          disabled={loc === locale}
          className={`px-3 py-1 rounded text-sm font-medium uppercase transition-colors ${
            loc === locale
              ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 cursor-default'
              : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
          }`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
