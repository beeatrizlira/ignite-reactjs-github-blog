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
            style={{
              width: "148px",
              height: "148px",
              opacity: 0.3,
            }}
          />
          <div>
            <Skeleton
              baseColor="#3A536B"
              style={{
                width: "200px",
                height: "30px",
                opacity: 0.3,
              }}
            />

            <Skeleton
              baseColor="#3A536B"
              style={{
                width: "600px",
                height: "50px",
                opacity: 0.3,
              }}
            />
            <Skeleton
              baseColor="#3A536B"
              style={{
                opacity: 0.3,
                width: "300px",
                height: "18px",
              }}
            />
          </div>
        </div>
      </CardContainer>
    </article>
  );
};
