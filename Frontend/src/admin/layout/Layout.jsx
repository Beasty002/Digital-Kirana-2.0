/* eslint-disable react/prop-types */
// import React from 'react'
import AdminSideBar from '../components/AdminSideBar'
import AdminNavbar from '../components/AdminNavbar'
import '../components/css/flex.css'

const Layout = ({ children }) => {
  return (
    <>
      <div className='flex'>
        <AdminSideBar />
        <div className='flexd'>

          <AdminNavbar />
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
