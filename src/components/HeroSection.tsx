interface HeroSectionProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function HeroSection({
  title,
  subtitle,
  className = '',
}: HeroSectionProps) {
  return (
    <section
      className={`relative flex items-center justify-center min-h-[45vh] bg-dark-navy overflow-hidden ${className}`}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient opacity-90" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 50%, #0EA5E9 1px, transparent 1px), radial-gradient(circle at 75% 50%, #14B8A6 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
