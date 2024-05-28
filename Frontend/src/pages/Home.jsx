
import Layout from '../components/layout/Layout'
import Products from './components/products/Products'
// import '../components/css/navbar.css'
// import '../components/css/ca'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const handleAPI = async () =>{
    const response = await axios.get('http://localhost:3000/api/product')
    console.log(response.data)
}
useEffect(()=>{
  handleAPI()
})
  return (
    <>
    <Layout>
    <main>
        <section id="promotionalImageContainer">
            <div className="main-img-banner">
                <img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg" alt="" />
            </div>
            <div className="secondary-img-banner">
                <img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg" alt="" />
            </div>
        </section>
       <Products />
    </main>
    </Layout>
    </>
  )
}

export default Home
