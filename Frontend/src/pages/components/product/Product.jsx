// import axios from 'axios'
// import React from 'react'
import { Link } from 'react-router-dom'
// import Products from '../../../assets'

const Product = ({data}) => {
  return (
    <>
      <Link to={`/singlePage/${data._id}`} className="product-card">
        <figure className="product-img-container">
          <img src= ''
            alt="" />
        </figure>
        <h3 className="product-name">{data.productName} </h3>
        <span className="product-price">{data.salesPrice}</span>
        <div className="product-qty-changer">
          <span >Qty</span>
          <div className="qty-btn">
            <button className="decrease">-</button>
            <span>00</span>
            <button className="increase">+</button>
          </div>
        </div>
        <button className="add-to-cart-btn"><box-icon name='cart' ></box-icon>Add to Cart</button>
      </Link>
    </>
  )
}


export default Product
