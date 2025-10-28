import APIClient from "../apiClient";
import type { Platform } from "../platforms/platformService";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

export default new APIClient<Game>("/games");