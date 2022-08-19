import React from "react";
import { LinkBox } from "../../components/linkBox/LinkBox";
import logo from "./assets/logo/logo.svg";
import styles from "./aeaQrCode.module.css";

const AeaQrCode = () => {
  const links = [
    {
      icon: "",
      linkName: "website",
      text: "Besuche unsere Webseite",
      link: "https://aea-dienste.de/",
    },
    {
      icon: "",
      linkName: "instagram",
      text: "Folge uns auf Instagram",
      link: "https://www.instagram.com/aea_dienste/",
    },
    {
      icon: "",
      linkName: "facebook",
      text: "Folge uns auf Facebook",
      link: "https://www.facebook.com/a.e.a.dienste/",
    },
    {
      icon: "",
      linkName: "whatsapp",
      text: "Schicke uns Nachricht",
      link: "https://api.whatsapp.com/send?phone=+4915174338815",
    },
  ];

  return (
    <div>
      <div className={`${styles.logo_container}`}> 
        <img src={logo} alt='' width={150} />
      </div>
      <div className={`${styles.link_container}`}>
        {links.map((link) => {
          return <LinkBox data={link} />;
        })}
      </div>
    </div>
  );
};

export default AeaQrCode;
