import React from 'react'
import SpecsCarousel from "../components/Shared/SpecsCarousel"
import HomeProductsDisplay from "../components/Home/HomeProductsDisplay"
import HomeCategoriesDisplay from "../components/Home/HomeCategoriesDisplay"

import heroImage from '../static/YellowHero.png'
import heroImageDesktop from '../static/DesktopHeroImage.png'
import heroImageMobile from "../static/MobileHeroImage.png"

function Home() {


  return (
    <>
      <section>
        <img className='w-full' src={heroImageDesktop} alt="Hero Image" />
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
      <section>
        <img className='w-full' src={heroImageDesktop} alt="Hero Image" />
      </section>
    </>
  )
}

export default Home