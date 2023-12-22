import React from 'react'
import NavBarProducts from '../components/NavBar/NavBarProducts'
import NavBarLogo from '../components/NavBar/NavBarLogo'
import NavBarSearch from '../components/NavBar/NavBarSearch'
import NavBarShoppingCar from '../components/NavBar/NavBarShoppingCar'
import NavBarSearchIcon from '../components/NavBar/NavBarSearchIcon'
import NavBarCategorySearch from "../components/NavBar/NavBarCategorySearch"

export function NavBarDesktop() {
  return (
    <>
      <div className="w-full h-20 py-3 px-20 flex flex-row justify-between">
        <div className="flex">
            <NavBarLogo/>
            <NavBarSearch />
        </div>
        <div className='my-auto'>
          <NavBarShoppingCar />
        </div>
      </div>
      <NavBarProducts />
    </>
  )
}

export function NavBarMobile(){
  return(
    <div className="w-full h-14 px-3 flex flex-row justify-between">
		<div className='h-14 my-auto flex'>
			<NavBarCategorySearch />
			<NavBarSearchIcon />
		</div>
		<div className="flex">
			<NavBarLogo />
		</div>
		<div className='h-14 my-auto flex'>
			<NavBarShoppingCar />
		</div>
    </div>
  )
}
