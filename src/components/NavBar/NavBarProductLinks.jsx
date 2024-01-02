import React from 'react'
import { Link } from 'react-router-dom'

import NavBarProductLinksMenu from './NavBarProductLinksMenu'
import "./styles/NavBarProductLinks.scss"

function NavBarProductLinks({category, link, subCategories}) {
  return (
    <>
      <span className='navBarProductLinks__link mr-10 py-3 relative leading-5 hover:underline'>
          <Link to={link} className='text-sm font-bold'>{category}</Link>
          <div className="navBarProductLinks__menu w-max absolute bg-white border">
            <div className="w-full pr-5 pl-2 flex flex-col divide-y">
              {
                subCategories && subCategories.map((card) => (
                  <NavBarProductLinksMenu key={card.id} category={card.category} />
                ))
              }
            </div>
          </div>
      </span>
    </>
  )
}

export default NavBarProductLinks