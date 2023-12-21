import React from 'react'
import magnifying_glass from '../../static/magnifying-glass.svg'
import "./styles/NavBarSearch.scss"

function NavBarSearch() {
  return (
    <div className="navbar__search mx-1 flex flex-row justify-center items-center">
        <form className="h-11 flex flex-row rounded-lg">
            <img className="h-5 mx-2 self-center" src={magnifying_glass} alt="magnifying glass" />        
            <input className="navbar__search--input w-80 text-xs outline-none" type="text" placeholder="Busca la tienda entera aquí..." />
        </form>
    </div>
  )
}

export default NavBarSearch