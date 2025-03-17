export type RoutePattern = {
  prefix: string;
  suffix: Record<string, string>;
};

export const routePatterns: Record<string, RoutePattern> = {
  facility: {
    prefix: '',
    suffix: {
      tr: '-otelleri',
      en: '-hotels'
    }
  },
  restaurant: {
    prefix: '',
    suffix: {
      tr: '-restoranlar',
      en: '-restaurants'
    }
  }
};

export function createDynamicUrl(locale: string, slug: string, pattern: RoutePattern) {
  const { prefix, suffix } = pattern;
  const prefixPath = prefix ? `/${prefix}` : '';
  return `/${locale}${prefixPath}/${slug}${suffix[locale]}`;
}

export function parseSlugFromUrl(locale: string, fullSlug: string, pattern: RoutePattern): string | null {
  const { suffix } = pattern;
  if (!fullSlug.endsWith(suffix[locale])) return null;
  return fullSlug.slice(0, -suffix[locale].length);
}

export function validateUrl(locale: string, fullSlug: string, pattern: RoutePattern): boolean {
  const { suffix } = pattern;
  return fullSlug.endsWith(suffix[locale]);
} 