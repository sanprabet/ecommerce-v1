import React, { useContext } from 'react';
import {Link} from "react-router-dom"

//Components
import WordSelectionGrid from './WordSelectionGrid';
import ProductsCarouselSmall from './ProductsCarouselSmall';

//Context
import { desktopNavBarSearchDropdownOpenContext } from "./Contexts"

//styles and images
import "./styles/NavBarSearchMenu.scss"
import CloseIcon from "../../static/Icons/close-x.svg"

const masBuscados = ["bongs", "pipas", "tutoriales", "semillas", "blunts", "macetas"]

function SearchMenu({products_per_page}) {

  const { setNavBarSearchDropdownOpen } = useContext(desktopNavBarSearchDropdownOpenContext)

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