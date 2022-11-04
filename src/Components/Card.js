import React from 'react'
import {IoShirtOutline} from 'react-icons/io5'
import {AiFillShopping} from 'react-icons/ai'
import './Card.css'
import { useContext } from 'react'
import CartContext from '../CartContex'


function Card({ name, price }) {
  const {addToCart} = useContext(CartContext)
  return (
    <div onClick={()=> addToCart(name, price)} className='card'>
        <div className='product_box'>
            <IoShirtOutline/>
        </div>
        <div className='purchase'>
            <h3>{name}</h3>
            <AiFillShopping/>
        </div>
        <h4>${price}</h4>
    </div>
  )
}

export default Card