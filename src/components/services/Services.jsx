import React from "react"
import "./services.css"
import {BiCheck} from "react-icons/bi"
import { i18n } from "../../translate/i18n"

const Services = () => {
    return (
        <section id="services">
            <h5>{i18n.t("services.h5")}</h5>
            <h2>{i18n.t("services.h2")}</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Frontend</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>HTML.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>CSS.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Javascript.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>React.js.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Next.js.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Bootstrap.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Tailwind CSS.</p>
                        </li>
                    </ul>

                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Backend</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Node.js.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Express.js.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Mongoose.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>MongoDB.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Bcrypt.js.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>JSON Web Tokens.</p>
                        </li>
                    </ul>

                </article>

            </div>
        </section>
    )
}

export default Services