import React, { useContext} from 'react'
import { Link } from 'react-router-dom'

// Components and contexty
import { searchSlideOpenContext, cartSlideOpenContext, categoriesSlideOpenContext } from "../Shared/Contexts"

// Styles and Images
import hamburguer_menu from '../../static/Icons/hamburger.svg'

import "./styles/NavBarButtons.scss"


// Categories Button
export function NavBarCategoriesButton() {
    const { categorySlideOpen, setCategorySlideOpen } = useContext(categoriesSlideOpenContext);
  
    return (
        <div className='my-auto mr-1 cursor-pointer'>
        <img onClick={() => setCategorySlideOpen(true)} className='w-8 hover:w-9' src={hamburguer_menu} alt="Search Icon" />
    </div>
  )
}

// Ecommerce Logo Button
import logo from "../../static/LosPuntosLogo.png"

export function NavBarLogo() {
  return (
    <Link  to="/" className="my-auto flex">
      <img className="navBarLogo--image w-36 h-10" src={logo} alt="logo"/>
    </Link>
  )
}

import magnifying_glass from '../../static/Icons/magnifying-glass.svg'

// Mobile Search Button
export function NavBarSearchButton() {
  const { setSearchSlideOpen } = useContext(searchSlideOpenContext);

  return (
    <div className='my-auto cursor-pointer'>
        <img onClick={() => setSearchSlideOpen(true)} className='w-7 hover:w-8' src={magnifying_glass} alt="Search Icon" />
    </div>
  )
}

// Cart Button

import ShoppingCartIcon from '../../static/Icons/shoping-cart.svg'

function ShoppingCart(){
  return (
    <div  className="navbar__shopingCart w-12 p-2 my-auto relative cursor-pointer">        
      <img className='w-7 hover:w-10' src={ShoppingCartIcon} alt="Shopping Cart Icon" />
      <div className="navbar__shopingCart__count h-5 w-5 flex justify-center items-center absolute top-0 right-0 text-sm text-black rounded-full">{0}</div>
    </div>
  )
}

export function NavBarShoppingCart(){
  const {
    setshopingCart
  } = useContext(cartSlideOpenContext);

  return(
    <div onClick={() => setshopingCart(true)}>
      <ShoppingCart />
    </div>
  )
}
