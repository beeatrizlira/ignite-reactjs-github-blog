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
  retrievePosts: (query?: string) => Promise<void>;
  retrievePostByNumber: (number: string) => Promise<any>;
  isSearching: boolean;
}
export const PostsContext = createContext({} as TransactionContextType);

export function PostsProvider({ children }: { children: ReactNode }) {
  const githubBlogApi = new GithubBlogAPI();
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const retrievePosts = useCallback(async (query?: string) => {
    setIsSearching(true);
    const { data } = await githubBlogApi.getPosts(query);
    setPosts(data.items);
    setIsSearching(false);
  }, []);

  const retrievePostByNumber = useCallback(async (number: string) => {
    setIsSearching(true);
    const { data } = await githubBlogApi.getPost(number);
    setIsSearching(false);
    return data;
  }, []);

  return (
    <PostsContext.Provider
      value={{
        isSearching,
        posts,
        retrievePosts,
        retrievePostByNumber,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}
