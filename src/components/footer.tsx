'use client';
import { Github } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';
import Link from 'next/link';

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="w-full bg-primary/95 text-primary-foreground backdrop-blur supports-[backdrop-filter]:bg-primary/80">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-center text-sm">
          {t('footerText')}
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/KilianDiaz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 transition-colors hover:text-accent" />
          </Link>
          <Link href="https://x.com/kiliand098" target="_blank" rel="noopener noreferrer" aria-label="X">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 1227"
              fill="currentColor"
              className="h-6 w-6 transition-colors hover:text-accent"
              aria-hidden="true"
            >
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.163 519.284ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.828Z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}