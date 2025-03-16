import { Hotel } from '@/types/hotel';

export const hotels: Hotel[] = [
  {
    id: '1',
    listSlug: 'bodrum',
    name: {
      tr: 'Mandarin Oriental Bodrum',
      en: 'Mandarin Oriental Bodrum'
    },
    description: {
      tr: 'Cennet Koyu\'nda yer alan bu lüks resort, özel plaj, spa merkezi ve muhteşem deniz manzaralı odalar sunmaktadır.',
      en: 'Located in Paradise Bay, this luxury resort offers a private beach, spa center, and rooms with stunning sea views.'
    },
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: 15000
  },
  {
    id: '2',
    listSlug: 'bodrum',
    name: {
      tr: 'Kempinski Hotel Barbaros Bay',
      en: 'Kempinski Hotel Barbaros Bay'
    },
    description: {
      tr: 'Barbaros Koyu\'nda konumlanan bu 5 yıldızlı otel, özel plajı ve lüks spa merkezi ile misafirlerine unutulmaz bir deneyim sunuyor.',
      en: 'Located in Barbaros Bay, this 5-star hotel offers an unforgettable experience with its private beach and luxury spa center.'
    },
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: 12000
  },
  {
    id: '3',
    listSlug: 'antalya',
    name: {
      tr: 'Mardan Palace',
      en: 'Mardan Palace'
    },
    description: {
      tr: 'Lara plajında yer alan bu ultra lüks otel, özel plajı, aquaparkı ve dünya mutfaklarından örnekler sunan restoranları ile öne çıkıyor.',
      en: 'Located on Lara beach, this ultra-luxury hotel features a private beach, aquapark, and restaurants offering cuisines from around the world.'
    },
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: 18000
  },
  {
    id: '4',
    listSlug: 'antalya',
    name: {
      tr: 'Regnum Carya',
      en: 'Regnum Carya'
    },
    description: {
      tr: 'Belek\'te yer alan bu golf & spa resort, profesyonel golf sahası, özel plajı ve lüks spa merkezi ile misafirlerine premium bir tatil deneyimi sunuyor.',
      en: 'Located in Belek, this golf & spa resort offers a premium holiday experience with its professional golf course, private beach, and luxury spa center.'
    },
    image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: 20000
  }
];