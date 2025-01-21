'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface AnimatedProjectBoxProps {
  children?: React.ReactNode;
  variant?: 'website' | 'project';
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  urlText?: string;
}

export const AnimatedProjectBox = ({ 
  children, 
  variant = 'website',
  imageSrc,
  imageAlt,
  className = '',
  urlText = 'crestcodecreative.com'
}: AnimatedProjectBoxProps) => {
  const styles = {
    website: {
      width: '350px',
      height: '900px',
      marginLeft: '4rem'
    },
    project: {
      width: '100%',
      height: '500px',
      margin: '0'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className={`hidden lg:block ${className}`}
      style={{ ...styles[variant], position: 'relative', zIndex: 20 }}
    >
      <div className="relative w-full h-full bg-gray-50 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-4 overflow-hidden">
        {variant === 'website' && (
          <div className="absolute top-0 left-0 right-0 h-12 bg-gray-100 rounded-t-[2rem] border-b border-gray-200 flex items-center px-4 gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="ml-4 flex-1 bg-white h-6 rounded-full flex items-center px-4">
              <span className="text-xs text-gray-400">{urlText}</span>
            </div>
          </div>
        )}
        <div className={`relative w-full h-full ${variant === 'website' ? 'pt-12 mt-8' : ''} rounded-sm`}>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt || 'Website Preview'}
              fill
              className="object-contain object-top rounded-2xl"
              sizes={variant === 'website' ? "(min-width: 1024px) 450px, 0px" : "100vw"}
            />
          ) : children}
        </div>
      </div>
    </motion.div>
  );
};
