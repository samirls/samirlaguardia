import React from "react"
import "./contact.css"
import {AiOutlineMail} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"
import {ImWhatsapp} from "react-icons/im"
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_6yl5hyc', 'template_71yjkud', form.current, 'eBW7SL1WD1f_2KGb8')
        .then(function() {
            alert('Message sent successfully!');
            
         }, function() {
            console.log('Something went wrong, please try again.');
         });
         e.target.reset()
      };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>samirlaguardiaii@gmail.com</h5>
                        <a href="mailto:samirlaguardiaii@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <ImWhatsapp className="contact__option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+5527997761863</h5>
                        <a href="https://api.whatsapp.com/send?phone=5527997761863" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsLinkedin className="contact__option-icon"/>
                        <h4>LinkedIn</h4>
                        <h5>samir-laguardia</h5>
                        <a href="https:www.linkedin.com/in/samir-laguardia" target="_blank">Send a message</a>
                    </article>
                </div>
                {/* ===== FORM ===== */}
                <form ref={form} onSubmit={sendEmail}>
                    <div>Or send a message right now here:</div>
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <textarea name="message" rows="7" placeholder="Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact