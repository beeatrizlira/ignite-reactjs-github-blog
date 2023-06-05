"use client";
import { PostCard } from "@/components/PostCard";
import { ProfileResume } from "@/components/ProfileResume";
import { SearchForm } from "@/components/SearchForm";
import { PostsContext } from "@/contexts/PostsContext";
import { UserData } from "@/interfaces/User";
import { GithubBlogAPI } from "@/services/api";

import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { posts, retrievePosts } = useContext(PostsContext);
  const githubBlogApi = new GithubBlogAPI();
  const [userData, setUserData] = useState({} as UserData);

  const retrieveUserData = async () => {
    const { data } = await githubBlogApi.getUserData();
    setUserData(data);
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
