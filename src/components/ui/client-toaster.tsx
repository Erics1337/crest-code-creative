'use client';

import dynamic from 'next/dynamic';

const Toaster = dynamic(
  () => import('./toaster').then((mod) => mod.Toaster),
  { ssr: false }
);

export { Toaster };
