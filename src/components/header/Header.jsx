import React, { useState } from "react";
import "./header.css"
import ME from "../../img/samir-transparente-1.png"
import HeaderSocials from "./HeaderSocials"
import { Typewriter } from 'react-simple-typewriter'
import { i18n } from "../../translate/i18n"
import CVSamirEN from "../../img/CV-Samir-EN.pdf"
import CVSamirPT from "../../img/CVSamir.pdf"



const Header = () => {

    const i18nStorageKey = "i18nextLng";

    const [language, setLanguage] = useState(localStorage.i18nextLng);

    function handleLanguageChange() {
        const newLanguage = language === "pt-BR" ? "en-US" : "pt-BR";
        localStorage.setItem(i18nStorageKey, newLanguage);
        setLanguage(newLanguage);
        window.location.reload();
      }

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
                    <a href={language === "pt-BR" ? CVSamirPT : CVSamirEN} download id="btn" className='btn'>{i18n.t("cta.btn1")}</a>
                    <a href="#contact" className='btn btn-primary'>{i18n.t("cta.btn2")}</a>
                </div>
                <div><HeaderSocials /></div>
                <div className="me">
                    <img src={ME} alt="me" />
                    
                </div>
                <a id="changeBtn" onClick={handleLanguageChange}>{language === "pt-BR"
            ? "Change Language To English 🇺🇸"
            : "Mudar Língua para Português 🇧🇷"}</a>

            </div>
        </header> 
    )
}

export default Header


/*
Suggestions to improve the code:

1 - Refactor the changeLanguage function to use state instead of local storage. This way you can manage the language state within your component.
3 - Move the languageState function outside the component and into a custom hook.
4 - Use a constant for the storage key i18nStorageKey instead of a string literal.
5 - Use destructuring to access the i18n object's t method, this makes it easier to see what's being passed to the t method.
6 - Avoid using DOM manipulation methods such as document.getElementById, instead use React state and hooks to manage the component's state.
7 - Use useEffect hook with dependencies to prevent unnecessary re-renders.
*/