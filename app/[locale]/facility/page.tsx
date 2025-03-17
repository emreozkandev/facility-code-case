import { useTranslations } from "next-intl";
import FacilityCardList from "@/components/FacilityCardList";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { memo } from "react";

// Statik metadata yerine dinamik metadata kullanacağız
export async function generateMetadata({ searchParams }: { searchParams: { slug?: string } }): Promise<Metadata> {
  const t = await getTranslations();
  const slug = searchParams.slug;

  return {
    title: slug ? `${t(`locations.${slug}`)} - ${t("navigation.hotels")}` : t("navigation.hotels"),
    description: slug ? t(`locations.${slug}.description`, { fallback: t("navigation.hotels") }) : t("navigation.hotels"),
  };
}

function FacilityPage({ searchParams }: { searchParams: { slug?: string } }) {
  const t = useTranslations();
  const slug = searchParams.slug;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        {slug ? t(`locations.${slug}`) : t("navigation.hotels")} {!slug && t("navigation.hotels")}
      </h1>
      <FacilityCardList slug={slug} />
    </div>
  );
}

export default memo(FacilityPage);
//export default memo(FacilityPage);
