
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Cart from '../cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../../store/cartSlice'



const Navbar = () => {
    const [search,setSearch] = useState('')
    // console.log(search)
    const dispatch = useDispatch()
    const [categories, setCategory] = useState([])
    const [googleUser, setgoogleUser] = useState()
    const { cartTotalQuantity } = useSelector(state => state.cart)
    useEffect(() => {
        const handleAPI = async () => {
            const response = await axios.get('http://localhost:3000/api/homePage')
            setCategory(response.data.category)
        }
        handleAPI()
    }, [])
    useEffect(() => {
        const handleSuccessLogin = async () => {
            const response = await axios.get('http://localhost:3000/auth/login/success', { withCredentials: true })
            if (response.status === 200) {
                console.log(response.data)
                setgoogleUser(response.data.user);
            }
            else {
                setgoogleUser(null)
            }
        }
        handleSuccessLogin()
    }, [])

    const getLogoutGoogle = async () => {
        window.open("http://localhost:3000/auth/google/logout", "_self")
    }
    console.log(googleUser)
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
                        <input type="text" name="search" onChange={e =>setSearch(e.target.value)} placeholder="Enter the product name...." />
                    </div>
                    <ul className="nav-items">
                        {
                            googleUser ?
                             <li>
                                <button style={
                                    { display:'flex', 
                                    alignItems:'centre',backgroundColor:'transparent',border:'none'}
                                } onClick={getLogoutGoogle}>
                                    <box-icon name='user' ></box-icon>
                                    <span style={
                                        { fontSize:'1.1rem',
                                        fontWeight:'500'}
                                    }>{googleUser}</span>
                                </button>
                            </li> :
                            <li><Link to='/login' ><box-icon name='user' ></box-icon> Login</Link></li>

                        }
                        <li className="cart-btn"><box-icon name='cart' onClick={() => {
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
