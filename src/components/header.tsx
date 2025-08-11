'use client';
import { LanguageSwitcher } from '@/components/language-switcher';
import { useI18n } from '@/hooks/use-i18n';

export function Header() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <h1 className="text-xl font-headline font-bold text-primary sm:text-2xl">
          {t('tittle')}
        </h1>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
