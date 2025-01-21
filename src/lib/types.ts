export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  slug: string;
  date: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  impact: string;
  testimonial?: {
    name: string;
    role: string;
    quote: string;
  };
}
