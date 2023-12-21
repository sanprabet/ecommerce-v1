import React from 'react'
import NavBarProducts from '../components/NavBar/NavBarProducts'
import NavBarLogo from '../components/NavBar/NavBarLogo'
import NavBarSearch from '../components/NavBar/NavBarSearch'
import NavBarShoppingCar from '../components/NavBar/NavBarShoppingCar'
import NavBarSearchIcon from '../components/NavBar/NavBarSearchIcon'
import NavBarCategorySearch from "../components/NavBar/NavBarCategorySearch"

export function NavBarDesktop() {
  return (
    <div className="navbar">
        <div className="navbar--up w-full h-20 py-3 px-20 flex flex-row justify-between">
            <div className="navbar--upRight flex">
                <NavBarLogo/>
                <NavBarSearch />
            </div>
            <div className='my-auto'>
              <NavBarShoppingCar />
            </div>
        </div>
        <NavBarProducts />
    </div>
  )
}

export function NavBarMobile(){
  return(
    <div className="w-full h-14 flex px-3 flex-row justify-between">
            <div className='h-14 my-auto flex'>
              <NavBarCategorySearch />
              <NavBarSearchIcon />
            </div>
            <div className="navbar--upRight flex">
                <NavBarLogo />
            </div>
            <div className='h-14 my-auto flex'>
              <NavBarShoppingCar />
            </div>
    </div>
  )
}
