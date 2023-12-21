import React from 'react'
import hamburguer from '../../static/hamburger.svg'

function NavBarCategorySearch() {
  return (
    <div className='mr-3 my-auto cursor-pointer'>
        <img className='w-7 hover:w-8' src={hamburguer} alt="Search Icon" />
    </div>
  )
}

export default NavBarCategorySearch