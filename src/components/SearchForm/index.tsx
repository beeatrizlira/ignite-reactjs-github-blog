"use client";
import searchIcon from "@/assets/icons/search-icon.svg";

import Image from "next/image";
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

  return (
    <form className={styles.searchFormContainer}>
      <div>
        <span>Publicações</span>
        <span>6 publicações</span>
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
