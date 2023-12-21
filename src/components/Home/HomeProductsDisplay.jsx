import React from 'react'
import ProductsCarousel from '../Shared/ProductsCarousel'


function HomeProductsDisplay({title}) {
  return (
    <div>
      <h3 className='py-5 text-center text-2xl font-bold '>{title}</h3>
      <ProductsCarousel />
    </div>
  )
}

export default HomeProductsDisplay