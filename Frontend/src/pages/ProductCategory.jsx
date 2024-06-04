
import Layout from '../components/layout/Layout'
import '../components/css/productCategory.css'
import Products from './components/products/Products'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect,useState } from 'react'

const ProductCategory = () => {
  const {id}  = useParams()
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const handleAPI = async () => {
      const response = await axios.get(`http://localhost:3000/api/productCategory/${id}`)
      setProducts(response.data.categoryProducts);
      // console.log("Inside Product Category")
    }
    handleAPI()
  }, [id])
  return (
    <>
      <Layout>
        <Products data={products} type='category'/>
      </Layout>
    </>
  )
}

export default ProductCategory