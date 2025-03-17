"use client";

import { useTranslations } from "next-intl";

type RestaurantListProps = {
  location: string;
};

export default function RestaurantList({ location }: RestaurantListProps) {
  const t = useTranslations();

  const restaurants = [
    "restaurant1",
    "restaurant2",
    "restaurant3",
    "restaurant4",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {restaurants.map((restaurantKey) => (
        <div
          key={restaurantKey}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              {t(`restaurants.list.${location}.${restaurantKey}`)}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t("common.viewDetails")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
} 