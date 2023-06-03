"use client";
import { PostCard } from "@/components/PostCard";
import { ProfileResume } from "@/components/ProfileResume";
import { SearchForm } from "@/components/SearchForm";
import { Posts } from "@/interfaces/Posts";
import { UserData } from "@/interfaces/User";
import { GithubBlogAPI } from "@/services/api";

import { useEffect, useState } from "react";

export default function Home() {
  const githubBlogApi = new GithubBlogAPI();
  const [userData, setUserData] = useState({} as UserData);
  const [posts, setPosts] = useState<Posts[]>([]);

  const retrieveUserData = async () => {
    const { data } = await githubBlogApi.getUserData();
    setUserData(data);
  };

  const retrievePosts = async () => {
    const { data } = await githubBlogApi.getPosts();
    setPosts(data.items);
  };

  useEffect(() => {
    retrieveUserData();
    retrievePosts();
  }, []);

  return (
    <main>
      <ProfileResume data={userData} />
      <SearchForm />
      <article>
        {posts.map((post) => (
          <PostCard data={post} />
        ))}
      </article>
    </main>
  );
}
