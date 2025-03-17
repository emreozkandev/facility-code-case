import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { routePatterns } from '@/lib/routes';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocalizedUrl(currentPath: string, currentLocale: string, targetLocale: string): string {
  // Ana sayfa kontrolü
  if (currentPath === `/${currentLocale}`) {
    return `/${targetLocale}`;
  }

  // Mevcut path'den slug'ı çıkar
  const pathWithoutLocale = currentPath.replace(`/${currentLocale}/`, '');
  
  // Her pattern için kontrol et
  for (const [type, pattern] of Object.entries(routePatterns)) {
    // Mevcut suffix'i bul
    const currentSuffix = pattern.suffix[currentLocale];
    if (pathWithoutLocale.endsWith(currentSuffix)) {
      // Base slug'ı çıkar
      const baseSlug = pathWithoutLocale.slice(0, -currentSuffix.length);
      // Yeni locale ile URL oluştur
      const newSuffix = pattern.suffix[targetLocale];
      return `/${targetLocale}/${baseSlug}${newSuffix}`;
    }
  }

  // Eğer özel bir pattern bulunamazsa, sadece locale'i değiştir
  return currentPath.replace(`/${currentLocale}`, `/${targetLocale}`);
}
