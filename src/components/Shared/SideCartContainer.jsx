import React, { useState } from "react"
import SideCartVoid from "./SideCartVoid";

import "./styles/SideCartContainer.scss";
import CloseIcon from "../../static/Icons/close-x.svg"

export default function SideCartContainer() {
  const [expanded, setExpanded] = useState(true)
  const [items, setItems] = useState(0)

  const isHidden = expanded? "h-full w-full bg-gray-400/75 absolute bottom-0 right-0 top-0 left-0 z-50" : "hidden";
  
  return (
    <div className={isHidden}>
      <div className="h-full w-full relative flex justify-end">
        <div className="w-96 px-2 py-4 h-screen sticky right-0 top-0 bg-white">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h2 className="text-lg text-bold leading-4">Carrito de compras</h2>
              <p className="mt-1 text-sm text-gray-600">0 items</p>
            </div>
            <img onClick={() => setExpanded(false)} className="h-5 cursor-pointer" src={CloseIcon} alt="close icon" />
          </div>
          {items? <SideCartVoid />: <SideCartVoid /> }
          
        </div>
      </div>
    </div>
  )
}