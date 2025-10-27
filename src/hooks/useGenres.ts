import { useQuery } from "@tanstack/react-query";
import genresService from "../services/genres/genresService";
import genres from "../data/genres";

const useGenres = () => useQuery({
  queryKey: ["genres"],
  queryFn: genresService.getAll,
  staleTime: 1000 * 60 * 60 * 24,
  initialData: genres
});

export default useGenres;
