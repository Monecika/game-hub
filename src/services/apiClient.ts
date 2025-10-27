import axios from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e5bd496df9da43dc957d0d2807589cd8",
  },
});

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

getAll = (params?: Record<string, unknown>) => {
  return axiosInstance
    .get<FetchResponse<T>>(this.endpoint, { params })
    .then((res) => res.data.results);
};

}

export default APIClient;
