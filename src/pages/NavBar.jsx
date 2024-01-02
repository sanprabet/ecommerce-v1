import React, { useContext } from 'react';
import Headroom from "react-headroom"

// Contexts
import { isAtTheTopContext } from "../components/Shared/Contexts";

// Componenta
import NavBarProducts from '../components/NavBar/NavBarProducts';
import NavBarLogo from '../components/NavBar/NavBarLogo';
import NavBarSearch from '../components/NavBar/NavBarSearch';
import NavBarSearchIcon from '../components/NavBar/NavBarSearchIcon';
import PromotionalStrip from '../components/Shared/PromotionalStrip';
import { NavBarShoppingCartDesktop } from '../components/NavBar/NavBarShoppingCar';

// Styles
import './styles/NavBar.scss';

export function NavBarDesktop() {
  const { isAtTop } = useContext(isAtTheTopContext)
  const displayPromotionalStrip = isAtTop? "": "hidden";
  
  return (
    <Headroom style={{zIndex: 10, backgroundColor: "white"}}>
      <PromotionalStrip displayConfig={displayPromotionalStrip} />
      <div className="w-full h-20 py-3 px-20 flex flex-row justify-between">
        <div className="flex">
          <NavBarLogo />
          <NavBarSearch />
        </div>
        <div className='my-auto'>
          <NavBarShoppingCartDesktop />
        </div>
      </div>
      <NavBarProducts />
    </Headroom>
  );
}

// { width > 768? <FooterDesktop />:  <FooterMobile />}

export function NavBarMobile(){
  const { isAtTop } = useContext( isAtTheTopContext )
  const displayPromotionalStrip = isAtTop? "": "hidden";

  return(
    <Headroom style={{zIndex: 10, backgroundColor: "white"}}>
      <PromotionalStrip displayConfig={displayPromotionalStrip} />
      <div className=' w-full h-16 p-3 flex flex-row justify-between'>
          <NavBarSearchIcon />
          <NavBarLogo />
          <NavBarShoppingCartDesktop />
      </div>
    </Headroom>
  )
}
