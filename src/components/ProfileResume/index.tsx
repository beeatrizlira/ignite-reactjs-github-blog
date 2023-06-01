import companyIcon from "@/assets/icons/company-icon.svg";
import followersIcon from "@/assets/icons/followers-icon.svg";
import githubIcon from "@/assets/icons/github-icon.svg";
import linkIcon from "@/assets/icons/link-icon.svg";
import logo from "@/assets/logo.svg";

import Image from "next/image";

import { CardContainer } from "../CardContainer";
import styles from "./styles.module.scss";

interface ProfileResumeProps {
  data: {
    name: string;
    description: string;
    user: string;
    company: string;
    followersCount: number;
    imgHref: string;
    profileUrl: string;
  };
}

export const ProfileResume = ({ data }: ProfileResumeProps) => {
  const {
    company,
    description,
    followersCount,
    imgHref,
    name,
    user,
    profileUrl,
  } = data;

  return (
    <CardContainer>
      <div className={styles["profile-resume-container"]}>
        <div>
          <Image src={logo} alt="" width={148} height={148} />
        </div>

        <div className={styles["profile-resume-content"]}>
          <div className={styles.flex}>
            <h1>{name}</h1>
            <div>
              <a href={profileUrl} target="_blank">
                GITHUB <Image src={linkIcon} alt="" />
              </a>
            </div>
          </div>
          <p>{description}</p>

          <div className={styles.info}>
            <div>
              <Image src={githubIcon} alt="" />
              <span>{user}</span>
            </div>
            <div>
              <Image src={companyIcon} alt="" />
              <span>{company}</span>
            </div>
            <div>
              <Image src={followersIcon} alt="" />
              <span>{followersCount} seguidores</span>
            </div>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};
