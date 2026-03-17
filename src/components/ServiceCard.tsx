'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  index?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  index = 0,
}: ServiceCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow border border-gray-100"
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary-light/10 text-primary-light mb-5 group-hover:bg-primary-light group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-heading text-text-primary mb-3">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
