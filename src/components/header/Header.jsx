import React, { useState } from "react";
import "./header.css";
import ME from "../../img/samir-transparente-1.png";
import HeaderSocials from "./HeaderSocials";
import { Typewriter } from "react-simple-typewriter";
import { i18n } from "../../translate/i18n";
import CVSamirEN from "../../img/CV-Samir-EN.pdf";
import CVSamirPT from "../../img/CVSamir.pdf";

const Header = ({ handleLanguageChange, language }) => {
  const [isBroken, setIsBroken] = useState(false);
  return (
    <header>
      <div className="container header__container">
        <h5>{i18n.t("header.h5")}</h5>
        <div className="wall"></div>
        <h1>Samir Laguardia</h1>
        <Typewriter
          words={["Full Stack Developer", "Programmer", "Professional Coder"]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={20}
          delaySpeed={1000}
        />
        <div className="cta">
          <a
            href={language === "pt-BR" ? CVSamirPT : CVSamirEN}
            download
            id="btn"
            className="btn"
          >
            {i18n.t("cta.btn1")}
          </a>
          <a href="#contact" className="btn btn-primary">
            {i18n.t("cta.btn2")}
          </a>
        </div>
        <div>

        </div>

        <a id="changeBtn" onClick={handleLanguageChange}>
          {language === "pt-BR"
            ? "Change Language To English 🇺🇸"
            : "Mudar Língua para Português 🇧🇷"}
        </a>
      </div>
    </header>
  );
};

export default Header;
