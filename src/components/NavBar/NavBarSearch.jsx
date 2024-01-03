import React, { useEffect, useRef, useContext } from 'react';

// Components and contexty
import { desktopNavBarSearchDropdownOpenContext, dimensionsContext } from "../Shared/Contexts"

//Components
import SearchMenu from '../Shared/SearchMenu'

// styles and images
import CloseIcon from "../../static/Icons/close-x.svg"
import magnifying_glass from '../../static/Icons/magnifying-glass.svg'
import "./styles/NavBarSearch.scss"

function NavBarSearch() {
  const { navBarSearchDropdownOpen, setNavBarSearchDropdownOpen } = useContext(desktopNavBarSearchDropdownOpenContext);
  const { width } = useContext(dimensionsContext);

  const isDesktopMenuOpen = navBarSearchDropdownOpen && ( width > 768 ) ? "navbar__search--desktopMenu" : "hidden"; //TODO: Change false to hidden
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
            />
            <div className={isDesktopMenuOpen}>
            <div className="absolute top-2 right-2">
              <img onClick={() => setNavBarSearchDropdownOpen(false)} className="h-5 cursor-pointer" src={CloseIcon} alt="close icon" />
            </div>
              <SearchMenu products_per_page={4} />
            </div>
        </form>
    </div>
  )
}

export default NavBarSearch