import React from "react"
import "./footer.css"
import {AiOutlineMail} from "react-icons/ai"
import {GrInstagram} from "react-icons/gr"
import {ImWhatsapp} from "react-icons/im"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

const Footer = () => {
    return (
        <footer>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Knowledge and Abilities</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="mailto:samirlaguardiaii@gmail.com" target="_blank"><AiOutlineMail/></a>
                <a href="https://api.whatsapp.com/send?phone=5527997761863" target="_blank"><ImWhatsapp/></a>
                <a href="https://ig.me/m/samir.laguardia" target="_blank"><GrInstagram/></a>
                <a href="https:www.linkedin.com/in/samir-laguardia" target="_blank"><BsLinkedin /></a>
                <a href="https://github.com/samirls" target="_blank"><FaGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer