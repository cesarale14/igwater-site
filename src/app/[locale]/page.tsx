'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Droplets,
  FlaskConical,
  Wrench,
  Factory,
  Globe,
  Droplet,
  Settings,
  Phone,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import ServiceCard from '@/components/ServiceCard';
import ProductCard from '@/components/ProductCard';
import ScrollReveal from '@/components/ScrollReveal';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' as const },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const products = [
  {
    image: '/images/products/general/tank-banner.png',
    titleKey: 'products.frpTanks.title',
    descKey: 'products.frpTanks.description',
    href: '/parts#tanks',
  },
  {
    image: '/images/products/tanks/residential-ro.png',
    titleKey: 'products.reverseOsmosis.title',
    descKey: 'products.reverseOsmosis.description',
    href: '/parts#tanks',
  },
  {
    image: '/images/products/tanks/commercial-media-filters.jpg',
    titleKey: 'products.ozoneGenerators.title',
    descKey: 'products.ozoneGenerators.description',
    href: '/parts#general',
  },
  {
    image: '/images/products/valves/clack-control.png',
    titleKey: 'products.controlValves.title',
    descKey: 'products.controlValves.description',
    href: '/parts#valves',
  },
  {
    image: '/images/products/minerals/activated-carbon.png',
    titleKey: 'products.filtrationMinerals.title',
    descKey: 'products.filtrationMinerals.description',
    href: '/parts#minerals',
  },
];

const whyChooseUsIcons = [Factory, Globe, Droplet, Settings];

export default function HomePage() {
  const t = useTranslations('home');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#0F172A' }}
      >
        {/* Water ripple pseudo-effect layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07]"
            style={{
              top: '20%',
              left: '10%',
              background:
                'radial-gradient(circle, #0EA5E9 0%, transparent 70%)',
              animation: 'ripple 8s ease-in-out infinite',
            }}
          />
          <div
            className="absolute w-[800px] h-[800px] rounded-full opacity-[0.05]"
            style={{
              bottom: '-10%',
              right: '-5%',
              background:
                'radial-gradient(circle, #14B8A6 0%, transparent 70%)',
              animation: 'ripple 10s ease-in-out infinite 2s',
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full opacity-[0.06]"
            style={{
              top: '50%',
              left: '55%',
              background:
                'radial-gradient(circle, #0EA5E9 0%, transparent 70%)',
              animation: 'ripple 7s ease-in-out infinite 4s',
            }}
          />
        </div>

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-sky-400 font-medium tracking-widest uppercase text-sm mb-4"
            >
              {t('hero.tagline')}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-heading leading-tight"
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-xl transition-colors text-lg shadow-lg shadow-amber-500/25"
              >
                {t('hero.ctaPrimary')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-xl transition-colors text-lg"
              >
                {t('hero.ctaSecondary')}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-8 flex items-center justify-center gap-2 text-gray-400"
            >
              <Phone className="w-4 h-4" />
              <a
                href="tel:+13057091000"
                className="hover:text-white transition-colors"
              >
                {t('hero.phone')}
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />

        {/* Ripple keyframes */}
        <style jsx>{`
          @keyframes ripple {
            0%,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.3);
            }
          }
        `}</style>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="relative bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { target: 20, suffix: '+', labelKey: 'stats.years' },
              { target: 1000, suffix: '+', labelKey: 'stats.systems' },
              { target: 3, suffix: '', labelKey: 'stats.continents' },
              { target: 100, suffix: '%', labelKey: 'stats.custom' },
            ].map((stat, i) => (
              <ScrollReveal key={stat.labelKey} delay={i * 0.1}>
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-5xl font-bold font-heading text-sky-600">
                    <AnimatedCounter
                      target={stat.target}
                      suffix={stat.suffix}
                    />
                  </span>
                  <span className="mt-2 text-gray-600 font-medium text-sm uppercase tracking-wide">
                    {t(stat.labelKey)}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sky-600 font-semibold uppercase tracking-widest text-sm mb-3">
                {t('services.tagline')}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
                {t('services.title')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Droplets className="w-7 h-7" />}
              title={t('services.waterTreatment.title')}
              description={t('services.waterTreatment.description')}
              href="/services"
              index={0}
            />
            <ServiceCard
              icon={<FlaskConical className="w-7 h-7" />}
              title={t('services.waterTesting.title')}
              description={t('services.waterTesting.description')}
              href="/water-testing"
              index={1}
            />
            <ServiceCard
              icon={<Wrench className="w-7 h-7" />}
              title={t('services.partsService.title')}
              description={t('services.partsService.description')}
              href="/parts"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS SHOWCASE ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-sky-600 font-semibold uppercase tracking-widest text-sm mb-3">
                  {t('products.tagline')}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
                  {t('products.title')}
                </h2>
              </div>
              <Link
                href="/parts"
                className="hidden md:inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 font-semibold transition-colors"
              >
                {t('products.viewAll')}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
            {products.map((product) => (
              <div
                key={product.titleKey}
                className="min-w-[280px] md:min-w-[300px] snap-start flex-shrink-0"
              >
                <ProductCard
                  image={product.image}
                  title={t(product.titleKey)}
                  description={t(product.descKey)}
                  href={product.href}
                />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/parts"
              className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 font-semibold transition-colors"
            >
              {t('products.viewAll')}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sky-600 font-semibold uppercase tracking-widest text-sm mb-3">
                {t('whyUs.tagline')}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
                {t('whyUs.title')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-8">
            {[0, 1, 2, 3].map((i) => {
              const Icon = whyChooseUsIcons[i];
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex gap-5 p-6 rounded-2xl bg-gray-50 hover:bg-sky-50/50 transition-colors border border-gray-100">
                    <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-sky-100 text-sky-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-gray-900 mb-2">
                        {t(`whyUs.features.${i}.title`)}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t(`whyUs.features.${i}.description`)}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="py-24" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="relative">
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-sky-500/20 font-serif leading-none select-none">
                &ldquo;
              </span>
              <blockquote className="relative z-10 text-xl md:text-2xl text-gray-200 leading-relaxed italic font-light">
                {t('testimonial.quote')}
              </blockquote>
              <div className="mt-8">
                <p className="text-white font-bold font-heading text-lg">
                  {t('testimonial.author')}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {t('testimonial.role')}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-teal-700">
        {/* Wave pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="absolute bottom-0 w-full"
            viewBox="0 0 1440 200"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C360,160 720,40 1080,100 C1260,130 1380,80 1440,100 L1440,200 L0,200 Z"
              fill="white"
            />
          </svg>
          <svg
            className="absolute top-0 w-full rotate-180"
            viewBox="0 0 1440 200"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C360,160 720,40 1080,100 C1260,130 1380,80 1440,100 L1440,200 L0,200 Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight">
              {t('cta.title')}
            </h2>
            <p className="mt-4 text-lg text-sky-100 max-w-xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-xl transition-colors text-lg shadow-lg shadow-black/20"
              >
                {t('cta.button')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
