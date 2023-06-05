"use client";
import calendarIcon from "@/assets/icons/calendar-icon.svg";
import commentsIcon from "@/assets/icons/comments-icon.svg";
import githubIcon from "@/assets/icons/github-icon.svg";
import linkIcon from "@/assets/icons/link-icon.svg";
import { CardContainer } from "@/components/CardContainer";
import { PostsContext } from "@/contexts/PostsContext";
import { Post as PostType } from "@/interfaces/Posts";
import { Utils } from "@/utils/utils";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import styles from "./styles.module.scss";

export default function Post() {
  const [postData, setPostData] = useState({} as PostType);
  const { title, comments, created_at, html_url, user, body } = postData;
  const { retrievePostByNumber } = useContext(PostsContext);
  const params = useParams();
  const { id } = params;
  const date = Utils.calcDateDifferenceInDays(new Date(created_at), new Date());

  const retrievePostData = async () => {
    const data = await retrievePostByNumber(id);
    setPostData(data);
  };

  useEffect(() => {
    retrievePostData();
  }, []);

  return (
    <article className={styles.container}>
      <CardContainer>
        <div className={styles.header}>
          <div className={styles.links}>
            <Link href="/">{"<"} Voltar</Link>
            <a href={html_url} target="_blank">
              Ver no github <Image src={linkIcon} alt="" />
            </a>
          </div>
          <div>
            <h1>{title}</h1>
            <div className={styles.info}>
              <div>
                <Image src={githubIcon} alt="" />
                <span>{user?.login}</span>
              </div>
              <div>
                <Image src={calendarIcon} alt="" />
                <span>
                  Há {date} {date === 1 ? "dia" : "dias"}
                </span>
              </div>
              <div>
                <Image src={commentsIcon} alt="" />
                <span>
                  {comments} {comments === 1 ? "comentário" : "comentários"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContainer>

      <div className={styles.content}>
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </article>
  );
}
