import React, { useState } from 'react'

import CloseIconWhite from "../../static/Icons/close-x-white.svg"

function PromoCode() {
  const [promoCode, setPromoCode] = useState(null);
	const [tempPromoCode, setTempPromoCode] = useState("");

	const handleAddPromoCode = () => {
		// Verify If The PromoCode Exists
		setPromoCode(tempPromoCode)
		setTempPromoCode("")
	}

	const handleInputChange = (event) => {
		setTempPromoCode(event.target.value);
	}

	const removePromoCode = () => {
		setPromoCode(null);
	}

  return (
    <>
        {!promoCode ?
            <div className="w-full mx-auto flex justify-center mt-1 ">
                <input className='h-12 w-full mr-1 pl-3 border-black border-2' type="text" placeholder='Escribe tu codigo...' onChange={(event) => handleInputChange(event)} />
                <button onClick={() => handleAddPromoCode()} className='h-12 px-2 text-center border-black border-2 bg-black text-white hover:bg-white hover:text-black'>Añadir</button>
            </div> :
            <div className="w-full h-12 mx-auto px-10 py-2 mt-1 flex justify-between border-black bg-black text-white border-2">
                <p className='justify-self-center mr-12 leading-6'>PromoCode:  <span className='font-bold text-lg'>{promoCode}</span></p>
                <img onClick={removePromoCode} className='h-5 my-auto' src={CloseIconWhite} alt="Remove PromoCode" />
            </div>
        }
    </>
  )
}

export default PromoCode