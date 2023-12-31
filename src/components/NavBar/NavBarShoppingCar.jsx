import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { shoppingCartOpenContext } from "../Shared/Contexts"

import ShoppingCartIcon from '../../static/Icons/shoping-cart.svg'
import './styles/NavBarShoppingCar.scss'

function ShoppingCart(){
  return (
    <div  className="navbar__shopingCart w-12 p-2 my-auto relative cursor-pointer">        
      <img className='w-7 hover:w-10' src={ShoppingCartIcon} alt="Shopping Cart Icon" />
      <div className="navbar__shopingCart__count h-5 w-5 flex justify-center items-center absolute top-0 right-0 text-sm text-black rounded-full">{0}</div>
    </div>
  )
}

export function NavBarShoppingCartDesktop(){
  const {
    shopingCart,
    setshopingCart
  } = useContext(shoppingCartOpenContext);

  return(
    <div onClick={() => setshopingCart(true)}>
      <ShoppingCart />
    </div>
  )
}

export function NavBarShoppingCartMobile(){
  return(
    <Link to="/cart">
      <ShoppingCart />
    </Link>
  )
}