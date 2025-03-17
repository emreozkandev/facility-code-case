import { Metadata } from 'next';

type GenerateMetadataProps = {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  locale: string;
  path?: string;
};

export function createMetadata({
  title,
  description,
  keywords,
  ogImage = 'https://your-default-og-image.jpg',
  locale,
  path = ''
}: GenerateMetadataProps): Metadata {
  const url = `https://your-domain.com/${locale}${path}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [ogImage],
      url,
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
      languages: {
        'tr': `https://your-domain.com/tr${path}`,
        'en': `https://your-domain.com/en${path}`,
      },
    },
  };
} 