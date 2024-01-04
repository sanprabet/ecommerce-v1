import React, { useState } from 'react'
import ProductsCarouselVertical from '../Shared/ProductsCarouselVertical'
import CloseIconWhite from "../../static/Icons/close-x-white.svg"
import { Link } from 'react-router-dom'

export default function SideCartItems() {
	const [totalCartPrice, setTotalCartPrice] = useState("20.000"); 
	const [promoCode, setPromoCode] = useState(null); 
	const [tempPromoCode, setTempPromoCode] = useState("");

	const handleAddPromoCode = () => {
		// Verify If The PromoCode Exists
		setPromoCode(tempPromoCode)
		setTempPromoCode("")
		setTotalCartPrice("16.000")
	}

	const handleInputChange = (event) => {
		setTempPromoCode(event.target.value);
	}

	const removePromoCode = () => {
		setPromoCode(null);
		setTotalCartPrice("20.000")
	}

	return (
	<section>
		<ProductsCarouselVertical />
		<div>
		<div className="flex flex-col justify-center mt-9">
			<p className="mb-2 text-sm text-center text-gray-600">Total Compra:{totalCartPrice}</p>
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
			<Link to="/paymentAndDelivery" className="w-full h-12 mx-auto px-5 py-2 mt-1 border-black border-2 hover:bg-black hover:text-white">
				<p className='text-center'>Finalizar Compra</p>
			</Link>
		</div>
		</div>
		<div>

		</div>
	</section>
	)
}