/* eslint-disable react/prop-types */

import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Cart from '../cart/Cart'

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
