import React from 'react'
import "./Testimonials.css"
import AV1 from "../../assets/avatar.jpg"
import AV2 from "../../assets/avatar2.jpg"
import AV3 from "../../assets/avatar3.jpg"

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  return (
    <section>
      <h5>Review/Testimonials</h5>
      <h2>Kinda same</h2>
      <Swiper className="container testimonials__container"
        modules={ Pagination }
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AV1} alt="AvatarOne" />
          </div>
          <h5 className='client__name'>Google</h5>
            <small className='client__review'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. 
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AV2} alt="AvatarOne" />
          </div>
          <h5 className='client__name'>Facebook</h5>
            <small className='client__review'>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum. 
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AV3} alt="AvatarOne" />
          </div>
          <h5 className='client__name'>Razer</h5>
            <small className='client__review'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials