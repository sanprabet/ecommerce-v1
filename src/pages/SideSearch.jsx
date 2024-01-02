import React, { useState, useContext } from "react"

// Components
import NavBarSearch from "../components/NavBar/NavBarSearch";
import { searchSlideOpenContext } from "../components/Shared/Contexts"

// Styles
import "./styles/SideCart.scss";
import CloseIcon from "../static/Icons/close-x.svg"

export default function SideSearch() {
  const { searchSlideOpen, setSearchSlideOpen } = useContext(searchSlideOpenContext);

  const isHidden = searchSlideOpen? "h-full w-full bg-gray-400/75 absolute bottom-0 right-0 top-0 left-0 z-40" : "hidden";
  return (
    <div className={isHidden}>
      <div className="h-full w-full relative flex justify-start">
        <div className="w-96 p-4 h-screen sticky right-0 top-0 bg-white">
          <div className="mb-2 flex flex-row justify-end">
            <img onClick={() => setSearchSlideOpen(false)} className="h-5 cursor-pointer" src={CloseIcon} alt="close icon" />
          </div>
          <div className="w-full h-max">
            <NavBarSearch />
          </div>
        </div>
      </div>
    </div>
  )
}


