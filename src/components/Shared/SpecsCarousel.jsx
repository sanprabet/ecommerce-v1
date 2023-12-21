import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles/SpecsCarousel.scss';
import { Navigation } from 'swiper/modules';

import DeliveryLogo from "../../static/DeliveryIcon.svg"
import LegalHammer from "../../static/legal.svg"
import QualitySeal from "../../static/quality-seal.svg"
import CustomerService from "../../static/customer_service.svg"

const cardsData = [
    {id: 3, title: 'Pago Seguro', content: 'Compra segura con Mercado Pagos', img: QualitySeal},
    {id: 2, title: 'Legal en Colombia', content: 'Hasta 20 plantas de uso personal', img: LegalHammer},
    {id: 1, title: 'Desde 2016', content: 'Puntos fisicos en Bogota y Cali', img: DeliveryLogo},
    {id: 4, title: 'Asesorias 24/7', content: '10 años ayudandote con tu autocultivo', img: CustomerService},
]
  

export default function SpecsCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className="mySwiper w-11/12 my-5 px-6"
        modules={[Navigation]}
        navigation={true}
      >
        {cardsData.map((card) => (
            <SwiperSlide key={card.id}>
                <div className="card min-h-fit m-4 p-1 flex grow-0 shrink-0 basis-96 overflow-hidden cursor-pointer rounded-md bg-stone-200">
                    <div className="w-24 min-[320px]:w-16 p-1 flex justify-center items-center">
                      <img className="max-h-full my-0.5" src={card.img} alt="fast truck icon" />
                    </div>
                    <div className="w-2/3 px-4 flex flex-col justify-center">
                      <span className='font-bold text-lg min-[320px]:text-base'>{card.title}</span>
                      <span className='text-sm min-[320px]:text-sm'>{card.content}</span>
                    </div>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
