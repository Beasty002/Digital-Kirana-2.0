
import { useEffect, useState } from 'react'
import Product from '../product/Product'
import axios from 'axios'

const Products = () => {
  const [products,setProducts] = useState([])
  const handleAPI = async () =>{
    const response = await axios.get('http://localhost:3000/product')
    // console.log(response.data.products)
    setProducts(response.data.products)
  }
  useEffect(()=>{
    handleAPI()
  },[])
  // console.log(products)
 
  return (
    <>
      <section id="productShowcase">
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-card-container">
            {
              products.map(product=>{
                return(
                  <Product data={product} />
                )
              })
            }
            {/* <Product />
            <Product />
            <Product />
            <Product />
            <Product /> */}
          </div>
        </section>
      </section>
    </>
  )
}

export default Products