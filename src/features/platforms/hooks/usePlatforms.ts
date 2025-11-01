import { useQuery } from "@tanstack/react-query";
import type { FetchResponse } from "../../../services/apiClient";
import ms from "ms";
import platformService from "../services/platformService";
import platformsData from "../data/platformsData";
import type Platform from "../entities/Platform";


const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error, Platform[]>({
    queryKey: ["platforms"],
    queryFn: () => platformService.getAll(),
    select: (data) => data.results,
    staleTime: ms('24h'),
    initialData: platformsData
  });

export default usePlatforms;
