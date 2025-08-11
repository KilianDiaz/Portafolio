'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Calendar, ExternalLink, Globe, Github } from 'lucide-react';
import type { Repository } from '@/types';
import { useI18n } from '@/hooks/use-i18n';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface ProjectCardProps {
  repo: Repository;
}

export function ProjectCard({ repo }: ProjectCardProps) {
  const { t, locale } = useI18n();
  const updatedDate = new Date(repo.updated_at).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US');

  return (
    <Card className="flex h-full transform flex-col bg-card transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-xl text-primary">
            <Github className="h-5 w-5" />
            {repo.name}
        </CardTitle>
        <CardDescription>{repo.description || t('noDescription')}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="secondary">{repo.language || t('noLanguage')}</Badge>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{t('updated')}: {updatedDate}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Star className="h-4 w-4" />
          <span>{repo.stargazers_count} {t('stars')}</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild variant="outline" className="flex-1">
          <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {t('viewOnGithub')} <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        {repo.homepage && (
            <Button asChild variant="secondary" className="flex-1">
                <Link href={repo.homepage} target="_blank" rel="noopener noreferrer">
                    {t('demo')} <Globe className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        )}
      </CardFooter>
    </Card>
  );
}
