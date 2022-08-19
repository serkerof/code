import React from "react";
import styles from "./linkBox.module.css";
import whatsappSvg from "./assets/icon/Whatsapp.svg";
import instagramSvg from "./assets/icon/Instagram.svg";
import facebookSvg from "./assets/icon/Facebook.svg";
import browserSvg from "./assets/icon/Browser.svg";

export const LinkBox = ({ data }) => {
  const { link, linkName, text } = data;

  return (
    <div className={`${styles.box_container}`}>
      {linkName === "whatsapp" ? (
        <a
          href={link}
          className={`${styles.whatsapp_container} ${styles.icon_container}`}
        >
          <img src={whatsappSvg} className={`${styles.icon}`} />
        </a>
      ) : linkName === "instagram" ? (
        <a
          href={link}
          className={`${styles.instagram_container} ${styles.icon_container}`}
        >
          <img src={instagramSvg} className={`${styles.icon}`} />
        </a>
      ) : linkName === "website" ? (
        <a
          href={link}
          className={`${styles.website_container} ${styles.icon_container}`}
        >
          <img src={browserSvg} className={`${styles.icon}`} />
        </a>
      ) : linkName === "facebook" ? (
        <a
          href={link}
          className={`${styles.facebook_container} ${styles.icon_container}`}
        >
          <img src={facebookSvg} className={`${styles.icon}`} />
        </a>
      ) : null}
      <div>
        <p className={`${styles.description}`}>{text}</p>
      </div>
    </div>
  );
};
