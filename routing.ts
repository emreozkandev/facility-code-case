import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["tr", "en"],

  defaultLocale: "tr",

  localePrefix: "as-needed",

  localeDetection: true,
});
