import HotelCardList from "@/components/HotelCardList";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-8">{t("navigation.home")}</h1>
      <HotelCardList />
    </div>
  );
}
