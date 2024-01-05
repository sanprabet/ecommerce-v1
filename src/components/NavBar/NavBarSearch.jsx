import React, { useRef, useContext } from 'react';

// Components and contexty
import { desktopNavBarSearchDropdownOpenContext, dimensionsContext } from "../Shared/Contexts"

//Components
import SearchMenu from '../Shared/SearchMenu'

// styles and images
import CloseIcon from "../../static/Icons/close-x.svg"
import magnifying_glass from '../../static/Icons/magnifying-glass.svg'
import "./styles/NavBarSearch.scss"

function DesktopSearchMenu(){

  const { width } = useContext(dimensionsContext);
  const { navBarSearchDropdownOpen, setNavBarSearchDropdownOpen } = useContext(desktopNavBarSearchDropdownOpenContext);

  if (navBarSearchDropdownOpen && ( width < 768 )) setNavBarSearchDropdownOpen(false) // Avoid issues when resizing screen ()
  const isDesktopMenuOpen = navBarSearchDropdownOpen ? "navbar__search--desktopMenu " : "hidden";

  return(
    <div className={isDesktopMenuOpen}>
      <div className="absolute top-2 right-2">
        <img onClick={() => setNavBarSearchDropdownOpen(false)} className="h-5 cursor-pointer" src={CloseIcon} alt="close icon" />
      </div>
      <SearchMenu products_per_page={4} />
    </div>
  )

}

function NavBarSearch() {
  const { setNavBarSearchDropdownOpen } = useContext(desktopNavBarSearchDropdownOpenContext);
  const ref = useRef(null);
 
  return (
    <div className="navbar__search w-full relative mx-1 flex flex-row justify-start items-center">
        <form className="w-72 h-11 flex flex-row bg-gray-100 rounded-lg">
            <img className="h-5 mx-2 self-center" src={magnifying_glass} alt="magnifying glass" />
            <input
              className="navbar__search--input w-full text-xs outline-none bg-gray-100 rounded-lg" 
              ref={ref}
              type="text" 
              name="search bar" 
              placeholder="Busca aquí..."
              onFocus={() => setNavBarSearchDropdownOpen(true)} // This for when is focused-visible
            />
            <DesktopSearchMenu />
        </form>
    </div>
  )
}

export default NavBarSearch