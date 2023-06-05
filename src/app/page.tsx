"use client";
import { PostCard } from "@/components/PostCard";
import { ProfileResume } from "@/components/ProfileResume";
import { ProfileResumeSkeleton } from "@/components/ProfileResume/ProfileResumeSkeleton";
import { SearchForm } from "@/components/SearchForm";
import { PostsContext } from "@/contexts/PostsContext";
import { UserData } from "@/interfaces/User";
import { GithubBlogAPI } from "@/services/api";
import "react-loading-skeleton/dist/skeleton.css";

import { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function Home() {
  const { posts, retrievePosts } = useContext(PostsContext);
  const githubBlogApi = new GithubBlogAPI();
  const [userData, setUserData] = useState({} as UserData);
  const [isLoading, setIsloading] = useState(true);

  const retrieveUserData = async () => {
    const { data } = await githubBlogApi.getUserData();
    setUserData(data);
  };

  const PostsSkeleton = Array(6)
    .fill("")
    .map((item, index) => (
      <li key={index} style={{ opacity: 0.3 }}>
        <Skeleton
          width="448px"
          height="292px"
          baseColor="#3A536B"
          style={{ opacity: 0.3 }}
        />
      </li>
    ));

  const handleFetchData = async () => {
    await retrieveUserData();
    await retrievePosts();
    setIsloading(false);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <main>
      {isLoading ? (
        <ProfileResumeSkeleton />
      ) : (
        <ProfileResume data={userData} />
      )}

      <SearchForm />
      <article>
        <ul>
          {isLoading
            ? PostsSkeleton
            : posts.map((post) => (
                <li key={post.number}>
                  <PostCard data={post} />
                </li>
              ))}
        </ul>
      </article>
    </main>
  );
}
