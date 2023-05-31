import headerBackgroundLeftImg from "@/assets/header-background-efect-left.svg";
import headerBackgroundRightImg from "@/assets/header-background-efect-right.svg";
import logoImg from "@/assets/logo.svg";

import Image from "next/image";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Image src={logoImg} alt="" priority className={styles.logo} />
      {/* <div className={styles["background-images"]}>
        <Image src={headerBackgroundLeftImg} alt="" />
        <Image src={headerBackgroundRightImg} alt="" />
      </div> */}
    </header>
  );
};
