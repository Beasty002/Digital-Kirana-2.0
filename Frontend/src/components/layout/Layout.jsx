// import React from 'react'
import Cart from '../cart/Cart'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const Layout = ({children}) => {
  return (
    <>
      {/* <Cart /> */}
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
