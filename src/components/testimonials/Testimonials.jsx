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
// Import language
import { i18n } from "../../translate/i18n"



const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>{i18n.t("testimonials.h5")}</h5>
            <h2>{i18n.t("testimonials.h2")}</h2>

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
                        <h5 className="client__name">Rafaella Laguardia</h5>
                        <small className="client__review">
                        {i18n.t("testimonials.small")}
                            
                        </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={USER} alt="testimonial-picture" />
                    </div>
                        <h5 className="client__name">{i18n.t("testimonials.h52")}</h5>
                        <small className="client__review">
                        {i18n.t("testimonials.small2")}
                            
                        </small>
                </SwiperSlide>

            </Swiper>
        </section>
    )
}

export default Testimonials