
import Layout from '../components/layout/Layout'
import Products from './components/products/Products'

import { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {

  const [products, setProducts] = useState([])
  const handleData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/homePage')
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
        </main>
      </Layout>
    </>
  )
}

export default Home
