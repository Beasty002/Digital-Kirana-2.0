/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {useState } from 'react'
import { Link } from 'react-router-dom'
// import Cart from '../cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../../store/cartSlice'
import Cookies from 'js-cookie'
import { handleSuccessLogin } from '../../store/authSlice'
import axios from 'axios'


const Navbar = ({ data }) => {

    const auth = useSelector(state => state.auth)
    const { isOpen } = useSelector(state => state.cart)
    const userToken = Cookies.get('userToken')
    console.log(userToken)
    const googleToken = Cookies.get('googleToken')
    const facebookToken = Cookies.get('facebookToken')
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    const facebookUser = false
    // const [overlay, setOverlay] = useState('false')
    const { cartTotalQuantity } = useSelector(state => state.cart)


    if (!googleToken && !userToken && !facebookToken) {
        dispatch(handleSuccessLogin())
    }

    // const overLay = () =>{
    //     setOverlay(!overlay)
    // }

    const getLogoutGoogle = async () => {
        Cookies.remove("googleToken","connect.sid")
        window.open("http://localhost:3000/auth/google/logout", "_self")
    }
    // console.log(googleUser)

    const handleSearch = async () => {
        if(search===''){
            return
        }
        try {
            const response = await axios.get(`http://localhost:3000/api/search/${search}`)
            const productIds = await response.data.productIds;
            console.log(productIds)
            // renderSearchResults(productIds);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };
    const handleChange=(e)=>{
        setSearch(e.target.value)
        handleSearch()
    }
    return (
        <>
            <div className={isOpen ? 'overlayv' : 'overlay'}></div>
            <header>
                <nav className="main-nav">
                    <div className="logo-container">
                        <Link to='/'>
                            <img src="../../../Assets/Images/Icons/logo-single_img.png" alt="Logo" />
                        </Link>
                    </div>
                    <div className="menu-slider"> <box-icon name='menu-alt-left' ></box-icon>
                    </div>
                    <div className="search-bar">
                        <input type="text" name="search" onChange={handleChange} placeholder="Enter the product name...." />
                    </div>
                    <ul className="nav-items">
                        <li>
                            <>
                                {
                                    userToken ? (
                                        <>
                                            <box-icon name='user' ></box-icon>{auth.user.username}
                                            {/* <Link to='/login' ><box-icon name='user' ></box-icon> Login</Link> */}
                                        </>
                                    )  :
                                        (

                                            <Link to='/login' ><box-icon name='user' ></box-icon> Login</Link>
                                        )
                                }
                            </>
                        </li>
                        <li className="cart-btn"><box-icon name='cart' onClick={() => {
                            // overLay()
                            dispatch(toggleCart())
                        }} ></box-icon><span id="cart-item-amt">{cartTotalQuantity}</span></li>
                    </ul>
                </nav>
                <div className="nav-cat-items-container">
                    <ul className="nav-cat-items">
                        {
                            data.map((category, index) => {
                                return <li key={index} ><Link to={`/productCategory/${category.name}`} >{category.name}</Link></li>
                            })
                        }
                    </ul>
                </div>
            </header>

            <nav className="bottom-nav">
                <ul>
                    <li><Link to="/"><box-icon name='home' ></box-icon>Home</Link></li>
                    <li><Link to="/category"><box-icon name='category' ></box-icon> Category</Link></li>
                    <li><Link to="/cart"><box-icon name='cart' ></box-icon> Cart</Link></li>
                    <li><Link to="/account"><box-icon name='user' ></box-icon>Account</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
