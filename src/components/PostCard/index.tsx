interface PostCardProps {
  data: {
    title: string;
    date: string;
    content: string;
  };
}

import { CardContainer } from "../CardContainer";
import styles from "./styles.module.scss";

export const PostCard = ({ data }: PostCardProps) => {
  const { content, date, title } = data;
  return (
    <CardContainer>
      <div className={styles.postContainer}>
        <div>
          <h1>{title}</h1>
          <span>{date}</span>
        </div>

        <p>{content}</p>
      </div>
    </CardContainer>
  );
};
