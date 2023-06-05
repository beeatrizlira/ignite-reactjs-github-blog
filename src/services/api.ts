import { AxiosResponse } from "axios";

import Service from "./request";

export class GithubBlogAPI {
  getUserData = async (): Promise<AxiosResponse<any, any>> => {
    const endpoint = "users/beeatrizlira";
    return Service.get(endpoint);
  };

  getPosts = async (query = ""): Promise<AxiosResponse<any, any>> => {
    const endpoint = `search/issues?q=${query}is:issue repo:beeatrizlira/ignite-reactjs-github-blog`;
    return Service.get(endpoint);
  };

  getPost = async (postNumber: string): Promise<AxiosResponse<any, any>> => {
    const endpoint = `repos/beeatrizlira/ignite-reactjs-github-blog/issues/${postNumber}`;
    return Service.get(endpoint);
  };
}
