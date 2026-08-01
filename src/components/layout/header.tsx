'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Work', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Field Notes', href: '/blog' },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/15 bg-background/95">
      <nav className="site-container flex h-[72px] items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <Image src="/crest-logo.png" alt="" width={40} height={40} className="h-9 w-auto" priority />
          <span className="leading-none">
            <span className="block text-sm font-bold tracking-[-0.02em] sm:text-base">Crest Code Creative</span>
            <span className="mt-1 hidden text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-foreground/50 sm:block">
              Gunnison Valley · Colorado
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-4 py-3 text-sm font-semibold text-foreground/65 transition-colors hover:text-foreground',
                  isActive && 'text-foreground after:absolute after:inset-x-4 after:bottom-1 after:h-px after:bg-accent'
                )}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-3 inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 hover:bg-secondary"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/25 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-foreground/15 bg-background md:hidden">
          <div className="site-container py-8">
            <div className="grid gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-foreground/15 py-4 text-3xl font-semibold tracking-[-0.03em]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-between rounded-full bg-foreground px-6 font-semibold text-background"
              onClick={() => setIsMenuOpen(false)}
            >
              Start a project <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
