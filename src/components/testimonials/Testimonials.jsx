import React from "react"
import "./testimonials.css"
import AVTR1 from "../../img/rafaella-testimonial.jpg"
import USER from "../../img/user.png"
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="testimonial-picture" />
                    </div>
                        <h5 className="client__name">Rafaella Real</h5>
                        <small className="client__review">
                            I wanted a Website with a Blog for professional use.
                            As I'm a doctor, didn't want to use just my Instagram
                            for that purpose, I wanted to people to see me more
                            in a professional way, and to everyone in the Web to
                            see the information I post online and grow in the 
                            profession.The solution
                            that Samir gave me was great! Loved the Website he made
                            for me! It's simple yet modern and exclusive. He
                            listened to my claims and made it perfect as I wanted.
                            I recomend his work! 
                            
                        </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={USER} alt="testimonial-picture" />
                    </div>
                        <h5 className="client__name">White a testimonial too!</h5>
                        <small className="client__review">
                            This place is waiting for your testimonial!
                            
                        </small>
                </SwiperSlide>

            </Swiper>
        </section>
    )
}

export default Testimonials