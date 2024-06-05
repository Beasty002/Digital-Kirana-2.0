
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
  return (
    <>
      <aside id="adminSidebar">
        <div className="img-container">
          <figure><img
            src="https://static.vecteezy.com/system/resources/thumbnails/033/662/051/small_2x/cartoon-lofi-young-manga-style-girl-while-listening-to-music-in-the-rain-ai-generative-photo.jpg"
            alt="logo" id="adminLogo" /></figure>
          <i className='bx bx-menu-alt-left sidebar-min-btn'></i>
        </div>
        <ul className="side-items-list">
          <li className="side-item"><Link to='/adminDashboard'><i className='bx bxs-dashboard'></i><span>Dashboard</span></Link></li>
          <li className="side-item"><Link to='/adminProduct'><i className='bx bxl-product-hunt'></i><span>Product</span></Link></li>
          <li className="side-item"><Link to='/adminCategory'><i className='bx bx-border-all'></i><span>Categories</span></Link></li>
          <li className="side-item"><Link to='/adminCustomer'><i className='bx bx-border-all'></i><span>Customers</span></Link></li>
          <li className="side-item"><Link to=''><i className='bx bxs-dashboard'></i><span>Order</span></Link></li>
          <li className="side-item"><Link to=''><i className='bx bxs-dashboard'></i><span>Promotion</span></Link></li>
        </ul>
      </aside>


    </>
  )
}

export default AdminSideBar
