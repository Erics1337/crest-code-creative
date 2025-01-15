import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
}

export function CaseStudyCard({
  title,
  clientName,
  industry,
  challenge,
  solution,
  impact,
  imageUrl,
  technologies,
  href,
}: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-8">
        <div className="flex items-center gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-gray-600">{clientName} • {industry}</p>
          </div>
        </div>
        
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-semibold text-primary mb-2">The Challenge</h4>
            <p className="text-gray-600">{challenge}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2">Our Solution</h4>
            <p className="text-gray-600">{solution}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2">Impact</h4>
            <p className="text-gray-600">{impact}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <Button asChild>
          <Link href={href}>View Full Case Study</Link>
        </Button>
      </div>
    </div>
  );
}
