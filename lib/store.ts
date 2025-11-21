import { create } from 'zustand';

interface UIStore {
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  toggleLogin: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isLoginOpen: false,
  openLogin: () => set({ isLoginOpen: true }),
  closeLogin: () => set({ isLoginOpen: false }),
  toggleLogin: () => set((state) => ({ isLoginOpen: !state.isLoginOpen })),
}));
