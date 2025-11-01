import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import type { FetchResponse } from "../../../services/apiClient";
import type { Game } from "../services/gameService";
import gameService from "../services/gameService";
import useGameQueryStore from "../../../store";

const useGames = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [
      "games",
      gameQuery.genreId,
      gameQuery.platformId,
      gameQuery.sortOrder,
      gameQuery.searchText,
    ],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    initialPageParam: 1,
    staleTime: ms("3h"),
  });
};

export default useGames;
