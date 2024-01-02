import React, { useState, useContext } from "react"

// Components
import { shoppingCartOpenContext } from "../components/Shared/Contexts"
import SideCartVoid from "../components/Shared/SideCartVoid";
import SideCartItems from "../components/Shared/SideCartItems";

// Styles
import "./styles/SideCart.scss";
import CloseIcon from "../static/Icons/close-x.svg"

export default function SideCart() {
  const [items, setItems] = useState(0)
  const { shopingCart, setshopingCart } = useContext(shoppingCartOpenContext);

  const isHidden = shopingCart? "h-full w-full bg-gray-400/75 absolute bottom-0 right-0 top-0 left-0 z-50" : "hidden";
  
  return (
    <div className={isHidden}>
      <div className="h-full w-full relative flex justify-end">
        <div className="w-96 p-4 h-screen sticky right-0 top-0 bg-white">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h2 className="text-lg text-bold leading-4">Carrito de compras</h2>
              <p className="mt-1 text-sm text-gray-600">0 items</p>
            </div>
            <img onClick={() => setshopingCart(false)} className="h-5 cursor-pointer" src={CloseIcon} alt="close icon" />
          </div>
          {items? <SideCartItems />: <SideCartVoid /> }
          
        </div>
      </div>
    </div>
  )
}