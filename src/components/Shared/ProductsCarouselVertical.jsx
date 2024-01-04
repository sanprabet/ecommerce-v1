import React from 'react'

import ProductDisplayCheckoutVertical from './ProductDisplayVertical'
import ScrollableDiv from './ScrollableDiv'

import ApplePipe from "../../static/Products/ApplePipe.png"
import MediumBudLightBong from "../../static/Products/MediumBudLightBong.png"
import "./styles/ProductsCarouselVertical.scss"

const cart = [
  {id: 0, name: 'Pipa "Manzana" 15cm', price: "25.000", category: 'Pipas', img: ApplePipe},
  {id: 1, name: 'Bong "Bud Light" 50cm', price: "60.000",  category: 'Bongs', img: MediumBudLightBong},
  {id: 2, name: 'Bong "Bud Light" 50cm', price: "60.000",  category: 'Bongs', img: MediumBudLightBong},
]

function ProductsCarouselVertical() {
  return (
    <ScrollableDiv heightTailwind={"h-72"} >
      {cart.map((product) => (
          <ProductDisplayCheckoutVertical key={product.id} img={product.img} name={product.name} price={product.price} quantity={1}  />
      ))}
    </ScrollableDiv>
  )
}

export default ProductsCarouselVertical