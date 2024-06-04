/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decreaseCart } from '../../../store/cartSlice'

const Product = ({data,change}) => {
 const cart = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  const handleData = () => {
    change(data)
  }

  const handleAddToCart = product =>{
      dispatch(addToCart(product))
  }

  const handleDecreaseCart = data =>{
    dispatch(decreaseCart(data))
  }
  console.log(data)
  return (
    <>
    <div  className="product-card">
      <Link to={`/singlePage/${data._id}`}  onClick={handleData} >
        <figure className="product-img-container">
          <img src= {`../../Assets/Images/Products/${data.frontView}`}
            alt="" />
        </figure>

        <h3 className="product-name">{data.productName} </h3>
        <span className="product-price">Rs:{data.salesPrice}</span>
      </Link>
        <div className="product-qty-changer">
          <span >Qty</span> 
           <div className="qty-btn">
            <button className="decrease" >-</button>
            <span>00</span>
            <button className="increase">+</button>
          </div>
        </div>
        <button className="add-to-cart-btn" onClick={()=> handleAddToCart(data)}><box-icon name='cart' ></box-icon>Add to Cart</button>

    </div>
    </>
  )
}


export default Product
