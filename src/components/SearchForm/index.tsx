"use client";
import searchIcon from "@/assets/icons/search-icon.svg";
import { PostsContext } from "@/contexts/PostsContext";

import Image from "next/image";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import styles from "./styles.module.scss";
interface SearchFormInputs {
  query: string;
}

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>();

  const { posts, retrievePosts } = useContext(PostsContext);
  const postsCount = posts.length;

  const onSubmit = async (data: SearchFormInputs) => {
    retrievePosts(data.query);
  };

  return (
    <form
      className={styles.searchFormContainer}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <span>Publicações</span>
        <span>
          {postsCount} {postsCount === 1 ? "publicação" : "publicações"}
        </span>
      </div>

      <div>
        <input
          type="text"
          {...register("query")}
          placeholder="Buscar counteúdo"
        />
        <button type="submit" disabled={isSubmitting}>
          <Image src={searchIcon} alt="" width={20} height={20} />
        </button>
      </div>
    </form>
  );
};
