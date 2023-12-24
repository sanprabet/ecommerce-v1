import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

// Check if top of the screen is between the 0 and 25px (scrolling whise)
export function isAtTheTop(){
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      setIsAtTop(window.scrollY < 25);
    };
 
    window.addEventListener('scroll', handleScroll);
 
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isAtTop
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    
    console.log(windowDimensions)
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
