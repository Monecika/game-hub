import { useQuery } from "@tanstack/react-query";
import platforms from "../../data/platforms";
import ms from 'ms'
import type { FetchResponse } from "../../services/apiClient";
import platformService, { type Platform } from "../../services/platforms/platformService";


const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error, Platform[]>({
    queryKey: ["platforms"],
    queryFn: () => platformService.getAll(),
    select: (data) => data.results,
    staleTime: ms('24h'),
    initialData: platforms
  });

export default usePlatforms;
