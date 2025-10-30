import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'de', 'pl'] as const;
export const defaultLocale = 'en' as const;

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale ist in Next.js 15 bereits ein Promise
  const locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});