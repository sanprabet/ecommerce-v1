import React, { useState } from 'react'
import { NavBarDesktop, NavBarMobile } from './pages/NavBar'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'

import { useWindowDimensions } from "./components/Shared/FunctionalViewPortGetter"
import './App.scss'

function App() {
  const {width} = useWindowDimensions()
  console.log(width)
  return  (
    <div className='app-container box-border'>
      { width > 768? <NavBarDesktop />:  <NavBarMobile />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
