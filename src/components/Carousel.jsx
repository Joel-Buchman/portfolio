import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import ReactDOM from 'react-dom';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverFlow, pagination, navigation } from 'swiper/react';

import slide_image_1 from "../../src/img/captainA.jpg";
import slide_image_2 from "../../src/img/batman.jpg";
import slide_image_3 from "../../src/img/deadpool.jpg";
import slide_image_4 from "../../src/img/fallout.jpg";
import slide_image_5 from "../../src/img/bluesky.jpg";
import slide_image_6 from "../../src/img/city.png";
import slide_image_7 from "../../src/img/destruction.jpg";
/*import { IconBase } from 'react-icons';*/




function Carousel() {
    return <div className='w-full flex-col h-screen bg-[#0a192f] justify-center items-center p-14'>

        <div className='p-20 justify-center'>

            <h1 className="heading text-4xl text-center text-white">My Gallery</h1>
        </div>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'3'}
            lazyLoading={'true'}
            coverflowEffect={
                {
                    rotate: 50,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: true,
                }}
               
            pagination={{ el: 'swiper-pagination', clickable: true }}
            navigation={{
                nextEl: 'swiper-button-next',
                prevEl: 'swiper-button-prev',
                clickable: true,
            }}
            className='swiper_container w-[1200px] h-full'
        >
            <SwiperSlide>
                <img src={slide_image_1} alt='slide_image' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide_image_2} alt='slide_image' />
            </SwiperSlide>
            <SwiperSlide>

                <img src={slide_image_3} alt='slide_image' />
            </SwiperSlide>
            <SwiperSlide>

                <img src={slide_image_4} alt='slide_image' />
            </SwiperSlide>
            <SwiperSlide>

                <img src={slide_image_5} alt='slide_image' />
            </SwiperSlide>
            <SwiperSlide>

                <img src={slide_image_6} alt='slide_image' />
            </SwiperSlide>
            <SwiperSlide>

                <img src={slide_image_7} alt='slide_image' />
            </SwiperSlide>

            <div className="slider-controller">
                <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </Swiper>
    </div>
}

export default Carousel;