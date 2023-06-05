"use client";
import { Posts } from "@/interfaces/Posts";
import { GithubBlogAPI } from "@/services/api";
import { AxiosResponse } from "axios";

import {
  ReactNode,
  createContext,
  use,
  useCallback,
  useEffect,
  useState,
} from "react";

interface TransactionContextType {
  posts: Posts[];
  retrievePosts: () => Promise<void>;
  retrievePostByNumber: (number: string) => Promise<any>;
}
export const PostsContext = createContext({} as TransactionContextType);

export function PostsProvider({ children }: { children: ReactNode }) {
  const githubBlogApi = new GithubBlogAPI();
  const [posts, setPosts] = useState<Posts[]>([]);

  const retrievePosts = useCallback(async () => {
    const { data } = await githubBlogApi.getPosts();
    setPosts(data.items);
  }, []);

  const retrievePostByNumber = useCallback(async (number: string) => {
    const { data } = await githubBlogApi.getPost(number);
    return data;
  }, []);

  return (
    <PostsContext.Provider
      value={{
        posts,
        retrievePosts,
        retrievePostByNumber,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}
