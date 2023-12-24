import React from 'react'
import { Link } from 'react-router-dom'

function NavBarProductLinksMenu({category}) {
  return (
    <Link className="w-full flex pr-3 py-2 hover:underline">
        <p className='min-w-28'>{category}</p>
    </Link>
  )
}

export default NavBarProductLinksMenu