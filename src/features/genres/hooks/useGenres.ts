import { useQuery } from "@tanstack/react-query";
import ms from 'ms'
import genresData from "../data/genresData";
import genreService from "../services/genreService";
import { type Genre } from "../entities/Genre";
import type { FetchResponse } from "../../../services/apiClient";


const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error, Genre[]>({
    queryKey: ["genres"],
    queryFn: () => genreService.getAll(),
    select: (data) => data.results,
    staleTime: ms('24h'),
    initialData: genresData
  });

export default useGenres;
