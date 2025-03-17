import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routePatterns, parseSlugFromUrl, validateUrl } from "@/lib/routes";
import { hotelLocations, restaurantLocations } from "@/data/locations";
import { createMetadata } from "@/lib/metadata";
import RestaurantList from "@/components/RestaurantList";
import { memo } from "react";

// Yardımcı fonksiyon
async function getLocationData(pageType: string, baseSlug: string, locale: string) {
  const locationData =
    pageType === "facility" ? hotelLocations.find((loc) => loc.slug === baseSlug) : restaurantLocations.find((loc) => loc.slug === baseSlug);

  if (!locationData) {
    notFound();
  }

  const t = await getTranslations(pageType === "facility" ? "locations" : "restaurants.locations");
  const title = t(baseSlug);

  return {
    ...locationData,
    title,
  };
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string[] } }): Promise<Metadata> {
  if (params.slug.length !== 1) {
    notFound();
  }

  const fullSlug = params.slug[0];
  let pageType: string | null = null;
  let baseSlug: string | null = null;

  for (const [type, pattern] of Object.entries(routePatterns)) {
    if (validateUrl(params.locale, fullSlug, pattern)) {
      pageType = type;
      baseSlug = parseSlugFromUrl(params.locale, fullSlug, pattern);
      break;
    }
  }

  if (!pageType || !baseSlug) {
    notFound();
  }

  const locationData = await getLocationData(pageType, baseSlug, params.locale);

  return createMetadata({
    title: locationData.seo.title,
    description: locationData.seo.description,
    keywords: locationData.seo.keywords,
    ogImage: locationData.imageUrl,
    locale: params.locale,
    path: `/${fullSlug}`,
  });
}

async function DynamicPage({ params }: { params: { locale: string; slug: string[] } }) {
  if (params.slug.length !== 1) {
    notFound();
  }

  const fullSlug = params.slug[0];
  let pageType: string | null = null;
  let baseSlug: string | null = null;

  for (const [type, pattern] of Object.entries(routePatterns)) {
    if (validateUrl(params.locale, fullSlug, pattern)) {
      pageType = type;
      baseSlug = parseSlugFromUrl(params.locale, fullSlug, pattern);
      break;
    }
  }

  if (!pageType || !baseSlug) {
    notFound();
  }

  const locationData = await getLocationData(pageType, baseSlug, params.locale);

  return (
    <div className="container mx-auto px-4 py-8">
      {pageType === "facility" ? (
        <></>
      ) : (
        <>
          <h1 className="text-4xl font-bold text-center mb-8">{locationData.title}</h1>
          <RestaurantList location={baseSlug} />
        </>
      )}
    </div>
  );
}

export default (DynamicPage);

export function generateStaticParams() {
  const params = [];

  for (const [type, pattern] of Object.entries(routePatterns)) {
    for (const locale of ["tr", "en"]) {
      const locations = type === "facility" ? hotelLocations : restaurantLocations;

      for (const location of locations) {
        const fullSlug = `${location.slug}${pattern.suffix[locale]}`;
        params.push({ locale, slug: [fullSlug] });
      }
    }
  }

  return params;
}
