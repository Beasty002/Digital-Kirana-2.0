
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCart, removeFromCart } from '../../store/cartSlice'
const Cart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const handleRemoveFromCart = cartItem =>{
        dispatch(removeFromCart(cartItem))
    }
    const handleDecreaseCart = cartItem =>{
        dispatch(decreaseCart(cartItem))
    }

    return (
        <>
            <section id="cartSlider">
                <span id="cartCloseBtn">x</span>
                <section className="heading-div">
                    <h2>My cart</h2>
                    <span id="cartClearBtn" >Clear cart</span>
                </section>
                <section className="cart-item-container">
                    {
                        cart.cartItems.length === 0 ? (
                            <p>Cart is empty</p>
                        ) : (
                            <>
                                {
                                    cart.cartItems.map(cartItem => (
                                        <div className="cart-product-card" key={cartItem._id}>
                                            {/* {console.log(cartItem)} */}
                                            <div className="cart-product-img-container">
                                                <img src={`../../Assets/Images/Products/${cartItem.frontView}`} alt="" />
                                            </div>
                                            <div className="cart-product-specification">
                                                <h4 className="cart-product-name">{cartItem.productName} </h4>
                                                <p className="cart-product-price"><span className="">Price : Rs</span> <span>{cartItem.salesPrice}</span></p>
                                                <div className="cart-product-qty">
                                                    <button className="decrease-qty cart-qty-btn" >-</button>
                                                    <span className="cart-product-qty-value">{cartItem.cartQuantity}</span>
                                                    <button className="increase-qty cart-qty-btn">+</button>
                                                </div>
                                            </div>
                                            <div className="cart-product-total">
                                                <span className="cart-item-del-btn" onClick={() => handleRemoveFromCart(cartItem)}>x</span>
                                                <p><span className="price-denoter"></span> <span> Rs 30</span></p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </>

                        )
                    }

                </section>
                <section className="checkout-section">
                    <hr className="cart-divider-line" />
                    <div className="subtotal-container"><span>Subtotal : </span> <span className="cart-subtotal-price">Rs 500</span>
                    </div>
                    <button id="checkoutBtn">Checkout</button>
                </section>
            </section>
        </>
    )
}

export default Cart
