import React from "react"
import "./header.css"
import CTA from "./CTA"
import ME from "../../img/samir-transparente-1.png"
import HeaderSocials from "./HeaderSocials"
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
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
                <CTA />

                <div><HeaderSocials /></div>
                <div className="me">
                    <img src={ME} alt="me" />
                    
                </div>
            </div>
        </header> 
    )
}

export default Header