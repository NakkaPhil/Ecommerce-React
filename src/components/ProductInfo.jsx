import React, { useState, useEffect } from 'react'
import { addCartThunk } from '../store/slices/cart.slice'
import { useDispatch } from 'react-redux'

export default function ProductInfo({product}) {
  const dispach = useDispatch()

  const [quantity, setQuantity] = useState(1)
  
  const plus = ()=> {
    setQuantity(quantity+1)
  }

  const minus = ()=> {
    if(quantity == 1) return
    setQuantity(quantity-1)
  }

  const addToCartFunc = (prop)=> {
    const toCart = {
      id: prop,
      quantity: quantity
    } 

    dispach(addCartThunk(toCart))
  }

  return (
    <div>
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
      <div className="price">
        <h4>Price: $ {product.price}</h4>
        <h4>Quantity: </h4>
        <div className='quantity'>
          <button onClick={minus}>-</button>
          <input 
          type="number" 
          disabled
          value={quantity}
          />
          <button onClick={plus}>+</button>
        </div>
      </div>
      <button className='addToCart' onClick={()=>addToCartFunc(product.id)}>Add to cart </button>
    </div>
  )
}
