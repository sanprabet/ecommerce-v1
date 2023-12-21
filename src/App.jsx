import { useState } from 'react'
import { NavBarDesktop, NavBarMobile } from './pages/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import PromotionalStrip from './components/Shared/PromotionalStrip'
import { Routes, Route } from 'react-router-dom'
import './App.scss'

function App() {

  return  (
    <div className='app-container box-border'>
      <PromotionalStrip />
      <NavBarMobile />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
