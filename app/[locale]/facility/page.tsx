"use client";

import { useTranslations } from "next-intl";
import { useAppStore } from "@/lib/store";
import HotelCard from "@/components/HotelCard";
import { hotels } from "@/data/hotels";

export default function FacilityPage({ searchParams }: { searchParams: { slug?: string } }) {
  const t = useTranslations();
  const slug = searchParams.slug;
  console.log("slug", slug);

  const { currency, language } = useAppStore();

  const filteredHotels = hotels.filter((hotel) => hotel.listSlug === slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        {t(`locations.${slug}`)} {t("navigation.hotels")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} currency={currency} language={language} />
        ))}
      </div>
    </div>
  );
}
