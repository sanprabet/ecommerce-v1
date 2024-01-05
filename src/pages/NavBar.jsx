import React, { useContext } from 'react';
import Headroom from "react-headroom"

// Components
import { isUserScrollAtTopContext, desktopNavBarSearchDropdownOpenContext } from "../components/Shared/Contexts";
import PromotionalStrip from '../components/Shared/PromotionalStrip';

import { NavBarLogo,  NavBarSearchButton, NavBarShoppingCart, NavBarCategoriesButton } from '../components/NavBar/NavBarButtons';
import DesktopNavBarCategories from '../components/NavBar/NavBarProducts';
import NavBarSearch from '../components/NavBar/NavBarSearch';

// Styles
import './styles/NavBar.scss';

// Export Components
export function NavBarDesktop() {
  const { isAtTop } = useContext(isUserScrollAtTopContext)
  const displayPromotionalStrip = isAtTop? "": "hidden";
  
  const { setNavBarSearchDropdownOpen } = useContext(desktopNavBarSearchDropdownOpenContext)
  
  return (
    <Headroom onUnpin={() => setNavBarSearchDropdownOpen(false)} style={{zIndex: 10, backgroundColor: "white"}}>
      <PromotionalStrip displayConfig={displayPromotionalStrip} />
      <div className="w-full h-20 py-3 px-20 flex flex-row justify-between">
        <div className="flex">
          <NavBarLogo />
          <NavBarSearch />
        </div>
        <div className='my-auto'>
          <NavBarShoppingCart />
        </div>
      </div>
      <DesktopNavBarCategories />
    </Headroom>
  );
}

export function NavBarMobile(){
  const { isAtTop } = useContext( isUserScrollAtTopContext )
  const displayPromotionalStrip = isAtTop? "": "hidden";

  return(
    <Headroom style={{zIndex: 10, backgroundColor: "white"}}>
      <PromotionalStrip displayConfig={displayPromotionalStrip} />
      <div className=' w-full h-16 p-3 flex flex-row justify-between'>
        <div className='flex flex-row'>
          <NavBarCategoriesButton />
          <NavBarSearchButton />
        </div>
          <NavBarLogo />
          <NavBarShoppingCart />
      </div>
    </Headroom>
  )
}
