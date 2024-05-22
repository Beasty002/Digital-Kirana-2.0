// import axios from 'axios'
// import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({data}) => {
  // console.log(data)
  return (
    <>
      <Link to={`/singlePage/${data._id}`} className="product-card">
        <figure className="product-img-container">
          <a href=""><img src={data.backView}
            alt="" /></a>
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
        <button className="add-to-cart-btn"><i className='bx bx-cart'></i>Add to Cart</button>
      </Link>
    </>
  )
}


export default Product
