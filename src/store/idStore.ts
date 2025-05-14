import { create } from 'zustand';

interface IdState {
  id: string | null;
  setId: (id: string) => void;
  clearId: () => void;
}

export const useIdStore = create<IdState>((set) => ({
  id: null,
  setId: (newId) => set({ id: newId }),
  clearId: () => set({ id: null }),
}));
