import React, { useState, useContext } from "react"

// Components
import { categoriesSlideOpenContext } from "../components/Shared/Contexts"

// Styles
import "./styles/SideCart.scss";
import CloseIcon from "../static/Icons/close-x.svg"

export default function SideSearch() {
  const { categorySlideOpen, setCategorySlideOpen } = useContext(categoriesSlideOpenContext);

  const isHidden = categorySlideOpen? "h-full w-full bg-gray-400/75 absolute bottom-0 right-0 top-0 left-0 z-50" : "hidden";
  
  return (
    <div className={isHidden}>
      <div className="h-full w-full relative flex justify-start">
        <div className="w-96 p-4 h-screen sticky right-0 top-0 bg-white">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h2 className="text-lg text-bold leading-4">Categorias</h2>
            </div>
            <img onClick={() => setCategorySlideOpen(false)} className="h-5 cursor-pointer" src={CloseIcon} alt="close icon" />
          </div>
          <div className="w-full h-max">
            A
          </div>
        </div>
      </div>
    </div>
  )
}
