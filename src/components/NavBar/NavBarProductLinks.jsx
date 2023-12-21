import React from 'react'
import { Link } from 'react-router-dom'

function NavBarProductLinks({category, link}) {
  return (
    <Link to={link}>
        <span className='product_link mr-10 leading-5 hover:underline'>
            <span className='text-sm font-bold'>{category}</span>
        </span>
    </Link>
  )
}

export default NavBarProductLinks