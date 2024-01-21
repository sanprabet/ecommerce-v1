import React from 'react'

import {Filter, Filters} from "../components/Products/Filters"
import ProductsCarouselBig from '../components/Shared/ProductsCarouselBig'
import PagePath from '../components/Shared/PagePath'

function Products() {
  return (
    <>
      <PagePath />
      <section className='min-[100px]:mx-2 min-[425px]:mx-9 flex flex-row'>
        <div className='w-32'>
          <Filters />
        </div>
        <div>
          grid items
        </div>
      </section>
      <section className='bg-gray-100'>
        <h3 className='py-4 font-bold text-lg text-center'>NUEVOS EN LA TIENDA</h3>
        <ProductsCarouselBig />
      </section>
    </>
  )
}

export default Products