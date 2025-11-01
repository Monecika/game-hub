import APIClient from "../../../services/apiClient";
import type { Genre } from "../entities/Genre";

export default new APIClient<Genre>("/genres");