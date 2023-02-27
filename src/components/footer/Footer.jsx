import React from "react"
import "./footer.css"
import {AiOutlineMail} from "react-icons/ai"
import {GrInstagram} from "react-icons/gr"
import {ImWhatsapp} from "react-icons/im"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import { i18n } from "../../translate/i18n"

const Footer = () => {

    return (
        <footer>
            <ul className="permalinks">
                <li><a href="#">{i18n.t("footer.a1")}</a></li>
                <li><a href="#about">{i18n.t("footer.a2")}</a></li>
                <li><a href="#experience">{i18n.t("footer.a3")}</a></li>
                <li><a href="#services">{i18n.t("footer.a4")}</a></li>
                <li><a href="#portfolio">{i18n.t("footer.a5")}</a></li>
                <li><a href="#testimonials">{i18n.t("footer.a6")}</a></li>
                <li><a href="#contact">{i18n.t("footer.a7")}</a></li>
            </ul>

            <div className="footer__socials">
                <a href="mailto:samirlaguardiaii@gmail.com" target="_blank"><AiOutlineMail/></a>
                <a href="https://api.whatsapp.com/send?phone=5527997761863" target="_blank"><ImWhatsapp/></a>
                <a href="https://ig.me/m/samir.laguardia" target="_blank"><GrInstagram/></a>
                <a href="https:www.linkedin.com/in/samir-laguardia" target="_blank"><BsLinkedin /></a>
                <a href="https://github.com/samirls" target="_blank"><FaGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy;{i18n.t("footer.copy")}</small>
            </div>
        </footer>
    )
}

export default Footer