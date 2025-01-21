'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  shortDescription: string;
  features: string[];
  fullDescription: string;
}

export function ServiceCard({
  title,
  icon,
  href,
  shortDescription,
  features,
  fullDescription,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative bg-white rounded-xl shadow-sm overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6 cursor-pointer">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{shortDescription}</p>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <p className="text-gray-700">{fullDescription}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {features.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4">
          <Link 
            href={href} 
            className="inline-flex items-center text-primary hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            Learn more 
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
