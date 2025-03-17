import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./navigation";
import { routePatterns } from "./lib/routes";

// URL pattern kontrolü için regex oluşturucu
function createPatternRegex(locale: string, pattern: (typeof routePatterns)[keyof typeof routePatterns]) {
  const { prefix, suffix } = pattern;
  const prefixPath = prefix ? `/${prefix}` : "";
  return new RegExp(`^/${locale}${prefixPath}/[\\w-]+${suffix[locale]}$`);
}

// Tüm pattern'ler için URL kontrolü
function matchesAnyPattern(pathname: string) {
  return Object.values(routePatterns).some((pattern) => {
    return locales.some((locale) => {
      const regex = createPatternRegex(locale, pattern);
      return regex.test(pathname);
    });
  });
}

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/:locale/:slug": "/:locale/[...slug]",
  },
});

export const config = {
  matcher: ["/", "/(tr|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
