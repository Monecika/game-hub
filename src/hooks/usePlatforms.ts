import { useQuery } from "@tanstack/react-query";
import platformsService from "../services/platforms/platformsService";
import platforms from "../data/platforms";

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: platformsService.getAll,
    staleTime: 1000 * 60 * 60 * 24 * 7,
    initialData: platforms
})

export default usePlatforms;