
import { BrowserRouter,Routes,Route  } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import './App.css'
import ProductSinglePage from './pages/ProductSinglePage'
import ProductCategory from './pages/ProductCategory'
import 'boxicons'
import { Provider } from 'react-redux'
import store from './store/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AdminHome from './admin/pages/AdminHome'
import AdminProduct from './admin/pages/AdminProduct'
import { getTotals } from './store/cartSlice'
import Checkout from './pages/Checkout'
import AdminCategory from './admin/pages/AdminCategory'
import AdminAddProduct from './admin/pages/AdminAddProduct'
import AdminAddCategory from './admin/pages/AdminAddCategory'
import ForgotPassword from './pages/auth/ForgotPassword'
import VerifyUser from './pages/auth/VerifyUser'
import AdminCustomerTable from './admin/pages/AdminCustomerTable'


const App = () => {
  store.dispatch(getTotals())
  return (
    <>
   <Provider store={store} >
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logout" /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/verify-user/:id' element={<VerifyUser />} />
          <Route path="/singlePage/:id" element={<ProductSinglePage />} />
          <Route path="/productCategory/:id" element={<ProductCategory />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path='/admin' element={<AdminHome />} />
          <Route path='/adminProduct' element={<AdminProduct />} />
          <Route path='/adminProduct/addProduct' element={<AdminAddProduct />} />
          <Route path='/adminCategory' element={<AdminCategory />} />
          <Route path='/adminCategory/addCategory' element={<AdminAddCategory />} />
          <Route path='/adminCustomer' element={<AdminCustomerTable />} />
        </Routes>
      </BrowserRouter>

   </Provider>

    </>
  )
}

export default App
