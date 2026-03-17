import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import HeroSection from '@/components/HeroSection';
import ScrollReveal from '@/components/ScrollReveal';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.parts' });
  return { title: t('title'), description: t('description') };
}

/* ── Data ── */

const tankCategories = [
  {
    key: 'residential',
    images: [
      '/images/products/tanks/residential-black.png',
      '/images/products/tanks/residential-equipment.png',
      '/images/products/tanks/residential-ro.png',
      '/images/products/tanks/residential-tanks.png',
    ],
  },
  {
    key: 'commercial',
    images: [
      '/images/products/tanks/commercial-blue.png',
      '/images/products/tanks/commercial-tanks-1.png',
      '/images/products/tanks/commercial-large.jpg',
      '/images/products/tanks/commercial-gaylord.jpg',
    ],
  },
  {
    key: 'industrial',
    images: ['/images/products/tanks/industrial-1.png'],
  },
] as const;

const valveBrands = [
  {
    key: 'clack',
    images: [
      '/images/products/valves/clack-3butt.png',
      '/images/products/valves/clack-3buttons.png',
      '/images/products/valves/clack-5buttons.png',
      '/images/products/valves/clack-control.png',
      '/images/products/valves/control-valve.png',
    ],
  },
  {
    key: 'fleck',
    images: [
      '/images/products/valves/fleck-2510.png',
      '/images/products/valves/fleck-2570.png',
      '/images/products/valves/fleck-3150.png',
      '/images/products/valves/fleck-valve.png',
      '/images/products/valves/autotrol.png',
    ],
  },
] as const;

const minerals = [
  { key: 'activatedCarbon', image: '/images/products/minerals/activated-carbon.png' },
  { key: 'anionicResin', image: '/images/products/minerals/anionic-resin.png' },
  { key: 'cationicResin', image: '/images/products/minerals/cationic-resin.png' },
  { key: 'kdf', image: '/images/products/minerals/kdf.png' },
  { key: 'garnet', image: '/images/products/minerals/garnet.png' },
] as const;

/* ── Helpers ── */

function SectionBanner({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-12">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1280px) 100vw, 1280px"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}

function ProductImageCard({
  src,
  alt,
  delay = 0,
}: {
  src: string;
  alt: string;
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <div className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg border border-gray-100 transition-shadow">
        <div className="relative w-full h-56 overflow-hidden bg-gray-50">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ── Page ── */

export default async function PartsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'parts' });

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection title={t('hero.title')} subtitle={t('hero.subtitle')} />

      {/* ════════════════════════════════════════════
          TANKS
      ════════════════════════════════════════════ */}
      <section id="tanks" className="py-20 lg:py-28 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary text-center mb-10">
              {t('tanks.title')}
            </h2>
          </ScrollReveal>

          <SectionBanner
            src="/images/products/general/tank-banner.png"
            alt={t('tanks.title')}
          />

          {tankCategories.map((cat) => (
            <div key={cat.key} className="mb-16 last:mb-0">
              <ScrollReveal>
                <h3 className="text-2xl font-bold font-heading text-text-primary mb-2">
                  {t(`tanks.${cat.key}.title`)}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-8 max-w-3xl">
                  {t(`tanks.${cat.key}.description`)}
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {cat.images.map((img, i) => (
                  <ProductImageCard
                    key={img}
                    src={img}
                    alt={t(`tanks.${cat.key}.title`)}
                    delay={i * 0.08}
                  />
                ))}
              </div>

              <ScrollReveal delay={0.25}>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-primary-light hover:bg-primary-light/90 text-white font-semibold text-sm transition-colors shadow-md shadow-primary-light/20"
                  >
                    {t('requestQuote')}
                  </Link>
                  <a
                    href="https://wa.me/19412660179"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-full border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white font-semibold text-sm transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          VALVES
      ════════════════════════════════════════════ */}
      <section id="valves" className="py-20 lg:py-28 bg-gray-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary text-center mb-10">
              {t('valves.title')}
            </h2>
          </ScrollReveal>

          <SectionBanner
            src="/images/products/general/valves-banner.png"
            alt={t('valves.title')}
          />

          {valveBrands.map((brand) => (
            <div key={brand.key} className="mb-16 last:mb-0">
              <ScrollReveal>
                <h3 className="text-2xl font-bold font-heading text-text-primary mb-2">
                  {t(`valves.${brand.key}.title`)}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-8 max-w-3xl">
                  {t(`valves.${brand.key}.description`)}
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
                {brand.images.map((img, i) => (
                  <ProductImageCard
                    key={img}
                    src={img}
                    alt={t(`valves.${brand.key}.title`)}
                    delay={i * 0.08}
                  />
                ))}
              </div>

              <ScrollReveal delay={0.25}>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-primary-light hover:bg-primary-light/90 text-white font-semibold text-sm transition-colors shadow-md shadow-primary-light/20"
                  >
                    {t('requestQuote')}
                  </Link>
                  <a
                    href="https://wa.me/19412660179"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-full border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white font-semibold text-sm transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          MINERALS & MEDIA
      ════════════════════════════════════════════ */}
      <section id="minerals" className="py-20 lg:py-28 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary text-center mb-10">
              {t('minerals.title')}
            </h2>
          </ScrollReveal>

          <SectionBanner
            src="/images/products/general/minerals-banner.png"
            alt={t('minerals.title')}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {minerals.map(({ key, image }, i) => (
              <ScrollReveal key={key} delay={i * 0.09}>
                <div className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-gray-100 transition-shadow">
                  <div className="relative w-full h-56 overflow-hidden bg-gray-50">
                    <Image
                      src={image}
                      alt={t(`minerals.${key}.title`)}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold font-heading text-text-primary mb-2">
                      {t(`minerals.${key}.title`)}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-5">
                      {t(`minerals.${key}.description`)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center px-5 py-2.5 rounded-full bg-primary-light hover:bg-primary-light/90 text-white font-semibold text-xs transition-colors shadow-sm"
                      >
                        {t('requestQuote')}
                      </Link>
                      <a
                        href="https://wa.me/19412660179"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-5 py-2.5 rounded-full border border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white font-semibold text-xs transition-colors"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PROFESSIONAL ADVICE CTA
      ════════════════════════════════════════════ */}
      <section id="general" className="py-20 lg:py-28 bg-dark-navy text-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              {t('advice.title')}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
              {t('advice.description')}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-primary-light hover:bg-primary-light/90 text-white font-bold text-lg transition-colors shadow-lg shadow-primary-light/25"
            >
              {t('requestQuote')}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
