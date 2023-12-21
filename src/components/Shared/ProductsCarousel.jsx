import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles/SpecsCarousel.scss';
import { Navigation, Pagination } from 'swiper/modules';

import PlusIcon from "../../static/plus-icon.svg"

import ApplePipe from "../../static/Products/ApplePipe.png"
import BigGlassBong from "../../static/Products/BigGlassBong.png"
import BigHeartsBong from "../../static/Products/BigHeartsBong.png"
import BigWeedPatternBong from "../../static/Products/BigWeedPatternBong.png"
import MediumBudLightBong from "../../static/Products/MediumBudLightBong.png"
import MediumGlassBong from "../../static/Products/MediumGlassBong.png"

const products = [
    {id: 1, name: 'Pipa "Manzana" 15cm', price: "25.000", category: 'Pipas', img: ApplePipe},
    {id: 3, name: 'Bong "Crystal" 80cm', price: "150.000", category: 'Bongs', img: BigGlassBong},
    {id: 4, name: 'Bong "Hearts" 70cm ', price: "110.000", category: 'Bongs', img: BigHeartsBong},
    {id: 5, name: 'Bong "Weed" 75cm' , price: "80.000", category: 'Bongs', img: BigWeedPatternBong},
    {id: 6, name: 'Bong "Bud Light" 50cm', price: "60.000", category: 'Bongs', img: MediumBudLightBong},
    {id: 7, name: 'Bong "Crystal" 50cm', price: "90.000", category: 'Bongs', img: MediumGlassBong},
    {id: 8, name: 'Bong "Bud Light" 50cm', price: "60.000",  category: 'Bongs', img: MediumBudLightBong},
]
  

export default function ProductsCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          630: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className="mySwiper w-11/12 my-1 pb-8"
        modules={[Pagination]}
        pagination={true}
      >
        {products.map((product) => (
            <SwiperSlide className='min-h-fit' key={product.id}>
                <div className="relative">
                    <img src={product.img} alt={product.name} />
                    <div className='w-full flex justify-center absolute bottom-2 right-0'>
                      <div className="w-10/12 h-9 flex justify-center content-center align-middle text-center bg-white border-2 border-black">
                        <span className='leading-8 text-lg'>Añadir al carrito</span>
                      </div>
                    </div>
                    <div className='px-2 text-center absolute top-2 right-2 bg-white border-2 border-black font-bold rounded-full'>
                      <img src="" alt="" />
                    </div>
                </div>
                <div className='mt-3 flex flex-col'>
                  <span className='text-center text-lg'>{product.name}</span>
                  <span className='text-center text-sm text-gray-700'>{product.category}</span>
                  <span className='mt-1 text-center text-base font-bold'>{product.price}</span>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}