import React, { useState } from 'react'
import { NavBarDesktop, NavBarMobile } from './pages/NavBar'
import { FooterDesktop, FooterMobile } from "./components/Shared/Footer"
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Sidebar from './components/Shared/SideCart'

import { useWindowDimensions } from "./components/Shared/FunctionalViewPortGetter"
import './App.scss'

function App() {
  const {width} = useWindowDimensions()
  const [expanded, setExpanded] = useState(true)
  return  (
    <div className='relative box-border'>
      { width > 768? <NavBarDesktop />:  <NavBarMobile />}
      <Sidebar expanded={expanded} />
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
