import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import '../components/css/productCategory.css'
import Products from './components/products/Products'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductCategory = () => {
  const {id} = useParams()
  const [similarProducts,setSimilarProducts] = useState([])
  const handleData = async () =>{
    const response = await axios.get(`http://localhost:3000/api/category/${id}`)
    console.log(response.data.categoryProducts)
    // setSimilarProducts(response.data.categoryProducts)
  }
  useEffect(()=>{
    handleData()
  },[])
  return (
    <>
      <Layout>
       <Products  />
      </Layout>
    </>
  )
}

export default ProductCategory
