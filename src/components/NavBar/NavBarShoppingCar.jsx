import React from 'react'
import { Link } from 'react-router-dom'

import shoping_cart from '../../static/Icons/shoping-cart.svg'
import './styles/NavBarShoppingCar.scss'

function NavBarShoppingCar() {
  const [count, setCount] = React.useState(0) // Count of the items inside the cart
  return (
    <Link to="/cart">
      <div  className="navbar__shopingCart w-12 p-2 my-auto relative cursor-pointer">        
        <img className='w-7 hover:w-10' src={shoping_cart} alt="shoping cart" />
        <div className="navbar__shopingCart__count h-5 w-5 flex justify-center items-center absolute top-0 right-0 text-sm text-black rounded-full">{count}</div>
      </div>
    </Link>
  )
}

export default NavBarShoppingCar