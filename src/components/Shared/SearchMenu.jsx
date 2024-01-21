import React, { useContext } from 'react';
import {Link} from "react-router-dom"

//Components
import ProductsCarouselSmall from './ProductsCarouselSmall';

//Context
import { desktopNavBarSearchDropdownOpenContext } from "./Contexts"

//styles and images
import "./styles/NavBarSearchMenu.scss"
import magnifying_glass from '../../static/Icons/magnifying-glass.svg'

const masBuscados = ["bongs", "pipas", "tutoriales", "semillas", "blunts", "macetas"]

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

function SearchMenu({products_per_page}) {

  return (
    <div className="NavBarSearchMenu w-full p-3">
      <div>
        <div className="flex flex-col">
          <h2 className="my-1 mb-2 text-bold leading-4">Mas Buscados</h2>
        </div>
        <WordSelectionGrid words={masBuscados} />
      </div>
      <div>
        <div className="flex flex-row justify-start">
          <div className="flex flex-col mt-3">
            <h2 className="my-1 mb-2 text-base text-bold leading-4">Populares</h2>
          </div>
        </div>
        <ProductsCarouselSmall products_per_page={products_per_page} />
      </div>
    </div>
  )
}

export default SearchMenu