'use client'

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from './skeleton';

export function ImageWithSkeleton({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  [key: string]: string | number | boolean | undefined;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <Skeleton
          className={cn(
            'absolute inset-0 bg-muted',
            className
          )}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}
