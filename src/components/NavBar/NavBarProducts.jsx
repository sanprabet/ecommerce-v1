import React from 'react'
import { Link } from 'react-router-dom'

import "./styles/NavBarProducts.scss"

function NavBarProductLinkMenu({subCategories}) {
  return (
    <>
      {
        subCategories && subCategories.map((card) => (
          <Link key={card.id} className="w-full min-w-56 flex pr-3 py-2 hover:underline">
              <p>{card.category}</p>
          </Link>
        ))
      }
    </>
  )
}

function NavBarProductLink({category, link, subCategories}) {
  return (
    <>
      <span className='navBarProductLinks__link mr-10 py-3 relative leading-5 hover:underline'>
          <Link to={link} className='text-sm font-bold'>{category}</Link>
          <div className="navBarProductLinks__menu w-max absolute bg-white border">
            <div className="w-full pr-5 pl-2 flex flex-col divide-y">
              <NavBarProductLinkMenu subCategories={subCategories} />
            </div>
          </div>
      </span>
    </>
  )
}


function DesktopNavBarCategories() {
  return (
      <div className="navbar--down min-h-min w-full py-2 px-9 flex flex-row">
        <ul className='flex flex-row flex-wrap'>
          <li>
            <NavBarProductLink category='GROWERS 🍃' link='/products' subCategories={[{id: 0, category: "Macetas y Cajas"}, {id: 1, category: "Semillas"}, {id: 2, category: "Luces"}, {id: 3, category: "Sensores"}]}/>
          </li>
          <li>
            <NavBarProductLink category='SMOKERS 💨' link='/products' subCategories={[{id: 0, category: "Bongs y Pipas"}, {id: 2, category: "Cueros"}, {id: 3, category: "Vapes"}]}/>
          </li>
          <li>
            <NavBarProductLink category='🪴 TUTORIALES' link='/products'/>
          </li>
        </ul>
      </div>
  )
}

export default DesktopNavBarCategories