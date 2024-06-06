
import Layout from '../components/layout/Layout'
import '../components/css/productCategory.css'
import Products from './components/products/Products'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const SearchProductPage = () => {
  const { query } = useParams()
  const [products, setProducts] = useState([]);
//   useEffect(() => {
    const handleAPI = async () => {
        const response = await axios.get(`http://localhost:3000/api/search/${query}`)
      setProducts(response.data.productIds);
      console.log(query)
      console.log(products)
    }
    handleAPI()
//   })
  return (
    <>
      <Layout>
        <section className='category-page'>
          <Products data={products} type='search' />
        </section>
      </Layout>
    </>
  )
}

export default SearchProductPage

