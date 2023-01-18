import React from "react"
import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
    return (
        <section id="services">
            <h5>Deep Into My Knowledge</h5>
            <h2>Knowledge and Abilities</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Javascript</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Functions and Arguments.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Access and Modify Arrays.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Global Scope and Local Scope.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Iterate with Loops.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>ES6.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Classes.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Object Oriented Programming.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>React Props, UseState, Routes, Components, Events, Icons.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Debugging.</p>
                        </li>

                    </ul>

                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Box Model.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>HTML forms.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Responsive Websites.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Media queries and pseudo selectors.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Flexbox.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>GRID.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>CSS positioning.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>CSS variables.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Animation, Transform and Keyframes.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>The Data Analytics.</p>
                        </li>
                    </ul>

                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Color Psychology.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Color Schemes.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Converting Users.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Design to Reflect The Importance of The Content.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Typography and Shapes.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Responsive WebDesign.</p>
                        </li>

                    </ul>

                </article>
            </div>
        </section>
    )
}

export default Services