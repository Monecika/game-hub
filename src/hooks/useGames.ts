import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import gamesService from "../services/games/gamesService";

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      gamesService.getAll({
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOder,
        search: gameQuery.searchText,
      }),
  });

export default useGames;
