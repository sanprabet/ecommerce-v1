import React from 'react'
import magnifying_glass from '../../static/magnifying-glass.svg'

function NavBarSearchIcon() {
  return (
    <div className='my-auto cursor-pointer'>
        <img className='w-7 hover:w-8' src={magnifying_glass} alt="Search Icon" />
    </div>
  )
}

export default NavBarSearchIcon