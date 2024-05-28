import React from 'react'
import Layout from '../components/layout/Layout'
import '../components/css/productCategory.css'
import Products from './components/products/Products'

const ProductCategory = () => {
  return (
    <>
      <Layout>
       <Products  type='category'/>

      </Layout>
    </>
  )
}

export default ProductCategory
