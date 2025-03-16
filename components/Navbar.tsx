"use client";

import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useAppStore } from "@/lib/store";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon, Globe, Coins, HomeIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

export default function Navbar() {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { currency, setCurrency, language, setLanguage } = useAppStore();

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as "en" | "tr");
    const newPathname = pathname.replace(`/${language}`, `/${newLanguage}`);
    router.replace(newPathname);
  };

  return (
    <nav className="bg-card shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href={`/${language}`} className="p-2 rounded-lg hover:bg-accent">
              <HomeIcon className="h-5 w-5" />
            </Link>
            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-accent">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <Select value={language} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tr">Türkçe</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Coins className="h-5 w-5" />
              <Select value={currency} onValueChange={(value) => setCurrency(value as "TRY" | "USD" | "EUR")}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TRY">TRY</SelectItem>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
