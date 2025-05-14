import { create } from 'zustand';
import { editor } from 'monaco-editor';
import { defaultTheme } from '@/constants/theme.default';

interface ThemeState {
  theme: editor.IStandaloneThemeData;
  setTheme: (theme: editor.IStandaloneThemeData) => void;
  clearTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: defaultTheme,
  setTheme: (newTheme: editor.IStandaloneThemeData) => set({ theme: newTheme }),
  clearTheme: () => set({ theme: defaultTheme }),
}));
