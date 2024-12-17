import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  href: string;
}

export function PortfolioCard({
  title,
  description,
  imageUrl,
  tags,
  href,
}: PortfolioCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button variant="outline" asChild>
          <Link href={href}>View Project</Link>
        </Button>
      </div>
    </div>
  );
}
