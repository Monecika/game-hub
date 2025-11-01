import { create } from "zustand";

interface GameQuery {
  searchText?: string;
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId?: number) => void;
  setPlatformId: (platfromId?: number) => void;
  setSortOrder: (sortOder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, searchText } })),
  setGenreId: (genreId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
