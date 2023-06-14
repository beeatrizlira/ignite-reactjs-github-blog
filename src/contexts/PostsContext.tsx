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
  retrievePosts: (query: string, page?: number) => Promise<void>;
  retrievePostByNumber: (number: string) => Promise<any>;
  isSearching: boolean;
  totalCount: number;
}
export const PostsContext = createContext({} as TransactionContextType);

export function PostsProvider({ children }: { children: ReactNode }) {
  const githubBlogApi = new GithubBlogAPI();
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const retrievePosts = useCallback(async (query?: string, page = 1) => {
    try {
      setIsSearching(true);
      const { data } = await githubBlogApi.getPosts(query, page);
      setPosts(data.items);
      setTotalCount(data.total_count);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSearching(false);
    }
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
        totalCount,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}
