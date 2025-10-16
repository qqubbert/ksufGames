import { create } from "zustand";

export type User = { id: string; name: string; balance: number }

type AuthState = {
  token: string | null;
  user: User | null;
  isLoggedIn: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isLoggedIn: false,
  login: (token, user) =>
    set({ token, user, isLoggedIn: true }),
  logout: () =>
    set({ token: null, user: null, isLoggedIn: false }),
}));
