import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  AlertTriangle,
  Shield,
  Droplets,
  FlaskConical,
  Eye,
  Bug,
  Atom,
  Zap,
  Microscope,
  TestTubes,
  Wind,
  Activity,
  Hammer,
  Waves,
  Thermometer,
} from 'lucide-react';
import { Link } from '@/i18n/navigation';
import HeroSection from '@/components/HeroSection';
import ScrollReveal from '@/components/ScrollReveal';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.waterTesting' });
  return { title: t('title'), description: t('description') };
}

const testTypes = [
  { key: 'ph', Icon: FlaskConical, color: 'bg-violet-50 text-violet-600 group-hover:bg-violet-100' },
  { key: 'turbidity', Icon: Eye, color: 'bg-sky-50 text-sky-600 group-hover:bg-sky-100' },
  { key: 'pesticides', Icon: Bug, color: 'bg-red-50 text-red-600 group-hover:bg-red-100' },
  { key: 'nitrate', Icon: Atom, color: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100' },
  { key: 'redox', Icon: Zap, color: 'bg-amber-50 text-amber-600 group-hover:bg-amber-100' },
  { key: 'bacteria', Icon: Microscope, color: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100' },
  { key: 'chloride', Icon: TestTubes, color: 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100' },
  { key: 'dissolvedOxygen', Icon: Wind, color: 'bg-teal-50 text-teal-600 group-hover:bg-teal-100' },
  { key: 'conductivity', Icon: Activity, color: 'bg-orange-50 text-orange-600 group-hover:bg-orange-100' },
  { key: 'metals', Icon: Hammer, color: 'bg-slate-50 text-slate-600 group-hover:bg-slate-100' },
  { key: 'salinity', Icon: Waves, color: 'bg-blue-50 text-blue-600 group-hover:bg-blue-100' },
  { key: 'temperature', Icon: Thermometer, color: 'bg-rose-50 text-rose-600 group-hover:bg-rose-100' },
] as const;

const whyMattersItems = [
  { key: 'contaminants', Icon: AlertTriangle, color: 'bg-amber-100 text-amber-600' },
  { key: 'safety', Icon: Shield, color: 'bg-sky-100 text-sky-600' },
  { key: 'quality', Icon: Droplets, color: 'bg-teal-100 text-teal-600' },
] as const;

export default async function WaterTestingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'waterTesting' });

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection title={t('hero.title')} subtitle={t('hero.subtitle')} />

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {t('hero.description')}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-primary-light hover:bg-primary-light/90 text-white font-bold text-lg transition-colors shadow-lg shadow-primary-light/25"
            >
              {t('hero.cta')}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Testing Types Grid ── */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary">
                {t('types.title')}
              </h2>
              <p className="mt-3 text-lg text-text-secondary max-w-2xl mx-auto">
                {t('types.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {testTypes.map(({ key, Icon, color }, i) => (
              <ScrollReveal key={key} delay={i * 0.05}>
                <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 text-center hover:shadow-lg hover:border-sky-300 transition-all duration-300 hover:-translate-y-1">
                  <div className={`mx-auto mb-4 w-16 h-16 rounded-full ${color} flex items-center justify-center transition-colors`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold font-heading text-text-primary leading-snug">
                    {t(`types.${key}`)}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Testing Matters ── */}
      <section className="py-20 lg:py-28 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary">
                {t('whyMatters.title')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {whyMattersItems.map(({ key, Icon, color }, i) => (
              <ScrollReveal key={key} delay={i * 0.1}>
                <div className="flex flex-col items-start gap-4 p-8 rounded-2xl bg-white shadow-sm">
                  <div
                    className={`flex items-center justify-center w-14 h-14 rounded-xl ${color}`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-text-primary">
                    {t(`whyMatters.${key}.title`)}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {t(`whyMatters.${key}.description`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── City vs Well Water Comparison ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary">
                {t('comparison.title')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* City Water */}
            <ScrollReveal delay={0}>
              <div className="relative rounded-2xl border-2 border-sky-200 bg-sky-50/50 p-8 md:p-10 h-full">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-sky-500 rounded-t-2xl" />
                <h3 className="text-2xl font-bold font-heading text-sky-700 mb-6">
                  {t('comparison.city.title')}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {t('comparison.city.description')}
                </p>
                <ul className="space-y-3">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-sky-500 shrink-0" />
                      <span className="text-text-secondary">
                        {t(`comparison.city.items.${i}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Well Water */}
            <ScrollReveal delay={0.1}>
              <div className="relative rounded-2xl border-2 border-teal-200 bg-teal-50/50 p-8 md:p-10 h-full">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-teal-500 rounded-t-2xl" />
                <h3 className="text-2xl font-bold font-heading text-teal-700 mb-6">
                  {t('comparison.well.title')}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {t('comparison.well.description')}
                </p>
                <ul className="space-y-3">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                      <span className="text-text-secondary">
                        {t(`comparison.well.items.${i}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Health Impact ── */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary">
                {t('healthImpact.title')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
                  <span className="block text-5xl md:text-6xl font-bold font-heading text-sky-600 mb-4">
                    {t(`healthImpact.stats.${i}.number`)}
                  </span>
                  <h3 className="text-lg font-bold font-heading text-text-primary mb-3">
                    {t(`healthImpact.stats.${i}.title`)}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {t(`healthImpact.stats.${i}.description`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 bg-dark-navy text-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              {t('cta.description')}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-primary-light hover:bg-primary-light/90 text-white font-bold text-lg transition-colors shadow-lg shadow-primary-light/25"
            >
              {t('cta.button')}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
