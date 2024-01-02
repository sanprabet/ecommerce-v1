import React from 'react'
import { createContext, useState, useEffect } from 'react';


export const cartSlideOpenContext = createContext(null);
export const isUserScrollAtTopContext = createContext(null);
export const dimensionsContext = createContext(null);
export const searchSlideOpenContext = createContext(null);
export const categoriesSlideOpenContext = createContext(null);


function Contexts({children }) {
  // cartSlideOpenContext
  const [shopingCart, setshopingCart] = useState(false);

  // searchSideOpenContext
  const [searchSlideOpen, setSearchSlideOpen] = useState(false);

  // categoriesSlideOpenContext
  const [categorySlideOpen, setCategorySlideOpen] = useState(false);

  // dimensionsContext and isAtTop (contexts share functions)

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [isAtTop, setIsAtTop] = useState(true);

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
 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //


  return (
    <cartSlideOpenContext.Provider
      value={{
          shopingCart,
          setshopingCart
      }}
    >
      <categoriesSlideOpenContext.Provider
        value={{
          categorySlideOpen,
          setCategorySlideOpen
        }}
      >
        <searchSlideOpenContext.Provider
          value={{
            searchSlideOpen,
            setSearchSlideOpen
          }}
        >
          <isUserScrollAtTopContext.Provider value={isAtTop}> {/* isAtTop format is bool */}
             <dimensionsContext.Provider value={windowDimensions}>  {/* windowDimensions format is { width, height } */}
                {children}
            </dimensionsContext.Provider>
          </isUserScrollAtTopContext.Provider>
        </searchSlideOpenContext.Provider>
      </categoriesSlideOpenContext.Provider>
    </cartSlideOpenContext.Provider>
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