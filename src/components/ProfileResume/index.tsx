import companyIcon from "@/assets/icons/company-icon.svg";
import followersIcon from "@/assets/icons/followers-icon.svg";
import githubIcon from "@/assets/icons/github-icon.svg";
import linkIcon from "@/assets/icons/link-icon.svg";
import { UserData } from "@/interfaces/User";

import Image from "next/image";
import { memo } from "react";

import { CardContainer } from "../CardContainer";
import styles from "./styles.module.scss";
interface ProfileResumeProps {
  data: UserData;
}

const ProfileResumeComponent = ({ data }: ProfileResumeProps) => {
  const { company, bio, followers, avatar_url, login, name, html_url } = data;

  return (
    <article className={styles["profile-resume-container"]}>
      <CardContainer>
        <div className={styles["profile-resume-content"]}>
          <div className={styles.image}>
            <Image src={avatar_url} alt="" width={148} height={148} />
          </div>

          <div className={styles.flex}>
            <h1>{name}</h1>
            <div>
              <a href={html_url} target="_blank">
                GITHUB <Image src={linkIcon} alt="" />
              </a>
            </div>
          </div>
          <p className={styles.bio}>{bio}</p>
          <div className={styles.info}>
            <div>
              <Image src={githubIcon} alt="" />
              <span>{login}</span>
            </div>
            <div>
              <Image src={companyIcon} alt="" />
              <span>{company}</span>
            </div>
            <div>
              <Image src={followersIcon} alt="" />
              <span>{followers} seguidores</span>
            </div>
          </div>
        </div>
      </CardContainer>
    </article>
  );
};

export const ProfileResume = memo(ProfileResumeComponent);
