import React from "react"
import "./about.css"
import ME from "../../img/samir3.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
import { i18n } from "../../translate/i18n"


const About = () => {

    return (
        <section id="about">
            <h5>{i18n.t("about.h51")}</h5>
            <h2>{i18n.t("about.h2")}</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>{i18n.t("about.h52")}</h5>
                            <small>{i18n.t("about.small1")}</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>{i18n.t("about.h53")}</h5>
                            <small>{i18n.t("about.small2")}</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>{i18n.t("about.h54")}</h5>
                            <small>{i18n.t("about.small3")}</small>
                        </article>
                    </div>

                    <p>
                    {i18n.t("about.p")}
                        

                    </p>

                    <a href="#contact" className="btn btn-primary">{i18n.t("about.a")}</a>
                </div>
            </div>

        </section>
    )
}

export default About