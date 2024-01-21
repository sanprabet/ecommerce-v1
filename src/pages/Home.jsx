import React, { useContext } from 'react'

// Components
import { dimensionsContext } from '../components/Shared/Contexts'

import HomeCategory from '../components/Home/HomeCategory';
import HomeBannerCarousel from "../components/Home/HomeBannerCarousel"
import OpinionsCarousel from "../components/Home/OpinionsCarousel"
import SpecsCarousel from "../components/Shared/SpecsCarousel"

import ProductsCarouselBig from "../components/Shared/ProductsCarouselBig"

// Info to Pull Up // Images
import Category1 from "../static/Categories/ParaArmar.png"
import Category2 from "../static/Categories/ParaPrender.png"
import Category3 from "../static/Categories/Semillas.png"
import Category4 from "../static/Categories/Insumos.png"
import Category5 from "../static/Categories/Autocultivo.png"
import Category6 from "../static/Categories/Cursos.png"

import DesktopHero1 from "../static/HeroImages/DesktopHeroImage.png"
import DesktopHero2 from "../static/HeroImages/DesktopHeroImage2.png"
import DesktopHero3 from "../static/HeroImages/DesktopHeroImage3.png"
import MobileHero1 from "../static/HeroImages/MobileHeroImage.png"
import MobileHero2 from "../static/HeroImages/MobileHeroImage2.png"
import MobileHero3 from "../static/HeroImages/MobileHeroImage3.png"

// Info to Pull Up // DB
const HeroDesktop = [
    {id: 0, img: DesktopHero1, description: "Cultiva Ad"},
    {id: 1,img: DesktopHero2, description: "Aparatos Ad"},
    {id: 2,img: DesktopHero3, description: "Tienda Fisica Ad"},
]

const HeroMobile = [
  {id: 0, img: MobileHero1, description: "Cultiva Ad"},
  {id: 1, img: MobileHero2, description: "Aparatos Ad"},
  {id: 2, img: MobileHero3, description: "Tienda Fisica Ad"},
]

const categories = [
  {id: 1, imageUrl: Category1, name: 'Para Prender'},
  {id: 2, imageUrl: Category2, name: 'Para Armar'},
  {id: 3, imageUrl: Category3, name: 'Semillas'},
  {id: 4, imageUrl: Category4, name: 'Insumos'},
  {id: 5, imageUrl: Category5, name: 'Auto Cultivo'},
  {id: 6, imageUrl: Category6, name: 'Cursos'}
]

// Pull Up // Images
import DeliveryLogo from "../static/Icons/DeliveryIcon.svg"
import LegalHammer from "../static/Icons/legal.svg"
import QualitySeal from "../static/Icons/quality-seal.svg"
import CustomerService from "../static/Icons/customer_service.svg"

// Pull Up // DB
const cardsData = [
    {id: 3, title: 'Pago Seguro', content: 'Compra segura con Mercado Pagos', icon: QualitySeal, icon_description: "Sello de Calidad"},
    {id: 2, title: 'Legal en Colombia', content: 'Hasta 20 plantas de uso personal', icon: LegalHammer, icon_description: "Plantas"},
    {id: 1, title: 'Desde 2016', content: 'Puntos fisicos en Bogota y Cali', icon: DeliveryLogo, icon_description: "Camion Entregas"},
    {id: 4, title: 'Asesorias 24/7', content: '10 años ayudandote con tu autocultivo', icon: CustomerService, icon_description: "25/7"},
]

function Home() {
  const { width } = useContext(dimensionsContext)
  const HeroImages =  (width > 768)? HeroDesktop : HeroMobile;
  return (
    <>
      <section>
        <HomeBannerCarousel images={HeroImages} />
      </section>
      <section>
        <SpecsCarousel cardsData={cardsData}/>
      </section>
      <section className='bg-gray-100'>
        <h2 className='py-5 text-center text-2xl font-bold'>Más Vendidos</h2>
        <ProductsCarouselBig />
      </section>
      <section className='mb-5'>
        <h2 className='py-5 text-center text-2xl font-bold'>Categorias</h2>
        <div className="grid grid-cols-2 min-[768px]:grid-cols-3 gap-4">
          {categories.map((category) => (
            <HomeCategory key={category.id} img={category.imageUrl} name={category.name}/>
          ))}
        </div>
      </section>
      <section className='bg-gray-100'>
        <h2 className='py-5 text-center text-2xl font-bold'>Algunas Reviews...</h2>
        <OpinionsCarousel />
      </section>
    </>
  )
}

export default Home