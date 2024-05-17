import React from 'react'
import './Cart.css'
import Cartitems from '../../components/CartItems/Cartitems'


const Cart = () => {
  return (
    <div className='cart'>
      <Cartitems/>
    </div>
  )
}

export default Cart