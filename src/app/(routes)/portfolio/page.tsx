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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Work</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover how we&apos;ve helped Gunnison Valley businesses thrive in the digital landscape through custom solutions and local expertise.
          </p>
        </div>
      </FadeIn>

      {/* Filter Tabs */}
      <FadeIn className="mb-16">
        <div className="flex flex-wrap justify-center gap-3">
          {['All Projects', 'Web Development', 'E-commerce', 'Booking Systems', 'Digital Marketing'].map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? 'default' : 'outline'}
              className={`rounded-full px-6 ${index === 0 ? 'bg-slate-900 hover:bg-slate-800' : 'hover:bg-slate-100'}`}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </FadeIn>

      {/* Case Studies Grid */}
      <FadeInStagger className="grid lg:grid-cols-2 gap-8 mb-32">
        {projects.map((project) => (
          <FadeInStaggerItem key={project.slug}>
            <CaseStudyCard {...project} href={`/portfolio/${project.slug}`} />
          </FadeInStaggerItem>
        ))}
      </FadeInStagger>

      {/* Client Testimonials */}
      <FadeIn className="mb-32">
        <div className="relative overflow-hidden bg-slate-50 rounded-3xl p-8 md:p-16 isolate border border-slate-100 shadow-sm">
          {/* Background Gradients */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10" />

          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter(project => project.testimonial)
              .map((project) => (
                <div key={project.slug} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-14 h-14 flex-shrink-0">
                      <Image
                        src={project.testimonial!.avatar}
                        alt={project.testimonial!.name}
                        fill
                        className="object-cover rounded-full border-2 border-slate-100"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{project.testimonial!.name}</h3>
                      <p className="text-slate-500 text-sm">{project.testimonial!.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-slate-600 italic mb-6 flex-grow leading-relaxed">
                    &quot;{project.testimonial!.quote}&quot;
                  </blockquote>
                  <div className="text-sm font-semibold text-teal-600 bg-teal-50 px-4 py-2 rounded-full w-fit">
                    {project.impact}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </FadeIn>

      {/* CTA Section */}
      <FadeIn>
        <div className="bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />

          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg relative z-10">
            Join the growing list of successful Crested Butte businesses that have elevated their digital presence with our solutions.
          </p>
          <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-gray-100 relative z-10">
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}
