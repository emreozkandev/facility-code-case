"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useAppStore } from "@/lib/store";
import HotelCard from "@/components/HotelCard";
import { hotels } from "@/data/hotels";

interface FacilityCardListProps {
  slug?: string;
}

export default function FacilityCardList(props: FacilityCardListProps) {
  const { slug } = props;
  const t = useTranslations();
  const { currency, language } = useAppStore();

  const filteredHotels = hotels.filter((hotel) => hotel.listSlug === slug);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredHotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} currency={currency} language={language} />
      ))}
    </div>
  );
}
