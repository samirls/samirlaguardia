import React from "react"
import "./header.css"
import ME from "../../img/samir-transparente-1.png"
import HeaderSocials from "./HeaderSocials"
import { Typewriter } from 'react-simple-typewriter'
import { i18n } from "../../translate/i18n"
import { useEffect } from "react"; 
import CVSamirEN from "../../img/CV-Samir-EN.pdf"
import CVSamirPT from "../../img/CVSamir.pdf"

const I18N_STORAGE_KEY = "i18nextLng";

const Header = () => {

    function languageState() {
        if (localStorage.i18nextLng == "pt-BR") {
            document.getElementById("changeBtn").innerText = "Change Language To English 🇺🇸";
            document.getElementById("btn").href = CVSamirPT;
        }
        if (localStorage.i18nextLng == "en-US") {
            document.getElementById("changeBtn").innerText = "Mudar Língua para Português 🇧🇷";
            document.getElementById("btn").href = CVSamirEN;
        }
    }

    useEffect(() => {
        let ignore = false;
        
        if (!ignore)  languageState()
        return () => { ignore = true; }
        },[]);
       

    function changeLanguage() {
        if (localStorage.i18nextLng == "pt-BR") {
            return [localStorage.setItem(I18N_STORAGE_KEY, "en-US"), 
             window.location.reload()];
        }
        if (localStorage.i18nextLng == "en-US") {
            return [localStorage.setItem(I18N_STORAGE_KEY, "pt-BR"),  
             window.location.reload()];
    }}

    return (
        <header>
            <div className="container header__container">
                <h5>{i18n.t("header.h5")}</h5>
                <h1>Samir</h1>
                <Typewriter
                words={['Frontend Developer', 'Web Designer', 'Profissional Coder']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={20}
                delaySpeed={1000}
                />
                <div className="cta">
                    <a href={6} download id="btn" className='btn'>{i18n.t("cta.btn1")}</a>
                    <a href="#contact" className='btn btn-primary'>{i18n.t("cta.btn2")}</a>
                </div>
                <div><HeaderSocials /></div>
                <div className="me">
                    <img src={ME} alt="me" />
                    
                </div>
                <a id="changeBtn" onClick={changeLanguage}>Change Language</a>

            </div>
        </header> 
    )
}

export default Header