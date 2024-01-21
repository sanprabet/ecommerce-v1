import React from 'react'

import PlusIcon from "../../static/Icons/plus-icon-light.svg"
import MinusIcon from "../../static/Icons/minus-icon-light.svg"

function QuantityScore({quantity}) {
  return (
    <div className='min-[100px]:w-16 min-[425px]:w-24 min-[100px]:h-9 min-[425px]:h-11 my-1 px-2 pt-1.5 flex flex-row justify-center border-2 border-black'>
        <img className='min-[100px]:h-5 min-[425px]:h-6 cursor-pointer' src={MinusIcon} alt="Remove One of this item" />
        <p className="min-[100px]:mx-1 min-[425px]:mx-3 text-base min-[100px]:leading-4 min-[425px]:leading-6">{quantity}</p>
        <img className="min-[100px]:h-5 min-[425px]:h-6 cursor-pointer" src={PlusIcon} alt="Add One More of this item" />
    </div>
  )
}

export default QuantityScore