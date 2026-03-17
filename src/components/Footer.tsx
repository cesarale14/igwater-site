'use client';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Facebook, Youtube, Instagram, Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import WaveDivider from './WaveDivider';
import LanguageSwitcher from './LanguageSwitcher';

const quickLinks = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/services', key: 'services' },
  { href: '/parts', key: 'parts' },
  { href: '/water-testing', key: 'waterTesting' },
  { href: '/contact', key: 'contact' },
] as const;

const serviceKeys = [
  'waterTreatment',
  'waterTesting',
  'partsComponents',
  'maintenance',
] as const;

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      <WaveDivider color="#0F172A" />

      <div className="bg-dark-navy text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Company */}
            <div>
              <Link href="/" className="flex items-center gap-2.5 mb-4">
                <Image
                  src="/images/logo/logo-512.png"
                  alt="IG Water"
                  width={40}
                  height={40}
                />
                <span className="text-lg font-bold font-heading">
                  IG Water
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {t('tagline')}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-primary-light hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-primary-light hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-primary-light hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-200">
                {t('quickLinks')}
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-light text-sm transition-colors"
                    >
                      {nav(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-200">
                {t('services')}
              </h3>
              <ul className="space-y-2.5">
                {serviceKeys.map((key) => (
                  <li key={key}>
                    <span className="text-gray-400 text-sm">
                      {t(`serviceList.${key}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-200">
                {t('contactTitle')}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+14077455002"
                    className="flex items-start gap-2.5 text-gray-400 hover:text-primary-light text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                    +1 407-745-5002
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@igwatertreatments.com"
                    className="flex items-start gap-2.5 text-gray-400 hover:text-primary-light text-sm transition-colors"
                  >
                    <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                    info@igwatertreatments.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/19412660179"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 text-gray-400 hover:text-primary-light text-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    +1 941-266-0179
                  </a>
                </li>
                <li>
                  <span className="flex items-start gap-2.5 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                    {t('address')}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-xs">
              &copy; {year} IG Water Treatments. {t('rights')}
            </p>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
