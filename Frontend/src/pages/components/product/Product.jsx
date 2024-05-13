import React from 'react'

const Product = () => {
  return (
    <>
      <div class="product-card">
        <figure class="product-img-container">
          <img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg" alt="" />
        </figure>
        <h3>Product Name</h3>
        <span>Rs 240</span>
        <div class="product-qty-changer">
          <span>Qty</span>
          <div class="qty-btn">
            <button class="decrease">-</button>
            <span>0</span>
            <button class="increase">+</button>
          </div>
        </div>
        <button class="add-to-cart-btn"><i class='bx bx-cart'></i>Add to Cart</button>
      </div>
    </>
  )
}

export default Product
