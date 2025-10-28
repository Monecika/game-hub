import {
  useInfiniteQuery,
} from "@tanstack/react-query";
import type { GameQuery } from "../App";
import type { Game } from "../services/games/gameService";
import gameService from "../services/games/gameService";
import type { FetchResponse } from "../services/apiClient";

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam = 1}) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOder,
          search: gameQuery.searchText,
          page: pageParam
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 1000 * 60 * 60 * 3,
  });

export default useGames;
