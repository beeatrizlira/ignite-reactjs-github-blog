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
    formState: { errors, isSubmitting },
  } = useForm<SearchFormInputs>();

  const { posts } = useContext(PostsContext);
  const postsCount = posts.length;

  return (
    <form className={styles.searchFormContainer}>
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
        <button>
          <Image src={searchIcon} alt="" width={20} height={20} />
        </button>
      </div>
    </form>
  );
};
