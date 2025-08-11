import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Introduction } from '@/components/introduction';
import { Projects } from '@/components/projects';
import { TechStack } from '@/components/tech-stack';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="container mx-auto flex-grow px-4 py-12">
        <div className="space-y-16 md:space-y-24">
          <Introduction />
          <TechStack />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}
