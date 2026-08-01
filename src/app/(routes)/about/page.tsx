import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Eric & Crest Code Creative',
  description: 'A hands-on digital product partner bringing broad technical experience and local understanding to the Gunnison Valley and beyond.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[#f6f8f6] py-20 sm:py-28">
        <div className="site-container grid gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="field-label mb-6">About the studio</p>
            <h1 className="display-title">Product experience with mountain-town proximity.</h1>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="font-editorial text-2xl leading-relaxed text-foreground/80">Crest Code is Eric Swanson: one senior partner, a practical network, and direct accountability from first conversation to launch.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#dce7e8]">
              <Image src="/linkedin-profile.jpeg" alt="Eric Swanson, founder of Crest Code Creative" fill priority className="object-cover" />
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-foreground/20 pt-4 text-sm text-foreground/55"><span>Eric Swanson · Founder & developer</span><span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Gunnison Valley</span></div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="field-label mb-6">The path here</p>
            <h2 className="section-title">Technology that stays connected to place and people.</h2>
            <div className="mt-8 space-y-6 text-lg leading-8 text-foreground/68">
              <p>My connection to the Gunnison Valley began in 2015 through work at Crested Butte Mountain Resort, Gunnison Valley Health, local businesses, and eventually Computer Science at Western Colorado University.</p>
              <p>After building experience with larger technology companies and remote product teams, I brought that perspective back home. Crest Code exists to make sophisticated digital work more direct, understandable, and useful for the businesses and teams behind it.</p>
              <p>The studio stays intentionally small. Clients work with the person making the product decisions and writing the code—without layers of account management or anonymous handoffs.</p>
            </div>
            <a href="https://www.ericsdevportfolio.com" target="_blank" rel="noopener noreferrer" className="link-arrow mt-7 text-sm">View Eric&apos;s developer portfolio <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section className="bg-[#151a19] py-24 text-white sm:py-32">
        <div className="site-container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">How Crest Code works</p><h2 className="mt-6 text-4xl font-semibold leading-none tracking-[-0.03em] text-white">Senior craft.<br />Small footprint.</h2></div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {[['Plainspoken', 'Complex technology should become easier to understand as the work progresses, not more mysterious.'], ['Accountable', 'The person in the room is the person making and standing behind the work.'], ['Resourceful', 'Use the right tool and the smallest dependable system—not novelty for its own sake.'], ['Long-view', 'Build foundations clients can operate, extend, and trust after launch.']].map(([title, body]) => (
              <div key={title} className="border-t border-white/25 pt-5"><h3 className="text-xl font-semibold text-white">{title}</h3><p className="mt-3 leading-7 text-white/65">{body}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#dce7e8] py-20 sm:py-24">
        <div className="site-container flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><p className="field-label mb-4">Work together</p><h2 className="max-w-3xl text-4xl font-semibold leading-[0.96] tracking-[-0.035em] sm:text-5xl">A local conversation can lead to a very capable product.</h2></div><Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-foreground px-6 font-semibold text-background">Start a conversation <ArrowUpRight className="h-5 w-5" /></Link></div>
      </section>
    </div>
  );
}
