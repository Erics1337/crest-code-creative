'use client';

import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ui/motion';
import { PortfolioCard } from '@/components/portfolio/portfolio-card';
import { AnimatedProjectBox } from '@/components/AnimatedProjectBox';
import { Project } from '@/lib/types';
import Link from 'next/link';

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of our recent work crafted for clients in The Gunnison Valley and beyond.
            Each project represents our commitment to excellence in design and development.
          </p>
        </div>
      </FadeIn>

      <FadeInStagger>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <FadeInStaggerItem key={project.slug}>
              <AnimatedProjectBox variant="project">
                <PortfolioCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  tags={project.technologies}
                  href={`/portfolio/${project.slug}`}
                />
              </AnimatedProjectBox>
            </FadeInStaggerItem>
          ))}
        </div>
      </FadeInStagger>

      <FadeIn>
        <div className="text-center mt-12">
        <Link href="/portfolio" className="inline-flex items-center text-primary hover:underline">

        
            View all projects
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
