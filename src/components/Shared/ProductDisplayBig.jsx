import React from 'react'
import { Link } from 'react-router-dom'

import VideoCamera from "../../static/Icons/VideoIcon.svg"
import "./styles/ProductDisplayBig.scss"

function ProductDisplayBig({name, category, price, img}) {
  return (
    <>
        <Link to="/product" className="productDisplay__imageContainer relative">
            <img src={img} alt={name} />
            <div className='addToCart__container w-full hidden justify-center absolute bottom-1 right-0'>
                <div className="slide-top addToCart__button w-10/12 h-11 flex justify-center content-center align-middle text-center bg-white border-2 border-black cursor-pointer">
                    <span className='w-full min-[768px]:text-sm min-[768px]:leading-10 text-sm text-center'>AÑADIR AL CARRITO</span>
                </div>
            </div>
            <div className='video__container slide-left p-2 w-10 h-10 absolute top-2 bg-white rounded-full border-1 border-black text-center font-bold cursor-pointer'>
                <img src={VideoCamera} alt="Video Icon" />
            </div>
        </Link>
        <div className='productDisplay__mobile h-11 mt-2 justify-center content-center align-middle text-center bg-white border-2 border-black cursor-pointer'>
            <span className='w-full min-[100px]:text-sm min-[100px]:leading-10 text-base text-center'>AÑADIR AL CARRITO</span>
        </div>
        <div className='mt-3 flex flex-col'>
            <Link to="/product" className='text-center min-[100px]:text-base min-[768px]:text-lg hover:underline'>{name}</Link>
            <Link to="/product" className='text-center text-sm text-gray-700 hover:underline'>{category}</Link>
            <div className='mt-1 text-center text-base font-bold'>{price}</div>
        </div>
    </>
  )
}

export default ProductDisplayBig