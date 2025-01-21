import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project } from './types';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getFeaturedProjects(): Project[] {
  const fileNames = readdirSync(projectsDirectory);
  const allProjects = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      technologies: data.technologies || [],
      date: data.date,
      clientName: data.clientName,
      industry: data.industry,
      challenge: data.challenge,
      solution: data.solution,
      impact: data.impact,
      testimonial: data.testimonial,
    };
  });

  // Sort by date
  return allProjects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
