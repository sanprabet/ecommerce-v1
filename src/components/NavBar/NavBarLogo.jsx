import React from 'react'
import logo from "../../static/LosPuntosLogo.png"
import { Link } from 'react-router-dom'
import "./styles/NavBarLogo.scss"

function NavBarLogo() {
  return (
    <div className="my-auto mr-2 flex">
        <Link className="flex justify-center align-middle" to="/">
            <img className="navBarLogo--image w-36 h-10" src={logo} alt="logo"/>
        </Link>
    </div>
  )
}

export default NavBarLogo