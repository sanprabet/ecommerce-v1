

import React, { useState, useContext} from 'react'

import ProductsCarouselBig from '../components/Shared/ProductsCarouselBig'
import ProductDisplayCheckoutVertical from '../components/SideCart/ProductDisplayVertical'
import { dimensionsContext } from "../components/Shared/Contexts"

import QuantityScore from '../components/Shared/QuantityScore'
import PromoCode from '../components/Shared/PromoCode'
import PagePath from '../components/Shared/PagePath'

import CloseIcon from "../static/Icons/close-x.svg"

import ApplePipe from "../static/Products/ApplePipe.png"
import BigGlassBong from "../static/Products/BigGlassBong.png"
import BigHeartsBong from "../static/Products/BigHeartsBong.png"
import BigWeedPatternBong from "../static/Products/BigWeedPatternBong.png"

function CartTimer(){
  
  return(
    <div className='my-2 mp px-7 d text-center text-sm text-gray-800'>
      ¡Por favor, apúrate! Alguien ha realizado un pedido de uno de los artículos que tienes en el carrito. Te lo guardamos por 
      <span className='font-bold'> {"30 mins"}</span> minutos.
    </div>
  )
}

function CheckoutContainer(){

  const { width } = useContext(dimensionsContext)
  const styles = width > 1024? {width: "35rem"} : {}

  return(
    <div className='flex flex-col' style={styles}>
      <div>
        <h3 className='py-2 w-full border-b-2 border-black font-bold text-lg'>Resumen del pedido</h3>
        <div className='pt-2 w-full flex flex-row justify-between '>
          <p className='text-sm font-bold leading-7'>Tiempo Envio</p>
          <p className='text-lg'>{"4 dias"}</p>
        </div>
        <div className='pb-2 w-full flex flex-row justify-between border-b-2 border-gray-200'>
          <p className='text-sm font-bold leading-7'>Costo Envio</p>
          <p className='text-lg'>{"Gratis!!"}</p>
        </div>
        <h3 className='py-1 w-full font-bold text-lg'>Codigo Promocional</h3>
        <PromoCode/>
        <div className='py-2 pb-2 w-full flex flex-row justify-between border-b-2 border-gray-200'>
          <p className='text-xl font-bold leading-7'>Total</p>
          <p className='text-xl font-bold'>{"122.000"}</p>
        </div>
      </div>
      <div>
        <button className='w-full px-6 py-2 border border-black bg-black text-white font-bold text-center'>IR A PAGAR</button>
        <button className='w-full px-6 py-2 mt-2 border border-black font-bold text-center'>SEGUIR COMPRANDO</button>
      </div>
    </div>
  )
}

function CartProductSmall({name, img, price, category, totalPrice, quantity}){
  return (
    <div className='pr-2 my-1 flex flex-row border border-x-gray-300'>
      <div className='w-full shrink'>
        <ProductDisplayCheckoutVertical name={name} img={img} category={category} price={price} totalPrice={totalPrice} quantity={quantity}/>
      </div>
      <div className='w-7 flex flex-col justify-center'>
        <img src={CloseIcon} alt="" />
      </div>
    </div>
  )
}

function CartProductBig({name, img, price, category, totalPrice, quantity}){
  return (
    <div className='pr-5 my-1 flex flex-row border border-x-gray-300'>
      <div className='w-full shrink'>
        <ProductDisplayCheckoutVertical name={name} img={img} category={category} price={price} totalPrice={totalPrice} quantity={quantity}/>
      </div>
      <div className='w-32 py-2 shrink-0 flex flex-col justify-center'>
        <QuantityScore quantity={2}/>
      </div>
      <div className='w-24 pt-3 py-2 shrink-0 flex flex-col justify-center leading-4'>
        <p className=''>140.000</p>
      </div>
      <div className='w-7 flex flex-col justify-center'>
        <img src={CloseIcon} alt="" />
      </div>
    </div>
  )
}

const products = [
  {id: 1, name: 'Pipa "Manzana" 15cm', price: "25.000", category: 'Pipas', img: ApplePipe},
  {id: 3, name: 'Bong "Crystal" 80cm', price: "150.000", category: 'Bongs', img: BigGlassBong},
  {id: 4, name: 'Bong "Hearts" 70cm ', price: "110.000", category: 'Bongs', img: BigHeartsBong},
  {id: 5, name: 'Bong "Weed" 75cm' , price: "80.000", category: 'Bongs', img: BigWeedPatternBong}
]

function CartProductListBig(){
  return(
    <div className="w-full mr-5 flex flex-col">
      <h3 className='my-1 w-full font-bold text-lg'>Tu Compra</h3>
      <div className='px-3 flex flex-row h-10 bg-zinc-100'>
        <div className='w-full py-2 shrink font-bold'>
          Productos
        </div>
        <div className='w-32 py-2 shrink-0 font-bold'>
          Cantidad
        </div>
        <div className='w-24 py-2 shrink-0 font-bold'>
          Total
        </div>
        <div className='w-10'></div>
      </div>
      { products.map((product) => (
        <CartProductBig key={product.id} name={product.name} img={product.img} price={product.price} category={product.category} quantity={null} totalPrice={null} />
      )) }
    </div>
  )
}

function CartProductListSmall(){
  return(
    <div className="w-full flex flex-col">
      <h3 className='my-3 w-full font-bold text-lg'>Tu Compra</h3>
      <div className='px-3 flex flex-row h-10 bg-zinc-100'>
        <div className='w-full py-2 shrink font-bold'>
          Productos
        </div>
        <div className='w-10'></div>
      </div>
      { products.map((product) => (
        <CartProductSmall key={product.id} name={product.name} img={product.img} price={product.price} category={product.category} quantity={0} totalPrice={"12.000"} />
      )) }
    </div>
  )
}

function Cart() {
  const { width } = useContext(dimensionsContext)
  return (
    <div className='w-full'>
      <PagePath />
      <section className="min-[100px]:mx-2 min-[425px]:mx-9 mb-5">
        <h1 className='py-3 font-bold text-lg'>TU CARRITO</h1>
        <CartTimer />
        <div className='flex min-[100px]:flex-col min-[1024px]:flex-row-reverse min-[100px]:justify-center min-[1024px]:justify-evenly'>
          <CheckoutContainer />
          { (width > 768)? <CartProductListBig />: <CartProductListSmall />}
        </div>
      </section>
      <section className='bg-gray-100'>
        <h3 className='py-4 font-bold text-lg text-center'>NUEVOS EN LA TIENDA</h3>
        <ProductsCarouselBig />
      </section>
    </div>
  )
}

export default Cart