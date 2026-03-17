import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  CloudRain,
  Filter,
  FlaskConical,
  Settings,
  Droplets,
  Sun,
  Atom,
  Cog,
  Box,
  Gauge,
  Leaf,
  Headset,
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
  const t = await getTranslations({ locale, namespace: 'metadata.services' });
  return { title: t('title'), description: t('description') };
}

const technologies = [
  { key: 'ozone', Icon: CloudRain },
  { key: 'mixedBed', Icon: Filter },
  { key: 'softening', Icon: FlaskConical },
  { key: 'valves', Icon: Settings },
  { key: 'ro', Icon: Droplets },
  { key: 'uv', Icon: Sun },
  { key: 'chlorinators', Icon: Atom },
  { key: 'specialized', Icon: Cog },
  { key: 'frp', Icon: Box },
  { key: 'pumps', Icon: Gauge },
] as const;

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'services' });

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection title={t('hero.title')} subtitle={t('hero.subtitle')} />

      {/* ── Strategic Consulting ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-light/10 text-primary-light">
                <Settings className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4">
                  {t('consulting.title')}
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
                  {t('consulting.description')}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Technology Grid ── */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary">
                {t('technology.title')}
              </h2>
              <p className="mt-3 text-lg text-text-secondary max-w-2xl mx-auto">
                {t('technology.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map(({ key, Icon }, i) => (
              <ScrollReveal key={key} delay={i * 0.07}>
                <div className="group flex items-start gap-5 p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg border border-gray-100 transition-shadow">
                  <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary-light/10 text-primary-light group-hover:bg-primary-light group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-text-primary mb-1">
                      {t(`technology.${key}.title`)}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {t(`technology.${key}.description`)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sustainability ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-3xl border border-emerald-200 bg-emerald-50/50 p-10 md:p-14">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600">
                  <Leaf className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4">
                    {t('sustainability.title')}
                  </h2>
                  <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
                    {t('sustainability.description')}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Dedicated Support ── */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-light/10 text-primary-light">
                <Headset className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4">
                  {t('support.title')}
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
                  {t('support.description')}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 bg-dark-navy text-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
              {t('cta.title')}
            </h2>
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
