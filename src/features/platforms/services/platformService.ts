import APIClient from "../../../services/apiClient";
import type Platform from "../entities/Platform";

export default new APIClient<Platform>("/platforms/lists/parents");