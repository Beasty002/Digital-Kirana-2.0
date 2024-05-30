import React from 'react'
import AdminSideBar from '../components/AdminSideBar'
import AdminNavbar from '../components/AdminNavbar'

const Layout = ({children}) => {
  return (
    <>
    <AdminNavbar />
      <AdminSideBar />
      {children}
    </>
  )
}

export default Layout
