import React, { useContext} from 'react'

// Components and contexty
import { cartSlideOpenContext } from "../Shared/Contexts"

// Styles and Images
import magnifying_glass from '../../static/Icons/magnifying-glass.svg'

function NavBarSearchIcon() {
  const { setSearchSlideOpen } = useContext(cartSlideOpenContext);

  return (
    <div className='my-auto cursor-pointer'>
        <img onClick={() => setSearchSlideOpen(true)} className='w-7 hover:w-8' src={magnifying_glass} alt="Search Icon" />
    </div>
  )
}

export default NavBarSearchIcon