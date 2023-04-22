import React from "react"
import "./portfolio.css"
import IMG1 from "../../img/print-draRafaella.png"
import IMG3 from "../../img/print-glasgow.png"
import IMG4 from "../../img/print-guia-trabalhista.png"
import IMG5 from "../../img/print-library.png"
import IMG6 from "../../img/print-movie-blog.png"
import IMG7 from "../../img/print-rock-paper-scissors.png"
import IMG8 from "../../img/print-speed-typing.png"
import IMG9 from "../../img/print-uber-driver.png"
import IMG10 from "../../img/print-cv-maker.png"
import IMG11 from "../../img/print-message-board.png"
import { i18n } from "../../translate/i18n"

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>{i18n.t("portfolio.h5")}</h5>
            <h2>{i18n.t("portfolio.h2")}</h2>

            <div className="container portfolio__container">

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} />
                    </div>
                    <h3>{i18n.t("portfolio.h31")}</h3>
                    <h5>{i18n.t("portfolio.h51")}</h5>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/samirls/rafaellalaguardia" className="btn" target="_blank">GitHub</a>
                        <a href="https://samirls.github.io/rafaellalaguardia/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3} />
                    </div>
                    <h3>{i18n.t("portfolio.h33")}</h3>
                    <h5>{i18n.t("portfolio.h53")}
                    
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
                    <h3>{i18n.t("portfolio.h34")}</h3>
                    <h5>{i18n.t("portfolio.h54")}
                    
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
                    <h3>{i18n.t("portfolio.h35")}</h3>
                    <h5>{i18n.t("portfolio.h55")}
                    </h5>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/samirls/library" className="btn" target="_blank">GitHub</a>
                        <a href="https://samirls.github.io/library/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG10} />
                    </div>
                    <h3>{i18n.t("portfolio.h32")}</h3>
                    <h5>{i18n.t("portfolio.h52")}
                    </h5>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/samirls/cv-maker" className="btn" target="_blank">GitHub</a>
                        <a href="https://samirls.github.io/cv-maker/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG7} />
                    </div>
                    <h3>{i18n.t("portfolio.h37")}</h3>
                    <h5>{i18n.t("portfolio.h57")}
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
                    <h3>{i18n.t("portfolio.h38")}</h3>
                    <h5>{i18n.t("portfolio.h58")}
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
                    <h3>{i18n.t("portfolio.h39")}</h3>
                    <h5>{i18n.t("portfolio.h59")}
                    </h5>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/samirls/uber-driver-react" className="btn" target="_blank">GitHub</a>
                        <a href="https://samirls.github.io/uber-driver-react/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG11} />
                    </div>
                    <h3>{i18n.t("portfolio.h310")}</h3>
                    <h5>{i18n.t("portfolio.h510")}
                    </h5>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/samirls/message-board-client" className="btn" target="_blank">GitHub</a>
                        <a href="https://samirls.github.io/message-board-client/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>

            </div>
        </section>
    )
}

export default Portfolio