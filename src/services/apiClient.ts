import axios, { type AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e5bd496df9da43dc957d0d2807589cd8",
  },
});

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(config?: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  }
}

export default APIClient;
