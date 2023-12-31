import React from 'react'
import { createContext, useState, useEffect } from 'react';


export const shoppingCartOpenContext = createContext(null);
export const isAtTheTopContext = createContext(null);
export const dimensionsContext = createContext(null);

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function Contexts({children }) {
  const [shopingCart, setshopingCart] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 25);
    };
 
    window.addEventListener('scroll', handleScroll);
 
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <shoppingCartOpenContext.Provider
      value={{
          shopingCart,
          setshopingCart
      }}
    >
      <isAtTheTopContext.Provider value={isAtTop}>
        <dimensionsContext.Provider value={windowDimensions}>
          {children}
        </dimensionsContext.Provider>
      </isAtTheTopContext.Provider>
    </shoppingCartOpenContext.Provider>
  )
}

export default Contexts


export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}