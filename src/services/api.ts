import { AxiosResponse } from "axios";

import Service from "./request";

export class GithubBlogAPI {
  getUserData = async (): Promise<AxiosResponse<any, any>> => {
    const endpoint = "users/beeatrizlira";
    return Service.get(endpoint);
  };

  getPosts = async (query = "", page = 1): Promise<AxiosResponse<any, any>> => {
    const endpoint = `search/issues?q=${query}repo:beeatrizlira/ignite-reactjs-github-blog&per_page=4&page=${page}`;
    return Service.get(endpoint);
  };

  getPost = async (postNumber: string): Promise<AxiosResponse<any, any>> => {
    const endpoint = `repos/beeatrizlira/ignite-reactjs-github-blog/issues/${postNumber}`;
    return Service.get(endpoint);
  };
}
