import { create } from 'zustand';
import { Languages } from '@/constants/languages.enum';
import { defaultValues } from '@/constants/languages.defaults';
import { tabSizeValues } from '@/constants/languages.tabSize';

interface languageState {
  language: Languages;
  defaultValue: string;
  tabSize: number;
  setlanguage: (language: Languages) => void;
  clearlanguage: () => void;
}

export const useLanguageStore = create<languageState>((set) => ({
  language: Languages.javascript,
  defaultValue: defaultValues[Languages.javascript],
  tabSize: tabSizeValues[Languages.javascript],
  setlanguage: (newlanguage) =>
    set({
      language: newlanguage,
      defaultValue: defaultValues[newlanguage],
      tabSize: tabSizeValues[newlanguage],
    }),
  clearlanguage: () =>
    set({
      language: Languages.javascript,
      defaultValue: defaultValues[Languages.javascript],
      tabSize: tabSizeValues[Languages.javascript],
    }),
}));
