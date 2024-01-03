import React from 'react'
import { Link } from 'react-router-dom'

import "./styles/ProductDisplaySmall.scss"

function ProductDisplaySmall({name, category, price, img}) {
  return (
    <>
        <Link to="/product" className="productDisplay__imageContainer relative">
            <img src={img} alt={name} />
        </Link>
        <div className='productDisplay__mobile h-11 mt-2 justify-center content-center align-middle text-center bg-white border-2 border-black cursor-pointer'>
            <span className='w-full text-xs leading-5 text-center'>AÑADIR AL CARRITO</span>
        </div>
        <div className='mt-3 flex flex-col'>
            <Link to="/product" className='text-center text-sm hover:underline'>{name}</Link>
            <span className='text-center font-bold text-sm hover:underline'>{price}</span>
        </div>
    </>
  )
}

export default ProductDisplaySmall