import React from 'react'
import { Link } from 'react-router-dom'

function SideCartVoid() {
  return (
    <div className="flex flex-col justify-center mt-9">
        <p className="text-sm text-center text-gray-600">El carrito esta vacio</p>
        <Link to="/" className="w-4/5 h-12 mx-auto px-5 py-2 mt-1 border-black border-2 hover:bg-black hover:text-white">
            <p className='text-center'>Seguir comprando</p>
        </Link>
    </div>
  )
}

export default SideCartVoid