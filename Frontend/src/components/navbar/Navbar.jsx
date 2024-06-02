
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Cart from '../cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../../store/cartSlice'


const Navbar = () => {
    const dispatch = useDispatch()
    const [categories,setCategory] = useState([])
    const [cartQuantity,setCartQuantity] = useState()
    const {cartTotalQuantity} = useSelector(state=> state.cart) 
    // setCartQuantity(cartTotalQuantity)
    // useEffect(()=>{
    //     setCartQuantity(cartQuantity)
    // },[cartTotalQuantity])
    useEffect(()=>{
        const handleAPI = async () =>{
            const response = await axios.get('http://localhost:3000/api/homePage')
            setCategory(response.data.category)
        }
        handleAPI()
    }, [])
    
    return (
        <>
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
                        <input type="text" name="search" placeholder="Enter the product name...." />
                    </div>
                    <ul className="nav-items">
                        <li><Link to='/login' ><box-icon name='user' ></box-icon> Login</Link></li>
                        <li className="cart-btn"><box-icon name='cart' onClick={()=>{
                            dispatch(toggleCart())
                        }} ></box-icon><span id="cart-item-amt">{cartTotalQuantity}</span></li>
                    </ul>
                </nav>
                <div className="nav-cat-items-container">
                    <ul className="nav-cat-items">
                        {
                            categories.map((category, index) => {
                                return <li key={index} ><Link to={`/productCategory/${category._id}`} >{category.name}</Link></li>
                            })
                        }
                    </ul>
                </div>
            </header>

            <nav className="bottom-nav">
                <ul>
                    <li><a href="/"><box-icon name='home' ></box-icon>Home</a></li>
                    <li><a href="/category"><box-icon name='category' ></box-icon> Category</a></li>
                    <li><a href="/cart"><box-icon name='cart' ></box-icon> Cart</a></li>
                    <li><a href="/account"><box-icon name='user' ></box-icon>Account</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
