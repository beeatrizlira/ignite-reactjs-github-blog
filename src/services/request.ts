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
      authorization: "token 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",
    },
  };

  get = async (endpoint: string, requestParams?: any): Promise<any> => {
    const params = requestParams || "";
    return axios({
      ...this.config,
      url: `${this.config.baseUrl}/${endpoint}${params}`,
    })
      .then((response) => {
        console.log(response);
        return {
          status: response.status,
          data: response.data,
        };
      })
      .catch((error) => {
        console.log(error);
        return {
          status: error.status,
          data: error.response,
        };
      });
  };
}

export default new Service();
