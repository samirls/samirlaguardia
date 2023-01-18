import React from "react"
import "./portfolio.css"
import IMG1 from "../../img/print-draRafaella.png"
import IMG2 from "../../img/print-form.png"
import IMG3 from "../../img/print-glasgow.png"
import IMG4 from "../../img/print-guia-trabalhista.png"
import IMG5 from "../../img/print-library.png"
import IMG6 from "../../img/print-movie-blog.png"
import IMG7 from "../../img/print-rock-paper-scissors.png"
import IMG8 from "../../img/print-speed-typing.png"
import IMG9 from "../../img/print-uber-driver.png"

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portifolio</h2>

            <div className="container portfolio__container">

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} />
                    </div>
                    <h3>Website for Dr. Rafaella</h3>
                    <h5>Website with blog I've made to my wife get more influence online.</h5>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/samirls/rafaellalaguardia" className="btn" target="_blank">GitHub</a>
                        <a href="https://samirls.github.io/rafaellalaguardia/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG2} />
                    </div>
                    <h3>Sign up Form</h3>
                    <h5>Webpage with Javascript to validate sign up form.</h5>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/samirls/sign-up-form" className="btn" target="_blank">GitHub</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3} />
                    </div>
                    <h3>Interactive Glasgow Scale</h3>
                    <h5>Webapp to calculate the answers
                    given by the user to tell him how to proceed accordingly
                    to the Glasgow Scale. Made to my Doctor wife as a hobby.
                    
                    </h5>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/samirls/glasgow" className="btn" target="_blank">GitHub</a>
                        <a href="https://samirls.github.io/glasgow/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG4} />
                    </div>
                    <h3>Employer Calculator</h3>
                    <h5>Webapp to calculate the charges and taxes 
                    you have to pay to hire a brazilian employee, 
                    according to the offered salary.
                    
                    </h5>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/samirls/calculadoraclt" className="btn" target="_blank">GitHub</a>
                        <a href="https://samirls.github.io/calculadoraclt/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG5} />
                    </div>
                    <h3>My Library</h3>
                    <h5>Webapp for you to organize the books you want to read
                        and already read. The books will be saved in the Local
                        storage in your browser. You can change the site colors, 
                        and add and remove books from your library.
                    </h5>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/samirls/library" className="btn" target="_blank">GitHub</a>
                        <a href="https://samirls.github.io/library/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG6} />
                    </div>
                    <h3>Webpage</h3>
                    <h5>Webpage I've made to train HTML and CSS.
                    </h5>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/samirls/admin-Dashboard" className="btn" target="_blank">GitHub</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG7} />
                    </div>
                    <h3>Play Rock, Paper and Scissors</h3>
                    <h5>Made this Webapp with Javascript.
                    </h5>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/samirls/rock-papaer-scissors" className="btn" target="_blank">GitHub</a>
                        <a href="https://samirls.github.io/rock-papaer-scissors/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG8} />
                    </div>
                    <h3>Speed Typing</h3>
                    <h5>Available only in english and for PCs, see how fast you can type
                        in your keyboard. Made with Javascript.
                    </h5>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/samirls/speedtyping" className="btn" target="_blank">GitHub</a>
                        <a href="https://samirls.github.io/speedtyping/index.html" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG9} />
                    </div>
                    <h3>React Webpage</h3>
                    <h5>Webpage made with React.JS.
                    </h5>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/samirls/uber-driver-react" className="btn" target="_blank">GitHub</a>
                        <a href="https://samirls.github.io/uber-driver-react/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>

            </div>
        </section>
    )
}

export default Portfolio