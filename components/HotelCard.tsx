"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hotel } from "@/types/hotel";
import { memo } from "react";

interface HotelCardProps {
  hotel: Hotel;
  currency: string;
  language: "tr" | "en";
}

const exchangeRates = {
  TRY: 1,
  USD: 0.031,
  EUR: 0.029,
};

function HotelCard({ hotel, currency, language }: HotelCardProps) {
  const t = useTranslations();

  const getPrice = (basePrice: number) => {
    const convertedPrice = basePrice * exchangeRates[currency as keyof typeof exchangeRates];
    return new Intl.NumberFormat(language === "tr" ? "tr-TR" : "en-US", {
      style: "currency",
      currency: currency,
    }).format(convertedPrice);
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <img src={hotel.image} alt={hotel.name[language]} title={hotel.name[language]} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2" title={hotel.name[language]}>
          {hotel.name[language]}
        </h3>
        <p className="text-muted-foreground line-clamp-2">{hotel.description[language]}</p>
      </CardContent>
      <CardFooter className="p-4 bg-accent/5 flex justify-between items-center">
        <div>
          <p className="text-sm text-muted-foreground">{t("common.from")}</p>
          <p className="text-lg font-bold">
            {getPrice(hotel.price)} / {t("common.night")}
          </p>
        </div>
        <Button variant="default" title={hotel.name[language]}>
          {t("common.viewDetails")}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default memo(HotelCard);
