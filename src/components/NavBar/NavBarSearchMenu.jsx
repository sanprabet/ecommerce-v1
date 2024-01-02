import React, { useRef, useState } from 'react';

import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

//styles
import "./styles/NavBarSearchMenu.scss"

const masBuscados = ["bongs", "tutos", "semillas"]

function NavBarSearchMenu() {
  return (
    <div className="NavBarSearchMenu w-full px-2 py-1">
        <div>
            <h3>Más buscados</h3>
            <div className="flex flex-row flex-wrap">
              <div className='bg-slate-300'>
                a
              </div>
            </div>
        </div>
        <div>
            new merch products carousell
        </div>
    </div>
  )
}

export default NavBarSearchMenu