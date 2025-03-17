import { LocationData } from '@/types/common';

export const hotelLocations: LocationData[] = [
  {
    slug: "bodrum",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    translationKey: "locations.bodrum",
    seo: {
      title: "Bodrum Otelleri | Lüks ve Butik Oteller",
      description: "Bodrum'un en iyi otellerinde unutulmaz bir tatil deneyimi yaşayın. Lüks ve butik oteller, özel plajlar ve muhteşem manzaralar.",
      keywords: "bodrum otelleri, bodrum lüks oteller, bodrum tatil, bodrum konaklama"
    }
  },
  {
    slug: "antalya",
    imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    translationKey: "locations.antalya",
    seo: {
      title: "Antalya Otelleri | En İyi Tatil Otelleri",
      description: "Antalya'nın en iyi otellerinde tatilinizi planlayın. Ultra her şey dahil oteller, aquaparklar ve özel plajlar.",
      keywords: "antalya otelleri, antalya resort oteller, antalya tatil, antalya konaklama"
    }
  }
];

export const restaurantLocations: LocationData[] = [
  {
    slug: "bodrum",
    imageUrl: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88",
    translationKey: "restaurants.locations.bodrum",
    seo: {
      title: "Bodrum Restoranları | En İyi Yemek Mekanları",
      description: "Bodrum'un en iyi restoranlarında yerel ve dünya mutfağının lezzetlerini keşfedin. Deniz ürünleri, Ege mutfağı ve dünya lezzetleri.",
      keywords: "bodrum restoranları, bodrum yemek, bodrum balık restoranları, bodrum fine dining"
    }
  },
  {
    slug: "antalya",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    translationKey: "restaurants.locations.antalya",
    seo: {
      title: "Antalya Restoranları | En İyi Lezzet Durakları",
      description: "Antalya'nın en iyi restoranlarında muhteşem lezzetleri tadın. Akdeniz mutfağı, deniz ürünleri ve yerel lezzetler.",
      keywords: "antalya restoranları, antalya yemek, antalya balık restoranları, antalya fine dining"
    }
  }
]; 