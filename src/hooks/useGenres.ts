import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import type { Genre } from "../services/genres/genreService";
import genreService from "../services/genres/genreService";
import type { FetchResponse } from "../services/apiClient";

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error, Genre[]>({
    queryKey: ["genres"],
    queryFn: () => genreService.getAll(),
    select: (data) => data.results,
    staleTime: 1000 * 60 * 60 * 24,
    initialData: { count: genres.length, next: null, results: genres },
  });

export default useGenres;
