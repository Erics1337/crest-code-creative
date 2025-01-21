import { Button } from '@/components/ui/button';
import { CaseStudyCard } from '@/components/portfolio/case-study-card';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ui/motion';
import Image from 'next/image';
import { getProjects } from '@/lib/projects';

export default async function PortfolioPage() {
  const projects = await getProjects();
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-4">Featured Work</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover how we&apos;ve helped Gunnison Valley businesses thrive in the digital landscape through custom solutions and local expertise.
        </p>
      </FadeIn>

      {/* Filter Tabs */}
      <FadeIn className="mb-12">
        <div className="flex flex-wrap gap-4">
          {['All Projects', 'Web Development', 'E-commerce', 'Booking Systems', 'Digital Marketing'].map((category) => (
            <Button
              key={category}
              variant="outline"
              className="rounded-full"
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </FadeIn>

      {/* Case Studies Grid */}
      <FadeInStagger className="grid lg:grid-cols-2 gap-8 mb-20">
        {projects.map((project) => (
          <FadeInStaggerItem key={project.slug}>
            <CaseStudyCard {...project} href={`/portfolio/${project.slug}`} />
          </FadeInStaggerItem>
        ))}
      </FadeInStagger>

      {/* Client Testimonials */}
      <FadeIn>
        <div className="bg-primary/5 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter(project => project.testimonial)
              .map((project) => (
                <div key={project.slug} className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={project.testimonial!.avatar}
                        alt={project.testimonial!.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{project.testimonial!.name}</h3>
                      <p className="text-gray-600 text-sm">{project.testimonial!.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic mb-4">
                    &quot;{project.testimonial!.quote}&quot;
                  </blockquote>
                  <div className="text-sm text-primary font-medium">
                    {project.impact}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </FadeIn>

      {/* CTA Section */}
      <FadeIn>
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the growing list of successful Crested Butte businesses that have elevated their digital presence with our solutions.
          </p>
          <Button asChild size="lg">
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}
