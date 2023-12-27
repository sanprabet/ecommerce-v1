import React, { useState, useEffect } from 'react';
import Headroom from "react-headroom"

import NavBarProducts from '../components/NavBar/NavBarProducts';
import NavBarLogo from '../components/NavBar/NavBarLogo';
import NavBarSearch from '../components/NavBar/NavBarSearch';
import NavBarShoppingCar from '../components/NavBar/NavBarShoppingCar';
import NavBarSearchIcon from '../components/NavBar/NavBarSearchIcon';
import NavBarCategorySearch from '../components/NavBar/NavBarCategorySearch';
import PromotionalStrip from '../components/Shared/PromotionalStrip';

import {isAtTheTop} from "../components/Shared/FunctionalViewPortGetter"
import './styles/NavBar.scss';

export function NavBarDesktop() {
  const isAtTop = isAtTheTop()
  const displayPromotionalStrip = isAtTop? "": "hidden";
  return (
    <Headroom style={{zIndex: 1000, backgroundColor: "white"}}>
      <PromotionalStrip displayConfig={displayPromotionalStrip} />
      <div className="w-full h-20 py-3 px-20 flex flex-row justify-between">
        <div className="flex">
          <NavBarLogo />
          <NavBarSearch />
        </div>
        <div className='my-auto'>
          <NavBarShoppingCar />
        </div>
      </div>
      <NavBarProducts />
    </Headroom>
  );
}

export function NavBarMobile(){
  const isAtTop = isAtTheTop()
  const displayPromotionalStrip = isAtTop? "": "hidden";
  return(
    <Headroom style={{zIndex: 1000, backgroundColor: "white"}}>
      <PromotionalStrip displayConfig={displayPromotionalStrip} />
      <div className=' w-full h-14 p-3 flex flex-row justify-between'>
          <NavBarSearchIcon />
          <NavBarLogo />
          <NavBarShoppingCar />
      </div>
    </Headroom>
  )
}
