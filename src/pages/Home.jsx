import React from 'react'
import SpecsCarousel from "../components/Shared/SpecsCarousel"
import HomeProductsDisplay from "../components/Home/HomeProductsDisplay"
import HomeCategoriesDisplay from "../components/Home/HomeCategoriesDisplay"
import HomeBannerCarousel from "../components/Home/HomeBannerCarousel"

import heroImage from '../static/YellowHero.png'
import heroImageDesktop from '../static/DesktopHeroImage.png'
import heroImageMobile from "../static/MobileHeroImage.png"

import { useWindowDimensions } from "../components/Shared/FunctionalViewPortGetter"

import Hero1 from "../static/HeroImages/DesktopHeroImage.png"
import Hero2 from "../static/HeroImages/DesktopHeroImage2.png"
import Hero3 from "../static/HeroImages/DesktopHeroImage3.png"

import MobileHero1 from "../static/HeroImages/MobileHeroImage.png"
import MobileHero2 from "../static/HeroImages/MobileHeroImage2.png"
import MobileHero3 from "../static/HeroImages/MobileHeroImage3.png"

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

function Home() {
  const {width} = useWindowDimensions()
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
        <HomeProductsDisplay title={"Más Vendidos"} />
      </section>
      <section>
        <HomeCategoriesDisplay />
      </section>
      <section  className='bg-gray-100'>
        Video Section
      </section>
      <footer>
        Footer Section
      </footer>
    </>
  )
}

export default Home