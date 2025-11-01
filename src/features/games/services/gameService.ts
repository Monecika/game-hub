import APIClient from "../../../services/apiClient";
import type { Platform } from "../../platforms/services/platformService";

export interface Game {
  id: number;
  name: string;
  slug: string; 
  description: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

export default new APIClient<Game>("/games"); 