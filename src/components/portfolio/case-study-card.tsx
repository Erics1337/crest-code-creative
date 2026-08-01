import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CaseStudyCardProps {
  title: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  impact: string;
  imageUrl: string;
  technologies: string[];
  href: string;
  index?: number;
  featured?: boolean;
}

export function CaseStudyCard({
  title,
  clientName,
  industry,
  impact,
  imageUrl,
  technologies,
  href,
  index = 0,
  featured = false,
}: CaseStudyCardProps) {
  const shortTitle = title.split(' – ')[0].split(' — ')[0];

  return (
    <article className={cn('group border-t border-foreground/25 pt-4', featured && 'lg:grid lg:grid-cols-12 lg:gap-8')}>
      <Link
        href={href}
        className={cn('relative block overflow-hidden rounded-sm bg-[#dbe7e8]', featured ? 'lg:col-span-8' : '')}
        aria-label={`View ${shortTitle} case study`}
      >
        <div className={cn('relative', featured ? 'aspect-[16/10]' : index % 3 === 1 ? 'aspect-[4/5]' : 'aspect-[4/3]')}>
          <Image
            src={imageUrl}
            alt={`${shortTitle} project`}
            fill
            sizes={featured ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 1024px) 45vw, 100vw'}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
        </div>
        <span className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </Link>

      <div className={cn('mt-5', featured && 'lg:col-span-4 lg:mt-0 lg:flex lg:flex-col lg:justify-between')}>
        <div>
          <div className="mb-4 flex items-center justify-between gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-foreground/55">
            <span>{String(index + 1).padStart(2, '0')} · {industry}</span>
            <span>{clientName}</span>
          </div>
          <h3 className={cn('font-semibold tracking-[-0.035em]', featured ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl')}>
            <Link href={href} className="transition-colors hover:text-accent">{shortTitle}</Link>
          </h3>
          <p className="mt-4 max-w-xl text-base leading-7 text-foreground/70 sm:text-lg">{impact}</p>
        </div>

        <div className="mt-6">
          <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-foreground/15 pt-4 text-xs text-foreground/55">
            {technologies.slice(0, featured ? 6 : 4).map((tech) => <span key={tech}>{tech}</span>)}
          </div>
          <Link href={href} className="link-arrow mt-4 text-sm">Read case study <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </article>
  );
}
