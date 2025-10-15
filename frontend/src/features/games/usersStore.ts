import { create } from "zustand";

type GamesStore = {
  selectedGame: number | null;
  setGame: (id: number) => void;
}

export const useGamesStore = create<GamesStore>((set) => ({
  selectedGame: null,
  setGame: (id: number) => set({ selectedGame: id }),
}));