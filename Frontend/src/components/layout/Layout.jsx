// import React from 'react'
import Cart from '../cart/Cart'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import '../../components/css/cart.css'
import '../../components/css/footer.css'


const Layout = ({children}) => {
  return (
    <>
      <Cart />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
