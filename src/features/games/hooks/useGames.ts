import {
  useInfiniteQuery,
} from "@tanstack/react-query";
import ms from 'ms'
import type { GameQuery } from "../../../App";
import type { FetchResponse } from "../../../services/apiClient";
import type { Game } from "../services/gameService";
import gameService from "../services/gameService";

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam = 1}) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOder,
          search: gameQuery.searchText,
          page: pageParam
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: ms('3h'),
  });

export default useGames;
