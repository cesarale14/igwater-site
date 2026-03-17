import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/HeroSection';
import ScrollReveal from '@/components/ScrollReveal';
import { Link } from '@/i18n/navigation';
import {
  Factory,
  Globe,
  Droplets,
  SlidersHorizontal,
} from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.about' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'about' });

  const pillarIcons = [Factory, Globe, Droplets, SlidersHorizontal];
  const pillarColors = [
    { bg: 'bg-sky-100', icon: 'text-sky-700', ring: 'ring-sky-200' },
    { bg: 'bg-teal-100', icon: 'text-teal-700', ring: 'ring-teal-200' },
    { bg: 'bg-cyan-100', icon: 'text-cyan-700', ring: 'ring-cyan-200' },
    { bg: 'bg-amber-100', icon: 'text-amber-700', ring: 'ring-amber-200' },
  ];
  const pillars = [
    { titleKey: 'pillars.0.title', descKey: 'pillars.0.description' },
    { titleKey: 'pillars.1.title', descKey: 'pillars.1.description' },
    { titleKey: 'pillars.2.title', descKey: 'pillars.2.description' },
    { titleKey: 'pillars.3.title', descKey: 'pillars.3.description' },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <HeroSection title={t('hero.title')} subtitle={t('hero.subtitle')} />

      {/* ─── OUR STORY ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sky-600 font-semibold uppercase tracking-widest text-sm mb-3">
                {t('story.tagline')}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
                {t('story.title')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <ScrollReveal delay={0.1}>
              <p>{t('story.paragraph1')}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>{t('story.paragraph2')}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>{t('story.paragraph3')}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── KEY PILLARS ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sky-600 font-semibold uppercase tracking-widest text-sm mb-3">
                {t('pillars.tagline')}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
                {t('pillars.title')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-20">
            {pillars.map((pillar, i) => {
              const isReversed = i % 2 !== 0;
              const Icon = pillarIcons[i];
              const colors = pillarColors[i];
              return (
                <ScrollReveal
                  key={pillar.titleKey}
                  delay={0.1}
                  direction={isReversed ? 'right' : 'left'}
                >
                  <div
                    className={`flex flex-col ${
                      isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
                    } items-center gap-10 md:gap-16`}
                  >
                    {/* Icon */}
                    <div className="w-full md:w-1/2 flex items-center justify-center">
                      <div className={`w-32 h-32 md:w-40 md:h-40 rounded-3xl ${colors.bg} ring-4 ${colors.ring} flex items-center justify-center shadow-lg`}>
                        <Icon className={`w-16 h-16 md:w-20 md:h-20 ${colors.icon}`} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="w-full md:w-1/2">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-600 font-bold font-heading text-lg">
                          {i + 1}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-gray-900">
                          {t(pillar.titleKey)}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {t(pillar.descKey)}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-sky-600 font-semibold uppercase tracking-widest text-sm mb-6">
              {t('mission.tagline')}
            </p>
            <blockquote className="text-2xl md:text-3xl font-heading font-bold text-gray-900 leading-snug">
              &ldquo;{t('mission.statement')}&rdquo;
            </blockquote>
            <div className="mt-6 w-16 h-1 bg-amber-500 mx-auto rounded-full" />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FOUNDER SECTION ─── */}
      <section className="py-24" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-8xl text-sky-500/20 font-serif leading-none select-none">
                &ldquo;
              </span>
              <blockquote className="relative z-10 text-xl md:text-2xl text-gray-200 leading-relaxed italic font-light max-w-3xl mx-auto">
                {t('founder.quote')}
              </blockquote>
              <div className="mt-10">
                <div className="w-16 h-16 rounded-full bg-sky-700/50 mx-auto flex items-center justify-center mb-4">
                  <span className="text-white font-bold font-heading text-xl">
                    {t('founder.initials')}
                  </span>
                </div>
                <p className="text-white font-bold font-heading text-lg">
                  {t('founder.name')}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {t('founder.title')}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-br from-sky-600 via-sky-700 to-teal-700">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
              {t('cta.title')}
            </h2>
            <p className="mt-4 text-lg text-sky-100 max-w-xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-xl transition-colors text-lg shadow-lg shadow-black/20"
              >
                {t('cta.button')}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
