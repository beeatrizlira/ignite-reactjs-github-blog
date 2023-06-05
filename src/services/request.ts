import axios, { AxiosInstance } from "axios";

interface Params {
  baseUrl: string;
  headers?: any;
  method: string;
}

class Service {
  service: AxiosInstance;

  constructor() {
    const service = axios.create();
    this.service = service;
  }

  config: Params = {
    baseUrl: "https://api.github.com",
    method: "get",
    headers: {
      Authorization:
        "Bearer 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",
    },
  };

  get = async (endpoint: string, requestParams?: any): Promise<any> => {
    const params = requestParams || "";
    return axios({
      ...this.config,
      url: `${this.config.baseUrl}/${endpoint}${params}`,
    })
      .then((response) => {
        return {
          status: response.status,
          data: response.data,
        };
      })
      .catch((error) => {
        return {
          status: error.status,
          data: error.response,
        };
      });
  };
}

export default new Service();
