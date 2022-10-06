import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate } from 'react-router-dom'
import { getCartThunk, purchaseCartThunk, removeFromCartThunk } from '../store/slices/cart.slice'


export default function MonNavbar() {

  const cartState = useSelector((state) => state.cart)
  const [cart, setCart] = useState(false)
  const [total, setTotal] = useState(0)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  console.log(cartState)
  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  useEffect(()=>{
    totalCart()
  },[cart])

  const deleteCartItem = (id)=>{
    dispatch(removeFromCartThunk(id))
  }
  const totalCart = ()=>{
    cartState.map((cartItem)=>{
      setTotal(total + parseInt(cartItem.price))
    })
  }

  const toSomewhere = (page)=> {
    if(!localStorage.getItem('token')) {
      navigate('/login')
      return false
    }
    navigate(page)
  }

  const showCart = ()=> {
    if(!toSomewhere()) 
      setCart(!cart) 
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark MonNavbar">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={()=> toSomewhere('/')}>E-commerce</a>
        
          <div className='navBar-buttons'>
            <button onClick={()=> toSomewhere('/user')}>
            <i className='bx bx-user-circle'></i>
            </button>
            <button onClick={()=> toSomewhere('/purchases')}>
            <i className='bx bx-store' ></i>
            </button>
            <button onClick={() => showCart()}>
            <i className='bx bxs-cart'></i>
            </button>
          </div>
          <div className={cart? 'cart' : 'no-cart'}>
              <h2>Cart</h2>
              <div className="cartItems">
                {cartState.map((cartItem, index)=>(
                  <div className='cartItem' key={cartItem.id}>
                    <div className="cartItemText">
                      <h5>{cartItem.title}</h5>
                      <p>$ {cartItem.price}</p>
                    </div>
                    <p><b>Quantity: </b>{cartItem.productsInCart?.quantity}</p>
                    <Button variant="danger" onClick={()=> deleteCartItem(cartItem.id)}>Eliminar</Button>{' '}
                  </div>
                ))}
              </div>
              <div className='checkout'>
                <div className='checkoutTotal'>
                  <h4 className="total">Total:</h4>
                  <p>$ {total}</p>
                </div>
                <button className='addToCart' onClick={()=> purchaseCartThunk()}>Checkout </button>
              </div>
          </div>

      </div>
    </nav>
  )
}
