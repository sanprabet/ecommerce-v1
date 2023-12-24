import React from 'react'
import NavBarProductLinks from './NavBarProductLinks'
import "./styles/NavBarProducts.scss"

function NavBarProducts() {
  return (
      <div className="navbar--down min-h-min w-full py-2 px-20 flex flex-row">
        <ul className='flex flex-row flex-wrap'>
          <li>
            <NavBarProductLinks category='GROWERS 🍃' link='/products' subCategories={[{id: 0, category: "Semillas"}, {id: 1, category: "Macetas y Cajas"}, {id: 2, category: "Luces"}, {id: 3, category: "Cultivos"}]}/>
          </li>
          <li>
            <NavBarProductLinks category='SMOKERS 💨' link='/products' subCategories={[{id: 0, category: "Bongs"}, {id: 1, category: "Pipas"}, {id: 2, category: "Cueros"}, {id: 3, category: "Vapes"}]}/>
          </li>
          <li>
            <NavBarProductLinks category='TUTORIALES' link='/products'/>
          </li>
          <li>
            <NavBarProductLinks category='CONTACTANOS' link='/products' />
          </li>
        </ul>
      </div>
  )
}

export default NavBarProducts