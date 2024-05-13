import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <header>
        <nav>
            <div class="logo-container">
                <img src="" alt="Logo" />
            </div>
            <div class="search-bar">
                <input type="text" name="search" placeholder="Enter the product name...." />
                <i class='bx bx-search'></i>
            </div>
            <ul class="nav-items">
                <li><i class='bx bx-user'></i> Login</li>
                <li class="cart-btn"><i class='bx bx-cart'></i> <span id="cart-item-amt">00</span></li>
            </ul>
        </nav>
        <div class="nav-cat-items-container">
            <ul class="nav-cat-items">
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
