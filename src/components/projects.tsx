'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { Repository } from '@/types';
import { ProjectCard } from './project-card';
import { useI18n } from '@/hooks/use-i18n';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const GITHUB_USERNAME = 'KilianDiaz';
const PROJECTS_PER_SLIDE = 3;
const AUTOPLAY_INTERVAL = 15000; // 15 seconds

export function Projects() {
  const { t } = useI18n();
  const [allRepos, setAllRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        // The 'sort' parameter isn't reliable for user repos endpoint, so we fetch and sort client-side.
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch projects from GitHub.');
        }
        const data: Repository[] = await response.json();
        const filteredAndSortedRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setAllRepos(filteredAndSortedRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const totalSlides = Math.ceil(allRepos.length / PROJECTS_PER_SLIDE);

  const nextSlide = useCallback(() => {
    if (totalSlides > 1) {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }
  }, [totalSlides]);

  const prevSlide = () => {
    if (totalSlides > 1) {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };
  
  const startAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
    autoplayIntervalRef.current = setInterval(nextSlide, AUTOPLAY_INTERVAL);
  }, [nextSlide]);

  const stopAutoplay = () => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
  };

  useEffect(() => {
    if (totalSlides > 1) {
      startAutoplay();
    }
    return () => stopAutoplay();
  }, [totalSlides, startAutoplay]);


  const displayedRepos = allRepos.slice(
    currentSlide * PROJECTS_PER_SLIDE,
    (currentSlide + 1) * PROJECTS_PER_SLIDE
  );

  return (
    <section id="projects" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
      <div className="mb-12 text-center">
        <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">{t('projectsTitle')}</h2>
        <p className="mt-2 text-lg text-muted-foreground">{t('projectsSubtitle')}</p>
      </div>

      {loading && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <Skeleton className="h-[200px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
         <Alert variant="destructive">
           <AlertCircle className="h-4 w-4" />
           <AlertTitle>Error</AlertTitle>
           <AlertDescription>{error}</AlertDescription>
         </Alert>
      )}

      {!loading && !error && allRepos.length > 0 && (
        <div className="relative">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayedRepos.map((repo) => (
               <div key={repo.id} className="p-1 h-full">
                <ProjectCard repo={repo} />
               </div>
            ))}
          </div>

          {totalSlides > 1 && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button onClick={prevSlide} variant="outline" size="icon">
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <span className="font-mono text-lg text-muted-foreground">
                {currentSlide + 1} / {totalSlides}
              </span>
              <Button onClick={nextSlide} variant="outline" size="icon">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
