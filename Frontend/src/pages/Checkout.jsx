import React from 'react'
import '../components/css/checkout.css'
import Layout from '../components/layout/Layout'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const cart = useSelector(state => state.cart)
  return (
    <>
    <Layout>
       <main id="orderPage">
        <seection class="full-order-page">
            <section class="order-left-container">
                <section class="order-user-info">
                    <form action="">
                        <div class="order-form-group">
                            <label for="">Deliver to :</label>
                            <input type="text" readonly placeholder="Username" />
                        </div>
                        <div class="order-form-group">
                            <label for="">Deliver Address :</label>
                            <input type="text" />
                            <span class="change-btn">Change</span>
                        </div>
                        <div class="order-form-group">
                            <label for="">Phone Number :</label>
                            <input type="text" />
                            <span class="change-btn">Change</span>
                        </div>
                        <div class="order-form-group">
                            <label for="">Email :</label>
                            <input type="text" readonly placeholder="aa@gmail.com" />
                        </div>
                    </form>

                </section>
                <section class="order-items-list">
                   {
                       cart.cartItems.map(cartItem => (
                           
                           
                           <div class="order-item-container">
                            {console.log(cartItem)}
                        <i class='bx bx-x prod-del-btn'></i>
                        <figure class="order-item-image">
                        <img src={`../../Assets/Images/Products/${cartItem.frontView}`}
                                alt="" />
                        </figure>
                        <div class="order-item-detail">
                            <h2 class="order-prod-name">{cartItem.productName}</h2>
                            <p class="order-prod-price">Price : Rs <span> {cartItem.salesPrice}</span></p>
                            <div class="order-prod-qty">
                                <i class='bx bxs-minus-circle'></i>
                                <span class="order-prod-qty-value">{cartItem.cartQuantity}</span>
                                <i class='bx bxs-plus-circle increase-btn-qty'></i>
                            </div>
                        </div>
                        <div class="order-item-final-container">
                            <span class="order-item-total-amt">Rs {cartItem.salesPrice * cartItem.cartQuantity}</span>
                        </div>

                    </div>
                    ))
                   }
                </section>
            </section>
            <section class="order-right-container">
                <div class="payment-option-container">
                    <h3>Payment Options :</h3>
                    <figure class="payment-option-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwWa20Ba7lNTbbVITqfiPY_662rA1zN2cSA&s"
                            alt="Khalti" />
                    </figure>
                </div>
                <hr />
                <div class="order-summary">
                    <h3>Order Summary</h3>
                    <span class="title subtotal">
                        SubTotal
                    </span>
                    <span class="value subtotal">
                        Rs {cart.cartTotalAmount}
                    </span>
                    <span class="title delivery">
                        Delivery
                    </span>
                    <span class="value delivery">
                        Rs 10
                    </span>
                    <span class="title total-payment">
                        Total Payment
                    </span>
                    <span class="value total-payment">
                        Rs {cart.cartTotalAmount + 10}
                    </span>
                    <p class="tax">All tax included</p>
                    <form action="">
                        <input type="submit" value="Place Order" />
                    </form>

                </div>

            </section>
        </seection>

    </main>

    </Layout>
    </>
  )
}

export default Checkout
