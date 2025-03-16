"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useAppStore } from "@/lib/store";

export default function HotelCardList() {
  const t = useTranslations();
  const { language } = useAppStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Link
        href={`${language}/bodrum-${language === "tr" ? "otelleri" : "hotels"}`}
        className="block group hover:transform hover:scale-105 transition-transform duration-200"
      >
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Bodrum"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <h2 className="text-white text-2xl font-bold">{t("locations.bodrum")}</h2>
          </div>
        </div>
      </Link>
      <Link
        href={`${language}/antalya-${language === "tr" ? "otelleri" : "hotels"}`}
        className="block group hover:transform hover:scale-105 transition-transform duration-200"
      >
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Antalya"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <h2 className="text-white text-2xl font-bold">{t("locations.antalya")}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}
