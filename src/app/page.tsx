"use client";
import { PostCard } from "@/components/PostCard";
import { ProfileResume } from "@/components/ProfileResume";
import { SearchForm } from "@/components/SearchForm";
import { UserData } from "@/interfaces/User";
import { GithubBlogAPI } from "@/services/api";

import { useEffect, useState } from "react";

const posts = [
  {
    id: 1,
    title: "JavaScript data types and data structures",
    date: "1 dia",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
  {
    id: 2,
    title: "JavaScript data types and data structures",
    date: "1 dia",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
  {
    id: 3,
    title: "JavaScript data types and data structures",
    date: "1 dia",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
  {
    id: 4,
    title: "JavaScript data types and data structures",
    date: "1 dia",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
  {
    id: 5,
    title: "JavaScript data types and data structures",
    date: "1 dia",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
  {
    id: 6,
    title: "JavaScript data types and data structures",
    date: "1 dia",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
];

export default function Home() {
  const githubBlogApi = new GithubBlogAPI();
  const [userData, setUserData] = useState({} as UserData);

  const retrieveUserData = async () => {
    const { data } = await githubBlogApi.getUserData();
    setUserData(data);
  };

  useEffect(() => {
    retrieveUserData();
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
