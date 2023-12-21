import React from 'react'
import NavBarProductLinks from './NavBarProductLinks'
import "./styles/NavBarProducts.scss"

function NavBarProducts() {
  return (
      <div className="navbar--down min-h-min w-full py-2 px-20 flex flex-row">
        <ul className='flex flex-row flex-wrap'>
          <li>
            <NavBarProductLinks category='QUIENES SOMOS? 🤔' link='/products' />
          </li>
          <li>
            <NavBarProductLinks category='INSUMOS PARA GROWERS 🍃' link='/products' />
          </li>
          <li>
            <NavBarProductLinks category='ARTICULOS PARA SMOKERS 💨' link='/products' />
          </li>
          <li>
            <NavBarProductLinks category='CURSOS AUTOCULTIVO 🧑‍💻' link='/products'/>
          </li>
        </ul>
      </div>
  )
}

export default NavBarProducts