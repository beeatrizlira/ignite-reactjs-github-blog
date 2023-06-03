interface PostCardProps {
  data: Posts;
}

import { Posts } from "@/interfaces/Posts";
import { Utils } from "@/utils/utils";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { CardContainer } from "../CardContainer";
import styles from "./styles.module.scss";

export const PostCard = ({ data }: PostCardProps) => {
  const { body, created_at, title, number } = data;

  const actualDate = new Date();
  const postdate = new Date(created_at);

  const date = Utils.calcDateDifferenceInDays(postdate, actualDate);

  return (
    <CardContainer>
      <div className={styles.postContainer}>
        <div className={styles.info}>
          <h1>{title}</h1>
          <span>
            Há {date} {date === 1 ? "Dia" : "Dias"}
          </span>
        </div>

        <div className={styles.content}>
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      </div>
    </CardContainer>
  );
};
