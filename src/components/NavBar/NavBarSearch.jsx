import React, { useEffect, useRef, useContext } from 'react';

// Components and contexty
import { desktopNavBarSearchDropdownOpenContext } from "../Shared/Contexts"

//Components
import NavBarSearchMenu from './NavBarSearchMenu'

// styles and images
import magnifying_glass from '../../static/Icons/magnifying-glass.svg'
import "./styles/NavBarSearch.scss"

function NavBarSearch() {
  const { navBarSearchDropdownOpen, setNavBarSearchDropdownOpen } = useContext(desktopNavBarSearchDropdownOpenContext);
  const isDesktopMenuOpen = navBarSearchDropdownOpen? "navbar__search--desktopMenu" : "hidden"
  const ref = useRef(null);
 
  return (
    <div className="navbar__search relative mx-1 flex flex-row justify-center items-center">
        <form className="h-11 flex flex-row rounded-lg">
            <img className="h-5 mx-2 self-center" src={magnifying_glass} alt="magnifying glass" />        
            <input 
              className="navbar__search--input w-80 text-xs outline-none rounded-lg" 
              ref={ref}
              type="text" 
              name="search bar" 
              placeholder="Busca la tienda entera aquí..."
              onFocus={() => setNavBarSearchDropdownOpen(true)} // This for when is focused-visible
              onBlur={() => setNavBarSearchDropdownOpen(false)} // This for when is not focused-visible
            />
            <div className={isDesktopMenuOpen}>
              <NavBarSearchMenu />
            </div>
        </form>
    </div>
  )
}

export default NavBarSearch