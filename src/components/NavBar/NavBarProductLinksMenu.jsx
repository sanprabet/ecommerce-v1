import React from 'react'
import { Link } from 'react-router-dom'

function NavBarProductLinksMenu({category}) {
  return (
    <Link className="w-full min-w-56 flex pr-3 py-2 hover:underline">
        <p className=''>{category}</p>
    </Link>
  )
}

export default NavBarProductLinksMenu