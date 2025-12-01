'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/crest-logo.png"
                alt="Crest Code Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <h3 className="ml-2 text-lg font-bold text-primary font-display">Crest Code</h3>
            </div>
            <p className="text-sm text-gray-600">
              Crafting websites that inspire and perform in The Gunnison Valley, Colorado.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">erics1337@gmail.com</p>
              <p className="text-sm text-gray-600">Crested Butte, CO</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#web-design" className="text-sm text-gray-600 hover:text-primary">
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link href="/services#software" className="text-sm text-gray-600 hover:text-primary">
                  Full-Stack Software Development
                </Link>
              </li>
              <li>
                <Link href="/services#mobile" className="text-sm text-gray-600 hover:text-primary">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services#custom" className="text-sm text-gray-600 hover:text-primary">
                  Custom Web Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-gray-600 hover:text-primary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-semibold">Ready to get started?</h4>
            <p className="text-sm text-gray-600">
              We&apos;re here to help bring your vision to life.
            </p>
            <Button asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Crest Code. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
