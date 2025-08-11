'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useI18n } from '@/hooks/use-i18n';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <Select value={locale} onValueChange={setLocale}>
      <SelectTrigger className="w-auto gap-2 border-muted-foreground/50">
        <Globe className="h-4 w-4" />
        <SelectValue placeholder={t('language')} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">{t('english')}</SelectItem>
        <SelectItem value="es">{t('spanish')}</SelectItem>
      </SelectContent>
    </Select>
  );
}
