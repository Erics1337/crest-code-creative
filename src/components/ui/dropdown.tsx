'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface DropdownProps {
  trigger: string;
  href?: string;
  children: React.ReactNode;
}

export function Dropdown({ trigger, href, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center">
        {href ? (
          <Link
            href={href}
            className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            {trigger}
          </Link>
        ) : (
          <span className="text-gray-600 px-3 py-2 text-sm font-medium">
            {trigger}
          </span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 hover:text-primary transition-colors"
          aria-label="Toggle dropdown menu"
        >
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

interface DropdownItemProps {
  href: string;
  children: React.ReactNode;
}

export function DropdownItem({ href, children }: DropdownItemProps) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
      role="menuitem"
    >
      {children}
    </Link>
  );
}
