import React from 'react'
import {Link} from "react-router-dom"

import magnifying_glass from '../../static/Icons/magnifying-glass.svg'

function WordSelectionGrid({words}) {
  return (
    <div className="w-full flex flex-row flex-wrap">
    {
      words.map((item) => (
        <Link key={words.indexOf(item)} to="category" className='flex flex-row bg-gray-100 hover:bg-gray-200 rounded-md m-1 px-3 py-1 cursor-pointer'>
          <img className='w-3 h-3 m-auto mr-2' src={magnifying_glass} alt="Search Icon" />
          <span className='text-base text-gray-900'>{item}</span>
        </Link>
      ))
    }
  </div>
  )
}

export default WordSelectionGrid