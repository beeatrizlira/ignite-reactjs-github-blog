import logoImg from "@/assets/icons/logo.svg";

import Image from "next/image";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Image src={logoImg} alt="" priority className={styles.logo} />
    </header>
  );
};
