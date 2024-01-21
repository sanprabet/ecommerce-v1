import React from 'react'

import QuantityScore from '../Shared/QuantityScore'

function ProductDisplayCheckoutVertical({img, name, price, quantity, totalPrice, category, border}) {
  const borderStyles = border? "" : ""
  return (
    <div className={'my-1 min-[100px]:h-36 min-[425px]:h-40 flex flex-row ' + border}>
        <div className="shrink-0 relative mr-2">
            <img className='h-full' src={img} alt={name} />
        </div>
        <div className='flex flex-col w-4/6'>
          <div className='ml-4 my-auto'>
            <p className='min-[100px]:text-xs min-[425px]:text-base'>{name}</p>
            <p className='min-[100px]:text-xs min-[425px]:text-base color-zinc-100'>{category}</p>
            <p className='min-[100px]:text-sm min-[425px]:text-base font-bold'>Precio: {price}</p>
            <p className={(totalPrice == null? "hidden": "") +' min-[100px]:text-sm min-[425px]:text-base font-bold'}>Total: {totalPrice}</p>
            <div className={ (quantity === null? "hidden": "") + ' flex flex-row justify-between' }>
              <QuantityScore quantity={quantity}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductDisplayCheckoutVertical