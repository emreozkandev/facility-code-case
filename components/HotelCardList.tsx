"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { createDynamicUrl, routePatterns } from "@/lib/routes";
import Link from "next/link";

export default function HotelCardList() {
  const t = useTranslations();
  const locale = useLocale();

  const locations = [
    {
      slug: "bodrum",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      translationKey: "locations.bodrum",
    },
    {
      slug: "antalya",
      imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      translationKey: "locations.antalya",
    },
  ];

  const dinings = [
    {
      slug: "bodrum",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      translationKey: "locations.bodrum",
    },
    {
      slug: "antalya",
      imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      translationKey: "locations.antalya",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {locations.map((location) => (
        <Link
          key={location.slug}
          href={createDynamicUrl(locale, location.slug, routePatterns.facility)}
          className="block group hover:transform hover:scale-105 transition-transform duration-200"
          title={t(location.translationKey)}
        >
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={`${location.imageUrl}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`}
              alt={t(location.translationKey)}
              title={t(location.translationKey)}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h2 className="text-white text-2xl font-bold">{t(location.translationKey)}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
