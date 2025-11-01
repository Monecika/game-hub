import APIClient from "../../../services/apiClient";
import type { Game } from "../entities/Game";

export default new APIClient<Game>("/games"); 