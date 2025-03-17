import { Metadata } from "next";
import HotelCardList from "@/components/HotelCardList";
import RestaurantCardList from "@/components/RestaurantCardList";
import { createMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations("seo.home");

  return createMetadata({
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    locale,
  });
}

export default function Home() {
  const t = useTranslations();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">{t("navigation.hotels")}</h2>
        <HotelCardList />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">{t("restaurants.title")}</h2>
        <RestaurantCardList />
      </section>
    </div>
  );
}
