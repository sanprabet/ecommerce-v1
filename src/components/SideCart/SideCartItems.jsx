import React, { useContext } from 'react'

import { cartSlideOpenContext } from "../Shared/Contexts"

import ProductsCarouselVertical from "./ProductsCarouselVertical"
import { Link } from 'react-router-dom'


import PromoCode from '../Shared/PromoCode'


export default function SideCartItems() {

	const { shopingCart, setshopingCart } = useContext(cartSlideOpenContext);

	return (
	<section>
		<ProductsCarouselVertical border={true} />
		<div>
			<div className="flex flex-col justify-center mt-9">
				<p className="mb-2 text-sm text-center text-gray-600">Total Compra: {"$20.000"}</p>
					<PromoCode />
				<Link to="/cart" onClick={() => setshopingCart(false)} className="w-full h-12 mx-auto px-5 py-2 mt-1 border-black border-2 hover:bg-black hover:text-white">
					<p className='text-center'>Finaliza Tu Compra</p>
				</Link>
			</div>
		</div>
	</section>
	)
}