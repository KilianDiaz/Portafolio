'use client';

import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import en from '@/locales/en.json';
import es from '@/locales/es.json';

type Locale = 'en' | 'es';
type Translations = typeof en;

const translations: Record<Locale, Translations> = { en, es };

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof Translations) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en'); // Default to English

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'es') {
      setLocale('es');
    }
  }, []);

  const t = useCallback((key: keyof Translations): string => {
    return translations[locale][key] || translations['en'][key];
  }, [locale]);
  
  const value = useMemo(() => ({
    locale,
    setLocale,
    t,
  }), [locale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
