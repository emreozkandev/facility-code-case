import Head from 'next/head';
import { useLocale } from 'next-intl';

type HtmlHeadProps = {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
};

export default function HtmlHead({
  title,
  description,
  keywords,
  ogImage = 'https://your-default-og-image.jpg'
}: HtmlHeadProps) {
  const locale = useLocale();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Locale */}
      <meta property="og:locale" content={locale === 'tr' ? 'tr_TR' : 'en_US'} />
      
      {/* Canonical URL */}
      <link 
        rel="canonical" 
        href={`https://your-domain.com/${locale}`} 
      />
    </Head>
  );
} 