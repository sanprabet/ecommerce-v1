import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

// Contexts
import { dimensionsContext } from "./components/Shared/Contexts"

// Components
import { FooterDesktop, FooterMobile } from "./components/Shared/Footer"
import { NavBarDesktop, NavBarMobile } from './pages/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Cart from './pages/Cart'
import SideCartContainer from './components/Shared/SideCartContainer'

// Styles
import './App.scss'

function App() {
  const { width } = useContext(dimensionsContext);

  return  (
    <div className='relative box-border'>
      { width > 768? <NavBarDesktop />:  <NavBarMobile />}
      <SideCartContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      { width > 768? <FooterDesktop />:  <FooterMobile />}
    </div>
  )
}

export default App
