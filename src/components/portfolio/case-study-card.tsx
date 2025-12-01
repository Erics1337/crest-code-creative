import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

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
    <Link 
      href={href}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 block"
    >
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-medium flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Case Study <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
      <div className="p-8">
        <div className="flex items-center gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">{title}</h3>
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

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
