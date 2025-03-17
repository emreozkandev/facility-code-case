export type SeoData = {
  title: string;
  description: string;
  keywords: string;
};

export type LocationData = {
  slug: string;
  imageUrl: string;
  translationKey: string;
  seo: SeoData;
};

export type RestaurantData = {
  id: string;
  name: string;
  imageUrl: string;
  cuisine: string;
  priceRange: string;
  rating: number;
  seo: SeoData;
}; 