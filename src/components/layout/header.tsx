'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Work', href: '/portfolio' },
  {
    name: 'Services',
    href: '/services',
    items: [
      { name: 'Web design', detail: 'Sites that work hard', href: '/services/web-design' },
      { name: 'Software', detail: 'Useful custom systems', href: '/services/software-development' },
      { name: 'Mobile apps', detail: 'Products for the field', href: '/services/mobile-apps' },
      { name: 'Automations', detail: 'n8n workflows that hold up', href: '/services/n8n-automations' },
    ],
  },
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
            if (item.items) {
              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    aria-haspopup="menu"
                    className={cn(
                      'relative inline-flex items-center gap-1 rounded-full px-4 py-3 text-sm font-semibold text-foreground/65 transition-colors hover:bg-[#dce7e8] hover:text-foreground focus-visible:bg-[#dce7e8]',
                      isActive && 'text-foreground after:absolute after:inset-x-4 after:bottom-1 after:h-px after:bg-accent'
                    )}
                  >
                    {item.name}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-0 top-[calc(100%+0.35rem)] z-50 w-72 border border-foreground/15 bg-white p-2 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div role="menu" aria-label="Services">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          role="menuitem"
                          className="group/item block px-4 py-3 transition-colors hover:bg-[#dce7e8] focus-visible:bg-[#dce7e8]"
                        >
                          <span className="flex items-center justify-between gap-4 text-sm font-semibold text-foreground">
                            {subItem.name}<ArrowUpRight className="h-4 w-4 text-accent opacity-0 transition-opacity group-hover/item:opacity-100" />
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-foreground/55">{subItem.detail}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative rounded-full px-4 py-3 text-sm font-semibold text-foreground/65 transition-colors hover:bg-[#dce7e8] hover:text-foreground focus-visible:bg-[#dce7e8]',
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
                <div key={item.href} className="border-b border-foreground/15 py-4">
                  <Link
                    href={item.href}
                    className="text-3xl font-semibold tracking-[-0.03em]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.items && (
                    <div className="mt-4 grid gap-2 border-l border-foreground/20 pl-4">
                      {item.items.map((subItem) => (
                        <Link key={subItem.href} href={subItem.href} className="text-sm font-semibold text-foreground/65" onClick={() => setIsMenuOpen(false)}>{subItem.name}</Link>
                      ))}
                    </div>
                  )}
                </div>
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
