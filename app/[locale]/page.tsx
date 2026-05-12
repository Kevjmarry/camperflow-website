import {useTranslations} from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function LocalePage() {
  const t = useTranslations('common');

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold tracking-tight">{t('siteName')}</h1>
      <LanguageSwitcher />
    </main>
  );
}
