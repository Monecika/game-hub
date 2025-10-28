import { useQuery } from "@tanstack/react-query";
import genres from "../../data/genres";
import type { FetchResponse } from "../../services/apiClient";
import genreService, { type Genre } from "../../services/genres/genreService";


const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error, Genre[]>({
    queryKey: ["genres"],
    queryFn: () => genreService.getAll(),
    select: (data) => data.results,
    staleTime: 1000 * 60 * 60 * 24,
    initialData: genres
  });

export default useGenres;
