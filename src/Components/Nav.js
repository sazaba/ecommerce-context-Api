import React from 'react'
import {AiFillShopping} from 'react-icons/ai'
import './Nav.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../CartContex'


function Nav() {
 const {items} = useContext(CartContext)
  return (
    <div className='nav'>
        <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
          <h1>Wear</h1>        
        </Link>
        
        <Link style={{ textDecoration: 'none', color: 'black' }}  to='/checkout'>
        <div className='nav_icon'>
            <AiFillShopping/>
            <span>{items.length}</span>
        </div>        
        </Link>
        
    </div>
  )
}

export default Nav