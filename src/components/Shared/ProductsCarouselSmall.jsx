import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import ProductDisplaySmall from "./ProductDisplaySmall"

// Styles and Images
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

export default function ProductsCarouselSmall({products_per_page}) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          100: {
            slidesPerView: products_per_page,
            spaceBetween: 5,
          }
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        className="mySwiper w-full my-2"
        modules={[Pagination, Autoplay]}
        style={{
          "--swiper-pagination-color": "#000000",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "6px"
        }}
      >
        {products.map((product) => (
            <SwiperSlide className='min-h-fit' key={product.id}>
              <ProductDisplaySmall id={product.id} name={product.name} price={product.price} category={product.category} img={product.img} />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}