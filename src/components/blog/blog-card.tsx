import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
  coverImage?: string;
  readingTime?: string;
  tags?: string[];
}

export function BlogCard({ title, description, date, slug, coverImage = '/images/blog/n8n-automation-hub.png', readingTime, tags = [] }: BlogCardProps) {
  return (
    <article className="group border-t border-foreground/20 pt-4">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#dce7e8]">
          <Image
            src={coverImage}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
          />
        </div>
        <div className="mt-5 flex items-center justify-between gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-foreground/50">
          <time dateTime={date}>{formatDate(date)}</time><span>{readingTime || tags[0] || 'Field note'}</span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.03em] transition-colors group-hover:text-accent">{title}</h3>
        <p className="mt-3 line-clamp-3 leading-7 text-foreground/62">{description}</p>
        <span className="link-arrow mt-4 text-sm">Read note <ArrowUpRight className="h-4 w-4" /></span>
      </Link>
    </article>
  );
}
