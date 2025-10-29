import { useQuery } from "@tanstack/react-query";
import genres from "../../data/genres";
import ms from 'ms'
import type { FetchResponse } from "../../services/apiClient";
import genreService, { type Genre } from "../../services/genres/genreService";


const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error, Genre[]>({
    queryKey: ["genres"],
    queryFn: () => genreService.getAll(),
    select: (data) => data.results,
    staleTime: ms('24h'),
    initialData: genres
  });

export default useGenres;
