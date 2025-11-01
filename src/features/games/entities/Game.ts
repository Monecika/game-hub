import type { Platform } from "../../platforms/entities/Platform";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}
