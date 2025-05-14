import { create } from 'zustand'
import { Languages } from '@/constants/languages.enum';
import { defaultValues } from '@/constants/languages.defaults';

interface languageState {
  language: Languages;
  defaultValue: string;
  setlanguage: (language: Languages) => void;
  clearlanguage: () => void;
}

export const useLanguageStore = create<languageState>((set) => ({
  language: Languages.javascript,
  defaultValue: defaultValues[Languages.javascript],
  setlanguage: (newlanguage) => set({ language: newlanguage, defaultValue: defaultValues[newlanguage] }),
  clearlanguage: () => set({ language: Languages.javascript, defaultValue: defaultValues[Languages.javascript] }),
}))
