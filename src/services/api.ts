import { AxiosResponse } from "axios";

import Service from "./request";

export class GithubBlogAPI {
  getUserData = async (): Promise<AxiosResponse<any, any>> => {
    const endpoint = "users/beeatrizlira";
    return Service.get(endpoint);
  };
}
