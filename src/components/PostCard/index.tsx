interface PostCardProps {
  data: Posts;
}

import { Posts } from "@/interfaces/Posts";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { CardContainer } from "../CardContainer";
import styles from "./styles.module.scss";

export const PostCard = ({ data }: PostCardProps) => {
  const { body, created_at, title } = data;
  return (
    <CardContainer>
      <div className={styles.postContainer}>
        <div>
          <h1>{title}</h1>
          <span>{created_at}</span>
        </div>

        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </CardContainer>
  );
};
