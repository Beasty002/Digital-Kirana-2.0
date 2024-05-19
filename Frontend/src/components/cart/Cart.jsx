
import React from 'react'

const Cart = () => {
    
  return (
    <>
 <section id="cartSlider">
        <span id="cartCloseBtn">x</span>
        <section className="heading-div">
            <h2>My cart</h2>
            <span id="cartClearBtn">Clear cart</span>
        </section>
        <section className="cart-item-container">
            <div className="cart-product-card">
                <div className="cart-product-img-container">
                    <img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg" alt="" />
                </div>
                <div className="cart-product-specification">
                    <h4 className="cart-product-name">Crunchy-Cheetos </h4>
                    <p className="cart-product-price">Price : Rs <span>20</span></p>
                    <div className="cart-product-qty">
                        <button className="decrease-qty cart-qty-btn">-</button>
                        <span className="cart-product-qty-value">00</span>
                        <button className="increase-qty cart-qty-btn">+</button>
                    </div>
                </div>
                <div className="cart-product-total">
                    <span className="cart-item-del-btn">x</span>
                    <p>Total : <span> Rs 30</span></p>
                </div>
            </div>

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
