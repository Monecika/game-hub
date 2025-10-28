import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import platformService, {
  type Platform,
} from "../services/platforms/platformService";
import type { FetchResponse } from "../services/apiClient";

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error, Platform[]>({
    queryKey: ["platforms"],
    queryFn: () => platformService.getAll(),
    select: (data) => data.results,
    staleTime: 1000 * 60 * 60 * 24,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
