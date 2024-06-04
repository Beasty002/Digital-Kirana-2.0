import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
  return (
    <>
      <aside id="adminSidebar">
        <div class="img-container">
            <figure><img
                    src="https://static.vecteezy.com/system/resources/thumbnails/033/662/051/small_2x/cartoon-lofi-young-manga-style-girl-while-listening-to-music-in-the-rain-ai-generative-photo.jpg"
                    alt="logo" id="adminLogo" /></figure>
            <i class='bx bx-menu-alt-left sidebar-min-btn'></i>
        </div>
        <ul class="side-items-list">
            <li class="side-item"><Link to='/admin'><i class='bx bxs-dashboard'></i><span>Dashboard</span></Link></li>
            <li class="side-item"><Link to='/adminProduct'><i class='bx bxl-product-hunt'></i><span>Product</span></Link></li>
            <li class="side-item"><Link to='/adminCategory'><i class='bx bx-border-all'></i><span>Categories</span></Link></li>
            <li class="side-item"><Link to=''><i class='bx bxs-dashboard'></i><span>Order</span></Link></li>
            <li class="side-item"><Link to=''><i class='bx bxs-dashboard'></i><span>Promotion</span></Link></li>
        </ul>
    </aside>
    </>
  )
}

export default AdminSideBar
