import { CardContainer } from "@/components/CardContainer";

import Skeleton from "react-loading-skeleton";

import styles from "./styles.module.scss";
export const ProfileResumeSkeleton = () => {
  return (
    <article>
      <CardContainer>
        <div className={styles.container}>
          <Skeleton
            baseColor="#3A536B"
            className={styles.skeleton}
            style={{
              width: "148px",
              height: "148px",
              opacity: 0.3,
              maxWidth: "100%",
            }}
          />
          <div>
            <Skeleton baseColor="#3A536B" className={styles.skeleton} />
            <Skeleton baseColor="#3A536B" className={styles.skeleton} />
            <Skeleton baseColor="#3A536B" className={styles.skeleton} />
          </div>
        </div>
      </CardContainer>
    </article>
  );
};
