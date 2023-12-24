import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import './styles/SpecsCarousel.scss';
import DeliveryLogo from "../../static/DeliveryIcon.svg"
import LegalHammer from "../../static/legal.svg"
import QualitySeal from "../../static/quality-seal.svg"
import CustomerService from "../../static/customer_service.svg"

const cardsData = [
    {id: 3, title: 'Pago Seguro', content: 'Compra segura con Mercado Pagos', icon: QualitySeal, icon_description: "Sello de Calidad"},
    {id: 2, title: 'Legal en Colombia', content: 'Hasta 20 plantas de uso personal', icon: LegalHammer, icon_description: "Plantas"},
    {id: 1, title: 'Desde 2016', content: 'Puntos fisicos en Bogota y Cali', icon: DeliveryLogo, icon_description: "Camion Entregas"},
    {id: 4, title: 'Asesorias 24/7', content: '10 años ayudandote con tu autocultivo', icon: CustomerService, icon_description: "25/7"},
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
        className="w-11/12 my-1 py-4 pb-5"
        modules={[Pagination]}
        pagination={true}
        style={{
          "--swiper-pagination-color": "#000000",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "6px"
        }}
      >
        {cardsData.map((card) => (
            <SwiperSlide key={card.id}>
                <div className="min-h-fit m-4 p-1 flex grow-0 shrink-0 basis-96 bg-stone-200 rounded-md cursor-pointer">
                    <div className="w-16 p-1 flex justify-center items-center">
                      <img className="max-h-full my-0.5" src={card.icon} alt={card.icon_description} />
                    </div>
                    <div className="w-2/3 px-4 flex flex-col justify-center">
                      <span className='font-bold text-base'>{card.title}</span>
                      <span className='text-sm'>{card.content}</span>
                    </div>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
