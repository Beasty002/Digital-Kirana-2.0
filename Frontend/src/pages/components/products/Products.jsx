/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

// import { useEffect, useState } from 'react'
import Product from '../product/Product'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'

const Products = ({data,type}) => {
  console.log(data)
  // const [products,setProducts] = useState([])
  // const handleAPI = async () =>{
  //   const response = await axios.get('http://localhost:3000/api/homePage')
  //   // console.log(response.data.products)
  //   setProducts(response.data.products)
  // }
  // useEffect(()=>{
  //   handleAPI()
  // },[]) 
  return (
    <>
      <section id="productShowcase">
        <section className="featured-products">
          {
            type === 'category' ?(
              <>
              <h2>Non Featured Products</h2>
              {/* <h2>{data[0].category} Products</h2> */}
              </>
            ):(
              <h2>Featured Products</h2>
            )
          }
          <div className="product-card-container">
            {
              data.map((product) => {
                return (
                  <Product data={product} />
                )
              })
            }

          </div>
        </section>
      </section>
    </>
  )
}

export default Products
