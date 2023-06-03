"use client";
import { Posts } from "@/interfaces/Posts";
import { GithubBlogAPI } from "@/services/api";

import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

interface TransactionContextType {
  posts: Posts[];
  retrievePosts: () => Promise<void>;
}
export const PostsContext = createContext({} as TransactionContextType);

export function PostsProvider({ children }: { children: ReactNode }) {
  const githubBlogApi = new GithubBlogAPI();
  const [posts, setposts] = useState<Posts[]>([]);

  const retrievePosts = useCallback(async () => {
    const { data } = await githubBlogApi.getPosts();
    setposts(data.items);
  }, []);

  useEffect(() => {
    retrievePosts();
  }, [retrievePosts]);

  return (
    <PostsContext.Provider
      value={{
        posts,
        retrievePosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}
