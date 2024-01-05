import React, { useState, useContext } from "react"

// Components
import { cartSlideOpenContext } from "../components/Shared/Contexts"

import SideCartVoid from "../components/SideCart/SideCartVoid";
import SideCartItems from "../components/SideCart/SideCartItems";

import SideBarContainer from "../components/Shared/SideBarContainer";


export default function SideCart() {
  const [items, setItems] = useState(1) //TODO: Replace

  const { shopingCart, setshopingCart } = useContext(cartSlideOpenContext);
  
  return (
    <SideBarContainer setIsVisible={setshopingCart} isVisible={shopingCart}  isOnTheRight={true}>
      {items? <SideCartItems />: <SideCartVoid /> }
    </SideBarContainer>
  )
}