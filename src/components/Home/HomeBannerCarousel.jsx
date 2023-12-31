import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import "./styles/HomeBannerCarousel.scss"

export default function HomeBannerCarousel({images}) {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true} 
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        >
                                                
        {images.map((hero) => (
            <SwiperSlide key={hero.id} className='flex justify-center'>
                <img src={hero.img} alt={hero.description} />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}