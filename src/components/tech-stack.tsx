'use client';

import { useI18n } from '@/hooks/use-i18n';

const TechGroup = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-6">
    <h3 className="mb-4 text-center font-headline text-xl font-semibold text-primary">{title}</h3>
    <div className="flex flex-wrap items-center justify-center gap-2">{children}</div>
  </div>
);

const Badge = ({ src, alt }: { src: string; alt: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img alt={alt} src={src} className="transition-transform duration-300 hover:scale-110" />
);

export function TechStack() {
  const { t } = useI18n();

  return (
    <section id="tech-stack" className="rounded-lg border bg-card p-6 shadow-sm md:p-8">
      <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
        {t('techStackTitle')}
      </h2>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <TechGroup title={t('programmingLanguages')}>
          <Badge alt="JavaScript" src="https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=JavaScript" />
          <Badge alt="TypeScript" src="https://img.shields.io/badge/TypeScript%20-%20black?style=for-the-badge&logo=typescript" />
          <Badge alt="Python" src="https://img.shields.io/badge/Python-black?style=for-the-badge&logo=Python" />
        </TechGroup>

        <TechGroup title={t('frameworks')}>
          <Badge alt="React" src="https://img.shields.io/badge/React%20-%20black?style=for-the-badge&logo=react" />
          <Badge alt="Next.js" src="https://img.shields.io/badge/next.js-black?style=for-the-badge&logo=nextdotjs&logoColor=white" />
          <Badge alt="Node.js" src="https://img.shields.io/badge/Node.js-black?style=for-the-badge&logo=Node.js" />
          <Badge alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-black?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC" />
        </TechGroup>

        <TechGroup title={t('databaseManagement')}>
          <Badge alt="MySQL" src="https://img.shields.io/badge/Mysql-black?style=for-the-badge&logo=Mysql" />
          <Badge alt="MariaDB" src="https://img.shields.io/badge/MariaDB-black?style=for-the-badge&logo=MariaDB" />
        </TechGroup>

        <TechGroup title={t('ai')}>
          <Badge alt="ChatGPT" src="https://custom-icon-badges.demolab.com/badge/ChatGPT-black?style=for-the-badge&logo=Chatgpt" />
          <Badge alt="Claude" src="https://custom-icon-badges.demolab.com/badge/Claude-black?style=for-the-badge&logo=claude" />
          <Badge alt="Firebase Studio" src="https://custom-icon-badges.demolab.com/badge/Firebase Studio-black?style=for-the-badge&logo=firebase-studio&logoColor=red" />
          <Badge alt="Gemini" src="https://custom-icon-badges.demolab.com/badge/Gemini-black?style=for-the-badge&logo=gemini" />
        </TechGroup>
        
        <div className="md:col-span-2">
          <TechGroup title={t('otherTools')}>
            <Badge alt="Linux" src="https://img.shields.io/badge/Linux-black?style=for-the-badge&logo=linux" />
            <Badge alt="VSCode" src="https://custom-icon-badges.demolab.com/badge/VSCode-black?style=for-the-badge&logo=VSCode" />
            <Badge alt="Git" src="https://img.shields.io/badge/Git-black?style=for-the-badge&logo=Git" />
            <Badge alt="Netlify" src="https://custom-icon-badges.demolab.com/badge/Netlify-black?style=for-the-badge&logo=netlify" />
			<Badge alt="Vercel" src="https://custom-icon-badges.demolab.com/badge/Vercel-black?style=for-the-badge&logo=vercel" />
          </TechGroup>
        </div>
      </div>
    </section>
  );
}
