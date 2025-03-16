import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Currency = 'TRY' | 'USD' | 'EUR';
type Language = 'tr' | 'en';

interface AppState {
  currency: Currency;
  language: Language;
  setCurrency: (currency: Currency) => void;
  setLanguage: (language: Language) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currency: 'TRY',
      language: 'tr',
      setCurrency: (currency) => set({ currency }),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'app-storage',
    }
  )
);