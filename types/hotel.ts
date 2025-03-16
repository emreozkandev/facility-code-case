export interface Hotel {
  id: string;
  listSlug: string;
  name: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  image: string;
  price: number;
}