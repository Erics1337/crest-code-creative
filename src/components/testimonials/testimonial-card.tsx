interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

import Image from 'next/image';

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  image,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <div className="mb-6">
        <svg
          className="h-10 w-10 text-primary/30"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <blockquote className="flex-1 mb-6">
        <p className="text-lg text-gray-700 leading-relaxed relative z-10">&quot;{quote}&quot;</p>
      </blockquote>
      <footer className="flex items-center gap-3 pt-6 border-t border-gray-100">
        {image ? (
          <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={image}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-bold text-gray-900">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </footer>
    </div>
  );
}
