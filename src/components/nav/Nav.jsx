import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import { AiOutlineExperiment } from "react-icons/ai";
import { FaPeopleArrows } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { i18n } from "../../translate/i18n";


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <nav>
        <div className="navTitle">{i18n.t("nav.click")}</div>
        <div className="navLinks">
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          <GiGiftOfKnowledge />
        </a>
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <AiOutlineExperiment />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
