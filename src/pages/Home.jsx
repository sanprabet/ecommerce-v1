import React, { useContext } from 'react'

// Context
import { dimensionsContext } from '../components/Shared/Contexts'

// Components
import SpecsCarousel from "../components/Shared/SpecsCarousel"
import HomeBannerCarousel from "../components/Home/HomeBannerCarousel"
import OpinionsCarousel from "../components/Shared/OpinionsCarousel"
import HomeCategory from '../components/Home/HomeCategory';
import ProductsCarouselBig from '../components/Shared/ProductsCarouselBig'

// Images
import Category1 from "../static/Categories/ParaArmar.png"
import Category2 from "../static/Categories/ParaPrender.png"
import Category3 from "../static/Categories/Semillas.png"
import Category4 from "../static/Categories/Insumos.png"
import Category5 from "../static/Categories/Autocultivo.png"
import Category6 from "../static/Categories/Cursos.png"

import Hero1 from "../static/HeroImages/DesktopHeroImage.png"
import Hero2 from "../static/HeroImages/DesktopHeroImage2.png"
import Hero3 from "../static/HeroImages/DesktopHeroImage3.png"

import MobileHero1 from "../static/HeroImages/MobileHeroImage.png"
import MobileHero2 from "../static/HeroImages/MobileHeroImage2.png"
import MobileHero3 from "../static/HeroImages/MobileHeroImage3.png"

// Temp DB
const HeroDesktop = [
    {id: 0, img: Hero1, description: "Cultiva Ad"},
    {id: 1,img: Hero2, description: "Aparatos Ad"},
    {id: 2,img: Hero3, description: "Tienda Fisica Ad"},
]

const HeroMobile = [
  {id: 0, img: MobileHero1, description: "Cultiva Ad"},
  {id: 1, img: MobileHero2, description: "Aparatos Ad"},
  {id: 2, img: MobileHero3, description: "Tienda Fisica Ad"},
]

const categories = [
  {
    id: 1,
    imageUrl: Category1,
    name: 'Para Prender',
  },
  {
    id: 2,
    imageUrl: Category2,
    name: 'Para Armar',
  },
  {
    id: 3,
    imageUrl: Category3,
    name: 'Semillas',
  },
  {
    id: 4,
    imageUrl: Category4,
    name: 'Insumos',
  },
  {
    id: 5,
    imageUrl: Category5,
    name: 'Auto Cultivo',
  },
  {
    id: 6,
    imageUrl: Category6,
    name: 'Cursos',
  },
]

function Home() {
  const {width} = useContext(dimensionsContext)
  const HeroImages =  width > 768? HeroDesktop: HeroMobile;
  return (
    <>
      <section>
        <HomeBannerCarousel images={HeroImages} />
      </section>
      <section>
        <SpecsCarousel/>
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
        <ProductsCarouselBig />
      </section>
    </>
  )
}

export default Home