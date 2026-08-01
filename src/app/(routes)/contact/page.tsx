import { Mail, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/forms/contact-form';

export default function ContactPage() {
  return (
    <div className="bg-[#f6f8f6] py-20 sm:py-28">
      <div className="site-container grid gap-14 lg:grid-cols-12">
        <section className="lg:col-span-5">
          <p className="field-label mb-6">Start a project</p>
          <h1 className="display-title">Tell me what needs to work better.</h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-foreground/68">A rough idea is enough. Share the business problem, what you&apos;ve tried, and what a useful result would change. I&apos;ll respond within one business day.</p>

          <div className="mt-12 divide-y divide-foreground/20 border-y border-foreground/20">
            <a href="mailto:eric@crestcodecreative.com" className="flex items-center gap-4 py-5"><Mail className="h-5 w-5 text-accent" /><span><span className="field-label block">Email</span><span className="mt-1 block font-semibold">eric@crestcodecreative.com</span></span></a>
            <div className="flex items-center gap-4 py-5"><MapPin className="h-5 w-5 text-accent" /><span><span className="field-label block">Based in</span><span className="mt-1 block font-semibold">Gunnison Valley, Colorado</span></span></div>
          </div>

          <div className="mt-12 border-t border-foreground/20 pt-5"><p className="field-label mb-4">A good first note includes</p><ul className="space-y-2 text-sm leading-6 text-foreground/60"><li>— The problem or opportunity</li><li>— Who the product needs to serve</li><li>— Any important timing or budget context</li><li>— What already exists, if anything</li></ul></div>
        </section>

        <section className="bg-white p-6 sm:p-10 lg:col-span-6 lg:col-start-7 lg:p-12" aria-labelledby="contact-form-title">
          <div className="mb-9 border-b border-foreground/20 pb-6"><p className="field-label mb-3">Project inquiry</p><h2 id="contact-form-title" className="text-3xl font-semibold tracking-[-0.03em]">Start with the essentials.</h2></div>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
