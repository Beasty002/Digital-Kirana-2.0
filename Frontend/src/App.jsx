
import { BrowserRouter,Routes,Route  } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import './App.css'
import ProductSinglePage from './pages/ProductSinglePage'
import ProductCategory from './pages/ProductCategory'
import 'boxicons'
// import { useEffect,useState } from 'react'
// import axios from 'axios'


const App = () => {
  // const [user,setuser] = useState('');
  // useEffect(() => {
  //   const getUser = () => {
  //     axios.get("http://localhost:3000/auth/login/success",{withCredentials:true})
  //     .then((response) => {
  //       if(response.status === 200) return response.data;
  //       throw new Error("authentication has been failed")
  //     }).then(responseObj => {
  //       setuser(responseObj.success)
  //     }).catch(err =>{
  //       console.log(err)
  //       setuser(false)
  //     })
  //   }
  //   getUser()
  // },[])
  // console.log(user)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logout" /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* {
            user === "true" ? 
            <>
            </>
            
          } */}
          <Route path="/singlePage/:id" element={<ProductSinglePage />} />
          <Route path="/productCategory" element={<ProductCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
