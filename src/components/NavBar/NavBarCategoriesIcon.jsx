import React, { useContext} from 'react'

// Components and contexty
import { searchSlideOpenContext } from "../Shared/Contexts"

// Styles and Images
import magnifying_glass from '../../static/Icons/magnifying-glass.svg'

function NavBarCategoriesIcon() {
  const { setsearchSide } = useContext(searchSlideOpenContext);

  return (
    <div className='my-auto cursor-pointer'>
        <img onClick={() => setsearchSide(true)} className='w-7 hover:w-8' src={magnifying_glass} alt="Search Icon" />
    </div>
  )
}

export default NavBarCategoriesIcon