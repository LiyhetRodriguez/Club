import { create } from "zustand";

type User = { email: string } | null;

type State = {
  user: User;
  setUser: (u: User) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const useApp = create<State>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  theme: "light",
  toggleTheme: () => set((s) => ({ theme: s.theme === "light" ? "dark" : "light" })),
}));
