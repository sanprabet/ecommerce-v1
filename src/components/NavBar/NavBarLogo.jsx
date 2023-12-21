import React from 'react'
import logo_img from '../../static/logo.webp'
import logonk from '../../static/logo-nk-square-white.jpg'
import logo from "../../static/punto.png"
import { Link } from 'react-router-dom'
import "./styles/NavBarLogo.scss"

function NavBarLogo() {
  return (
    <div className="navbar__logo my-auto mr-2 flex">
        <Link className="navbar__logo--link flex justify-center align-middle" to="/">
            <img className="navbar__logo--image w-36 h-10" src={logo} alt="logo"/>
        </Link>
    </div>
  )
}

export default NavBarLogo