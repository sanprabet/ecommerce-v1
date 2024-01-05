import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/HomeCategory.scss"

function HomeCategory({img, name}) {
  return (
    <Link to="/products" className="overflow-hidden">
        <img
          className="HomeCategory__image w-full h-full"
          src={img}
          alt={name}
        />
    </Link>
  )
}

export default HomeCategory