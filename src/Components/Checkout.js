import React from 'react'
import './Checkout.css'
import { useContext } from 'react'
import CartContext from '../CartContex'

function Checkout() {
  const {items} = useContext(CartContext)
  return (
    <div className='checkout'>
        <h2>Checkout</h2>
        <div className='shopping_bag'>
            {items.map((item)=>(
                <div className='shoppingBag_details'>
                    <h2>{item.name}</h2>
                    <h3>{item.price}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Checkout