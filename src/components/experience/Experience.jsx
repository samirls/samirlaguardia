import React from "react"
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"
import { i18n } from "../../translate/i18n"

const Experience = () => {
    return (
        <section id="experience">
            <h5>{i18n.t("experience.h5")}</h5>
            <h2>{i18n.t("experience.h2")}</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>{i18n.t("experience.h3")}</h3>
                        <div className="experience__content">
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon"/>
                                <div>
                                    <h4>HTML</h4>
                                    <small className="text-light">{i18n.t("experience.small1")}</small>
                                </div>
                            </article>    
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon"/>
                                <div>
                                    <h4>CSS</h4>
                                    <small className="text-light">{i18n.t("experience.small2")}</small>
                                </div>
                            </article>    
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon"/>
                                <div>
                                    <h4>Javascript</h4>
                                    <small className="text-light">{i18n.t("experience.small3")}</small>
                                </div>
                            </article>    
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon"/>
                                <div>
                                    <h4>React</h4>
                                    <small className="text-light">{i18n.t("experience.small4")}</small>
                                </div>
                            </article>        
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon"/>
                                <div>
                                    <h4>Git</h4>
                                    <small className="text-light">{i18n.t("experience.small5")}</small>
                                </div>
                            </article>    
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon"/>
                                <div>
                                    <h4>GitHub</h4>
                                    <small className="text-light">{i18n.t("experience.small6")}</small>
                                </div>
                            </article>    
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Experience