import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const footerLinks = [
  { label: 'Selected work', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'About Eric', href: '/about' },
  { label: 'Field Notes', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-[#151a19] text-white">
      <div className="site-container py-16 sm:py-20">
        <div className="grid gap-14 border-b border-white/20 pb-16 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">Have something useful to build?</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.035em] sm:text-6xl">
              Bring the problem. We&apos;ll shape the product together.
            </h2>
            <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 font-semibold text-[#151a19] transition-transform hover:-translate-y-0.5">
              Start a project <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:justify-self-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">Navigate</p>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">Base camp</p>
              <p className="text-sm leading-6 text-white/75">Crested Butte<br />Gunnison Valley<br />Colorado</p>
              <a href="mailto:eric@crestcodecreative.com" className="mt-5 block text-sm text-white underline underline-offset-4">eric@crestcodecreative.com</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/crest-logo.png" alt="" width={32} height={32} className="brightness-0 invert" />
            <span>© {new Date().getFullYear()} Crest Code Creative</span>
          </div>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/yoga-flow/privacy" className="hover:text-white">Yoga Flow privacy</Link>
            <Link href="/yoga-flow/terms" className="hover:text-white">Yoga Flow terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
