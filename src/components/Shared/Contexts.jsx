import React from 'react'
import { createContext, useState } from 'react';

const ShoppingCartOpenContext = createContext(null);
const CurrentUserContext = createContext(null);

function Contexts({children }) {
    const [shopingCart, setshopingCart] = useState(false);
    const [currentUser, setCurrentUser] = useState(false);
    return (
      <ShoppingCartOpenContext.Provider
        value={{
            shopingCart,
            setshopingCart
        }}
      >
        <CurrentUserContext.Provider
          value={{
            currentUser,
            setCurrentUser
          }}
        >
            {children}
        </CurrentUserContext.Provider>
    </ShoppingCartOpenContext.Provider>
            
    )
}

export default Contexts