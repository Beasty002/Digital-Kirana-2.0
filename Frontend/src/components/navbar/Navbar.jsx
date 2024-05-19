import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
   

  return (
    <>
        <header>
        <nav>
            <div className="logo-container">
                <img src="" alt="Logo" />
            </div>
            <div className="search-bar">
                <input type="text" name="search" placeholder="Enter the product name...." />
                <i className='bx bx-search'></i>
            </div>
            <ul className="nav-items">
                <li><i className='bx bx-user'></i> Login</li>
                <li className="cart-btn"><i className='bx bx-cart'></i> <span id="cart-item-amt" >00</span></li>
            </ul>
        </nav>
        <div className="nav-cat-items-container">
            <ul className="nav-cat-items">
                <li><Link to="">Meat</Link></li>
                <li><Link to="">Meat</Link></li>
                <li><Link to="">Meat</Link></li>
                <li><Link to="">Meat</Link></li>
                <li><Link to="">Meat</Link></li>
                <li><Link to="">Meat</Link></li>
                <li><Link to="">Meat</Link></li>
                <li><Link to="">Meat</Link></li>

            </ul>
        </div>

    </header>
    </>
  )
}

export default Navbar
