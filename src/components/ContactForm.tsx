'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to send');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-shadow';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-text-primary mb-1.5"
        >
          {t('name')} <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder={t('namePlaceholder')}
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-text-primary mb-1.5"
        >
          {t('email')} <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t('emailPlaceholder')}
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-text-primary mb-1.5"
        >
          {t('phone')}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder={t('phonePlaceholder')}
          className={inputClass}
        />
      </div>

      {/* Service Interest */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-text-primary mb-1.5"
        >
          {t('service')}
        </label>
        <select id="service" name="service" className={inputClass}>
          <option value="">{t('servicePlaceholder')}</option>
          <option value="waterTreatment">{t('serviceOptions.waterTreatment')}</option>
          <option value="waterTesting">{t('serviceOptions.waterTesting')}</option>
          <option value="parts">{t('serviceOptions.parts')}</option>
          <option value="maintenance">{t('serviceOptions.maintenance')}</option>
          <option value="other">{t('serviceOptions.other')}</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-primary mb-1.5"
        >
          {t('message')} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t('messagePlaceholder')}
          className={inputClass + ' resize-none'}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3 px-6 rounded-lg bg-primary-light text-white font-semibold hover:bg-primary transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? t('sending') : t('submit')}
      </button>

      {/* Status messages */}
      {status === 'success' && (
        <div className="p-4 rounded-lg bg-success/10 text-success text-sm font-medium text-center">
          {t('successMessage')}
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 rounded-lg bg-red-50 text-red-600 text-sm font-medium text-center">
          {t('errorMessage')}
        </div>
      )}
    </form>
  );
}
