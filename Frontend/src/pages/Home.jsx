
import Layout from '../components/layout/Layout'
import Products from './components/products/Products'
// import '../components/css/navbar.css'
// import '../components/css/ca'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Categories from './components/categories/Categories'

const Home = () => {
 
    const [categories,setCategories] = useState([])
    const handleData = async () =>{
      try{
        const response = await axios.get('http://localhost:3000/api/homePage')
        // console.log(response.data.category)
        setCategories(response.data.category)
      }catch(error){
        console.log(error)
      }
    }
    useEffect(() => {
      handleData()
    },[])
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
       <Products  />

       <section class="categories-list">
                <h2>Categories</h2>
                <div class="categories-container-list">

                    <Categories  data={categories} />
                   

                </div>
            </section>
    </main>
    </Layout>
    </>
  )
}

export default Home
