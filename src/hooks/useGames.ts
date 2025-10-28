import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import type { Game } from "../services/games/gameService";
import gameService from "../services/games/gameService";
import type { FetchResponse } from "../services/apiClient";

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error, Game[]>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      gameService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOder,
          search: gameQuery.searchText,
        },
      }),
    select: (data) => data.results,
    staleTime: 1000 * 60 * 60 * 3,
  });

export default useGames;
