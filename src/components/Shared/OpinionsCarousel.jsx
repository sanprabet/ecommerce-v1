import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css';

import "./styles/OpinionsCarousel.scss"

import PictureGirl from "../../static/ProfilePictures/woman.jpeg"
import PictureGuy from "../../static/ProfilePictures/man.jpeg"
import PictureGuy2 from "../../static/ProfilePictures/man1.jpeg"

const opinions = [
  {text: "Estoy muy felix con mis compras, todas llegaron a tiempo hasta mi casa en Medellin. Armario listo y la jugueteria la estoy disfrutando.", author_name:"Camila Gonzales", author_pic: PictureGirl},
  {text: "El sistema de luces que me instalaron quedo perfecto. Voy para la segunda cosecha, y esos sistemas Floraflex dan un rendimiento sorprendente.", author_name:"Juan C. Arias", author_pic: PictureGuy},
  {text: "Llevamos 4 años trabajando juntos y nuestra experiencia de autocultivo para uso medicinal ha sido maravillosa con su asesoria.", author_name:"Luis Ramirez", author_pic: PictureGuy2},
  {text: "Estoy muy felix con mis compras, todas llegaron a tiempo hasta mi casa en Medellin. Armario listo y la jugueteria la estoy disfrutando.", author_name:"Camila Gonzales", author_pic: PictureGirl},
  {text: "El sistema de luces que me instalaron quedo perfecto. Voy para la segunda cosecha, y esos sistemas Floraflex dan un rendimiento sorprendente.", author_name:"Juan C. Arias", author_pic: PictureGuy},
  {text: "Llevamos 4 años trabajando juntos y nuestra experiencia de autocultivo para uso medicinal ha sido maravillosa con su asesoria.", author_name:"Luis Ramirez", author_pic: PictureGuy2},
]

export default function OpinionsCarousel() {
  return (
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        freeMode={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          100: {
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
        loop={true}
        modules={[FreeMode, Autoplay]}
        className="mySwiper pb-7 px-4"
      >
        {opinions.map((opinion) => (
          <SwiperSlide className='flex flex-col bg-gray-200 rounded-lg'>
            <div className="flex flex-row justify-start py-2 px-3 bg-green-700 rounded-t-lg">
              <img className='min-[320px]:h-7 min-[640px]:h-8 min-[768px]:h-9 min-[320px]:w-7 min-[640px]:w-8 min-[768px]:w-9 mr-4 rounded-full' src={opinion.author_pic} alt="author selfie" />
              <p className='min-[320px]:text-base min-[640px]:text-lg min-[768px]:text-xl min-[320px]:leading-7 min-[640px]:leading-9 min-[768px]:leading-9 text-white'>{opinion.author_name}</p>
            </div>
            <div className='conversation pb-1 rounded-b-lg'>
              <div className='conversation-container'>
                <div className='message received pb-5 relative min-[320px]:text-sm min-[640px]:text-base min-[768px]:text-lg leading-6'>
                  {opinion.text}
                  <span class="flex flex-row justify-end absolute bottom-0 right-0">
                    <span className='text-zinc-400 text-xs leading-7'>10:25</span>
                    <svg className="h-7" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.03033 11.4697C4.73744 11.1768 4.26256 11.1768 3.96967 11.4697C3.67678 11.7626 3.67678 12.2374 3.96967 12.5303L5.03033 11.4697ZM8.5 16L7.96967 16.5303C8.26256 16.8232 8.73744 16.8232 9.03033 16.5303L8.5 16ZM17.0303 8.53033C17.3232 8.23744 17.3232 7.76256 17.0303 7.46967C16.7374 7.17678 16.2626 7.17678 15.9697 7.46967L17.0303 8.53033ZM9.03033 11.4697C8.73744 11.1768 8.26256 11.1768 7.96967 11.4697C7.67678 11.7626 7.67678 12.2374 7.96967 12.5303L9.03033 11.4697ZM12.5 16L11.9697 16.5303C12.2626 16.8232 12.7374 16.8232 13.0303 16.5303L12.5 16ZM21.0303 8.53033C21.3232 8.23744 21.3232 7.76256 21.0303 7.46967C20.7374 7.17678 20.2626 7.17678 19.9697 7.46967L21.0303 8.53033ZM3.96967 12.5303L7.96967 16.5303L9.03033 15.4697L5.03033 11.4697L3.96967 12.5303ZM9.03033 16.5303L17.0303 8.53033L15.9697 7.46967L7.96967 15.4697L9.03033 16.5303ZM7.96967 12.5303L11.9697 16.5303L13.0303 15.4697L9.03033 11.4697L7.96967 12.5303ZM13.0303 16.5303L21.0303 8.53033L19.9697 7.46967L11.9697 15.4697L13.0303 16.5303Z" fill="#16B4DF"></path> </g></svg>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}