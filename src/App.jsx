import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

// Contexts
import { dimensionsContext } from "./components/Shared/Contexts"

// Components
import { FooterDesktop, FooterMobile } from "./pages/Footer"
import { NavBarDesktop, NavBarMobile } from './pages/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Cart from './pages/Cart'
import SideCart from './pages/SideCart'
import SideSearch from './pages/SideSearch'
import SideCategories from './pages/SideCategories'

// Styles
import './App.scss'

function App() {
  const { width } = useContext(dimensionsContext);

  return  (
    <div className='relative box-border'>
      { width > 768? <NavBarDesktop />:  <NavBarMobile />}
      <SideCart />
      <SideSearch />
      <SideCategories />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/terms" element={<Cart />} />
      </Routes>
      { width > 768? <FooterDesktop />:  <FooterMobile />}
    </div>
  )
}

export default App
