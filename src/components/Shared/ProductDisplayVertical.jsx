import React from 'react'

import PlusIcon from "../../static/Icons/plus-icon-light.svg"
import MinusIcon from "../../static/Icons/minus-icon-light.svg"

function ProductDisplayCheckoutVertical({img, name, price, quantity}) {
  return (
    <div className='mt-3 flex flex-row'>
        <div className="relative w-2/6 px-4">
            <img className='' src={img} alt={name} />
        </div>
        <div className='flex flex-col w-4/6'>
        <div>
            <p className='text-base'>{name}</p>
            <p className='text-sm font-bold'>{price}</p>
        </div>
        <div className='flex flex-row justify-between'>
            <div className='my-1 px-1 py-2 flex flex-row border-2 border-black'>
            <img className='h-6' src={MinusIcon} alt="Remove One of this item" />
            <p className="mx-3 text-base leading-6">{quantity}</p>
            <img className="h-6" src={PlusIcon} alt="Add One More of this item" />
            </div>
            <img src="" alt="" />
        </div>
        </div>
    </div>
  )
}

export default ProductDisplayCheckoutVertical