import React from 'react'
import Product from '../product/Product'

const Products = () => {
  return (
    <>
      <section id="productShowcase">
        <section class="featured-products">
          <h2>Featured Products</h2>
          <div class="product-card-container">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </section>
      </section>
    </>
  )
}

export default Products
