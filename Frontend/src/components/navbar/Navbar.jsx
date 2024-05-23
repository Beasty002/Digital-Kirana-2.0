
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'




const Navbar = () => {
    const [categories,setCategory] = useState([])
    useEffect(()=>{
        const handleAPI = async () =>{
            const response = await axios.get('http://localhost:3000/api/product')
            // console.log(response.data)
            setCategory(response.data.category)
        }
        handleAPI()

    },[])
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
                {document.cookie ?
                    <>
                        <li>
                            <Link to='/Logout'><i className='bx bx-user'></i> Logout</Link>
                        </li>
                        <li className="cart-btn">
                            <i className='bx bx-cart'></i> <span id="cart-item-amt">00</span>
                        </li>
                    </>:
                    <>
                        <li>
                            <Link to='/login'><i className='bx bx-user'></i> Login</Link>
                        </li>
                        <li>
                            <Link to='/register'><i className='bx bx-user'></i> Register</Link>
                        </li>
                        <li className="cart-btn">
                        <box-icon name='cart' ></box-icon> <span id="cart-item-amt">00</span>
                        </li>
                    </>
                }
            </ul>
        </nav>
        <div className="nav-cat-items-container">
            <ul className="nav-cat-items">
                {
                    categories.map(category=>{
                        <li><Link to="/productCategory" >{category.name}</Link></li>
                    })
                }
                
            </ul>
        </div>
    </header>
    </>
  )
}

export default Navbar
