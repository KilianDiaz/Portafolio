'use client';
import Image from 'next/image';
import { useI18n } from '@/hooks/use-i18n';

export function Introduction() {
  const { t } = useI18n();

  return (
    <section id="introduction" className="text-center">
      <Image 
        src="/perfil.jpg" 
        alt="Kilian Diaz"
        data-ai-hint="developer portrait"
        width={150}
        height={150}
        className="mx-auto mb-6 h-[150px] w-[150px] rounded-full object-cover shadow-lg ring-4 ring-primary/20"
        priority
      />
      <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">
        {t('greeting')}
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
        {t('intro')}
      </p>
    </section>
  );
}
