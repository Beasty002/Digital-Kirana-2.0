
import Layout from '../components/layout/Layout'
import Products from './components/products/Products'
// import '../components/css/navbar.css'
// import '../components/css/ca'
import { useEffect, useState } from 'react'
import axios from 'axios'
// import Categories from './components/categories/Categories'

const Home = () => {

  const [products, setProducts] = useState([])
  const handleData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/homePage')
      console.log("Inisde Home")
      setProducts(response.data.products);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    handleData()
  }, [])
  return (
    <>
      <Layout>
        <main>
          <section id="promotionalImageContainer">
            <div className="main-img-banner">
              <img src={`../../Assets/Images/promotion/deliver banner.png`} alt="" />
            </div>
            <div className="secondary-img-banner">
              <img src={`../../Assets/Images/promotion/advertisement-banner.png`} alt="" />
            </div>
          </section>
          <Products data={products}/>

          {/* <section className="categories-list">
            <h2>Categories</h2>
            <div className="categories-container-list">
              <Categories data={categories} />
            </div>
          </section> */}
        </main>
      </Layout>
    </>
  )
}

export default Home
