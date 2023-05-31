import { ReactNode } from "react";

import styles from "./styles.module.scss";

export const CardContainer = ({ children }: { children: ReactNode }) => {
  return <div className={styles["card-container"]}>{children}</div>;
};
