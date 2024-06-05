
import '../components/css/checkout.css'
import Layout from '../components/layout/Layout'
import { useSelector } from 'react-redux'
import PaymentForm from './PaymentForm'

const Checkout = () => {
    const cart = useSelector(state => state.cart)
    const auth = useSelector(state => state.auth)
    return (
        <>
            <Layout>
                <main id="orderPage">
                    <seection className="full-order-page">
                        <section className="order-left-container">
                            <section className="order-user-info">
                                <form action="">
                                    <div className="order-form-group">
                                        <label htmlFor="">Deliver to :</label>
                                        <input type="text" readOnly placeholder={auth.user.username} />
                                    </div>
                                    <div className="order-form-group">
                                        <label htmlFor="">Deliver Address :</label>
                                        <input type="text" />
                                        <span className="change-btn">Change</span>
                                    </div>
                                    <div className="order-form-group">
                                        <label htmlFor="">Phone Number :</label>
                                        <input type="text" />
                                        <span className="change-btn">Change</span>
                                    </div>
                                    <div className="order-form-group">
                                        <label htmlFor="">Email :</label>
                                        <input type="text" readOnly placeholder={auth.user.email} />
                                    </div>
                                </form>

                            </section>
                            <section className="order-items-list">
                                {
                                    cart.cartItems.map((cartItem) => {
                                        <div className="order-item-container">

                                            <i className='bx bx-x prod-del-btn'></i>
                                            <figure className="order-item-image">
                                                <img src={`../../Assets/Images/Products/${cartItem.frontView}`}
                                                    alt="" />
                                            </figure>
                                            <div className="order-item-detail">
                                                <h2 className="order-prod-name">{cartItem.productName}</h2>
                                                <p className="order-prod-price">Price : Rs <span> {cartItem.salesPrice}</span></p>
                                                <div className="order-prod-qty">
                                                    <i className='bx bxs-minus-circle'></i>
                                                    <span className="order-prod-qty-value">{cartItem.cartQuantity}</span>
                                                    <i className='bx bxs-plus-circle increase-btn-qty'></i>
                                                </div>
                                            </div>
                                            <div className="order-item-final-container">
                                                <span className="order-item-total-amt">Rs {cartItem.salesPrice * cartItem.cartQuantity}</span>
                                            </div>

                                        </div>
                                    })
                                }
                            </section>
                        </section>
                        <section className="order-right-container">
                            <div className="payment-option-container">
                                <h3>Payment Options :</h3>
                                <figure className="payment-option-container">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwWa20Ba7lNTbbVITqfiPY_662rA1zN2cSA&s"
                                        alt="Khalti" />
                                </figure>
                            </div>
                            <hr />
                            <div className="order-summary">
                                <h3>Order Summary</h3>
                                <span className="title subtotal">
                                    SubTotal
                                </span>
                                <span className="value subtotal">
                                    Rs {cart.cartTotalAmount}
                                </span>
                                <span className="title delivery">
                                    Delivery
                                </span>
                                <span className="value delivery">
                                    Rs 0
                                </span>
                                <span className="title total-payment">
                                    Total Payment
                                </span>
                                <span className="value total-payment">
                                    Rs {cart.cartTotalAmount}
                                </span>
                                <p className="tax">All tax included</p>
                                <form action="">
                                    {/* <input type="submit" value="Place Order" /> */}
                                    <PaymentForm cartData={cart} authData={auth} />
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
