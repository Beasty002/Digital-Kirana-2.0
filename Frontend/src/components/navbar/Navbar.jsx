
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'




const Navbar = () => {
    const [categories,setCategory] = useState([])
    useEffect(()=>{
        const handleAPI = async () =>{
            const response = await axios.get('http://localhost:3000/api/product')
            // console.log(response.data.category)
            setCategory(response.data.category)
        }
        handleAPI()
    },[])
  return (
    <>
    <header>
       <nav className="main-nav">
            <div className="logo-container">
                <Link to='/'>
                <img src="" alt="Logo" />
                </Link>
            </div>
            <div className="menu-slider"> <box-icon name='menu-alt-left' ></box-icon>
            </div>
            <div className="search-bar">
                <input type="text" name="search" placeholder="Enter the product name...." />
                {/* <box-icon name='search-alt-2' ></box-icon> */}
            </div>
            <ul className="nav-items">
                <li><Link to='/login' ><box-icon name='user' ></box-icon> Login</Link></li>
                <li className="cart-btn"><box-icon name='cart' ></box-icon><span id="cart-item-amt">00</span></li>
            </ul>
        </nav>
        <div className="nav-cat-items-container">
            <ul className="nav-cat-items">
                {
                    categories.map((category,index) => {
                        // console.log(category.name,index)
                        return <li key={index} ><Link to={`/category/${category.name}`} >{category.name}</Link></li>

                    })
                }
                

            </ul>
        </div>
    </header>
    <nav className="bottom-nav">
        <ul>
            <li><a href=""><box-icon name='home' ></box-icon>Home</a></li>
            <li><a href=""><box-icon name='category' ></box-icon> Category</a></li>
            <li><a href=""><box-icon name='cart' ></box-icon> Cart</a></li>
            <li><a href=""><box-icon name='user' ></box-icon>Account</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
