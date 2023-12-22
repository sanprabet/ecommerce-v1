import { useState } from 'react'
import { NavBarDesktop, NavBarMobile } from './pages/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import PromotionalStrip from './components/Shared/PromotionalStrip'
import { Routes, Route } from 'react-router-dom'
import './App.scss'

function App() {

  return  (
    <div className='app-container box-border'>
      <PromotionalStrip />
      <NavBarDesktop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
