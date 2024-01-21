import React, { useRef, useState } from 'react';
import PagePath from '../components/Shared/PagePath';
import ProductsCarouselBig from '../components/Shared/ProductsCarouselBig'
import QuantityScore from '../components/Shared/QuantityScore';
import SpecsCarousel from '../components/Shared/SpecsCarousel';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./styles/Product.scss"


// Pull Up // Images
import DeliveryLogo from "../static/Icons/DeliveryIcon.svg"
import DeliveryTruck from "../static/Icons/delivery-truck.svg"
import QualitySeal from "../static/Icons/quality-seal.svg"
import CustomerService from "../static/Icons/customer_service.svg"

// Pull Up // DB
const cardsData = [
    {id: 3, title: 'Pago Seguro', content: 'Compra segura con Mercado Pagos', icon: QualitySeal, icon_description: "Sello de Calidad"},
    {id: 4, title: 'Whatsapp 24/7', content: '10 años asesorandote con tu compra', icon: CustomerService, icon_description: "25/7"},
    {id: 2, title: 'Envios Gratis', content: 'Desde 80k en Bogota y 250k nacional', icon: DeliveryTruck, icon_description: "Sello de Calidad"},
    {id: 1, title: 'Desde 2016', content: 'Puntos fisicos en Bogota y Cali', icon: DeliveryLogo, icon_description: "Camion Entregas"},
]

function ProductDescription() {
  return(
    <>
      <SpecsCarousel cardsData={cardsData} />
    </>
  )
}

import ApplePipe from "../static/Products/ApplePipe.png"
import BigGlassBong from "../static/Products/BigGlassBong.png"
import BigHeartsBong from "../static/Products/BigHeartsBong.png"
import BigWeedPatternBong from "../static/Products/BigWeedPatternBong.png"
import MediumBudLightBong from "../static/Products/MediumBudLightBong.png"
import MediumGlassBong from "../static/Products/MediumGlassBong.png"

const products = [
    {id: 1, name: 'Pipa "Manzana" 15cm', price: "25.000", category: 'Pipas', img: ApplePipe},
    {id: 3, name: 'Bong "Crystal" 80cm', price: "150.000", category: 'Bongs', img: BigGlassBong},
    {id: 4, name: 'Bong "Hearts" 70cm ', price: "110.000", category: 'Bongs', img: BigHeartsBong},
    {id: 5, name: 'Bong "Weed" 75cm' , price: "80.000", category: 'Bongs', img: BigWeedPatternBong},
    {id: 6, name: 'Bong "Bud Light" 50cm', price: "60.000", category: 'Bongs', img: MediumBudLightBong},
    {id: 7, name: 'Bong "Crystal" 50cm', price: "90.000", category: 'Bongs', img: MediumGlassBong},
    {id: 8, name: 'Bong "Bud Light" 50cm', price: "60.000",  category: 'Bongs', img: MediumBudLightBong},
]

function ProductAddCart({name, price, description}) {
  return(
    <div className='ProductAddCart mt-4 pl-12 flex flex-col justify-start'>
      <h2 className='my-3 text-3xl font-bold'>{name}</h2>
      <p className='min-[768px]:text-sm min-[425px]:text-base pr-14'>{description}</p>
      <div className='mt-5 mb-1 flex flex-row'>
        <p className='my-3 mr-4 text-2xl font-bold'>{price}</p>
        <div className='flex flex-row'>
          <QuantityScore quantity={1} />
        </div>
      </div>
      <div className='flex justify-start'>
        <div className='w-3/6 mr-2 min-[100px]:h-9 min-[425px]:h-14 pt-2 bg-black font-bold text-lg text-center text-white min-[100px]:leading-5 min-[425px]:leading-10'>
          Agregar al carrito
        </div>
        <div className='w-2/6 min-[100px]:h-9 min-[425px]:h-14 pt-2 bg-yellow-400 font-bold text-lg text-center min-[100px]:leading-5 min-[425px]:leading-10'>
          Comprar Ya
        </div>
      </div>
    </div>
  )
}

const media = [ApplePipe, BigGlassBong, BigHeartsBong] 

function ProductImagesDisplay() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="ProductImagesDisplay flex-shrink-0"
        style={{
          "--swiper-pagination-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "0.6",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "6px"
        }}
      >
        { media.map((item) => (
          <SwiperSlide className='w-full'>
            <img src={item} alt="Bong Image" />
          </SwiperSlide>
        ))
        }
      </Swiper>
    </>
  )
}

const product = {id: 1, name: 'Pipa "Manzana" 15cm', price: "25.000", category: 'Pipas', description:"La Pipa Manzana de 15 cm es una obra maestra de artesanía y diseño que combina la funcionalidad de una pipa con la estética única de una deliciosa manzana. Confeccionada con precisión y atención al detalle.", img: ApplePipe}

function Product() {
  return (
    <>
      <PagePath />
      <section className='min-[100px]:mx-2 min-[425px]:mx-9 my-4 flex flex-row justify-center'>
        <ProductImagesDisplay />
        <ProductAddCart name={product.name} price={product.price} description={product.description} />
      </section>
      <section>
        <ProductDescription />
      </section>
      <section className='bg-gray-100'>
        <h3 className='py-4 font-bold text-lg text-center'>NUEVOS EN LA TIENDA</h3>
        <ProductsCarouselBig />
      </section>
    </>
  )
}

export default Product