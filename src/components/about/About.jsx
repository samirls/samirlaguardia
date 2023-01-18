import React from "react"
import "./about.css"
import ME from "../../img/samir3.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"


const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

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
                            <h5>Experience</h5>
                            <small>Almost a Year of coding</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Focus on You</h5>
                            <small>Supply your personal request</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>Build things that adds value</small>
                        </article>
                    </div>

                    <p>
                        I'm curious and I pay attention to the details. I'll
                        try my best to bring some creativity to the project, 
                        making it modern, beautiful and useful. 
                        

                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About