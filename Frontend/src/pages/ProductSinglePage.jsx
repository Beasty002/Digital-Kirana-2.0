// import React from 'react'
import '../components/css/productDetail.css'
import Layout from '../components/layout/Layout'
// import Products from './components/products/Products'

const ProductSinglePage = () => {
  return (
    <>
      <Layout>
      <main id="productDetail">
        <section className="full-product-page">
            <ul className="category-page-bread-crumb">
                <li><a href="">Home</a></li>
                <li><a href="">Category Name</a></li>
                <li>Product name</li>
            </ul>
            <section className="product-content-container">
                <figure className="detail-product-img-container">
                    <div className="small-img-container">
                        <div className="img1 mini-img focus">
                            <img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg" alt="" />
                        </div>
                        <div className="img2 mini-img">
                            <img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg" alt="" />
                        </div>
                        <div className="img3 mini-img">
                            <img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg" alt="" />
                        </div>
                        <div className="img3 mini-img">
                            <img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg" alt="" />
                        </div>
                    </div>
                    <div className="main-img-container">
                        <img src="https://img.freepik.com/free-photo/beautiful-anime-character-cartoon-scene_23-2151035157.jpg"
                            alt="" />
                    </div>

                </figure>
                <section className="product-content">
                    <div className="product-main-detail">
                        <h1 id="productName">Product Name</h1>
                        <p className="rating"></p>
                        <p className="product-brand">Brand : <span>Anime</span></p>
                        <p className="main-product-price">Rs 426</p>
                        <p className="product-mrp">Rs 456</p>
                        <div className="main-product-qty-btn-container">
                            <span>Quantity :</span>
                            <div className="main-product-qty-btn">
                                <i className='bx bxs-minus-circle qty-decrease'></i>
                                <span className="qty-value">20</span>
                                <i className='bx bxs-plus-circle qty-increase'></i>
                            </div>
                        </div>
                        <button className="product-add-to-cart-btn"><i className='bx bx-cart'></i> Add to Cart</button>
                    </div>
                    <hr className="divider-product-detail" />
                    <div className="product-details" />
                        <h4>Product Details</h4>
                        <div className="product-detail-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sunt aut cumque
                            accusamus porro, fuga ipsa velit distinctio ut ipsam repudiandae! Saepe, sunt at! Obcaecati
                            tempore expedita itaque ipsum reprehenderit? Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Quo id tempora excepturi veniam, aliquid distinctio reprehenderit sunt
                            eius, atque doloribus, quisquam corporis cum adipisci? Delectus impedit et ullam repudiandae
                            cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit ipsum fugiat
                            doloribus veniam aliquam voluptatibus at? Illum, quam, porro dignissimos ullam maxime
                            consectetur ad quaerat nisi eveniet vel doloremque! Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Ratione quasi doloribus eligendi dolorem, at quod, tenetur error quo
                            inventore quia sequi eaque officiis earum cumque molestias quaerat perspiciatis delectus
                            optio tempora quos numquam consectetur et? Odio odit iste necessitatibus fugiat a blanditiis
                            placeat reprehenderit voluptatem, laudantium vero voluptatibus delectus deserunt, tempora,
                            similique ratione? Cumque debitis laudantium nisi quas! Minima aliquam consequatur, ex error
                        </div>
                </section>
            </section>
            <section className="similar-products">
                <h2>Similar Products</h2>
                <div className="product-card-container">
                    <div className="product-card">
                        <figure className="product-img-container">
                            <a href=""><img
                                    src="https://img.freepik.com/free-photo/beautiful-anime-character-cartoon-scene_23-2151035157.jpg"
                                    alt="" /></a>
                        </figure>
                        <h3 className="product-name">Product Name</h3>
                        <span className="product-price">Rs 240</span>
                        <div className="product-qty-changer">
                            <span>Qty</span>
                            <div className="qty-btn">
                                <button className="decrease">-</button>
                                <span>0</span>
                                <button className="increase">+</button>
                            </div>
                        </div>
                        <button className="add-to-cart-btn"><i className='bx bx-cart'></i>Add to Cart</button>
                    </div>
                    {/* <!-- ------------------------------------------------------------ --> */}
                    <div className="product-card">
                        <figure className="product-img-container">
                            <a href=""><img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg"
                                    alt="" /></a>
                        </figure>
                        <h3 className="product-name">Product Name</h3>
                        <span className="product-price">Rs 240</span>
                        <div className="product-qty-changer">
                            <span>Qty</span>
                            <div className="qty-btn">
                                <button className="decrease">-</button>
                                <span>0</span>
                                <button className="increase">+</button>
                            </div>
                        </div>
                        <button className="add-to-cart-btn"><i className='bx bx-cart'></i>Add to Cart</button>
                    </div>
                    <div className="product-card">
                        <figure className="product-img-container">
                            <a href=""><img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg"
                                    alt="" /></a>
                        </figure>
                        <h3 className="product-name">Product Name</h3>
                        <span className="product-price">Rs 240</span>
                        <div className="product-qty-changer">
                            <span>Qty</span>
                            <div className="qty-btn">
                                <button className="decrease">-</button>
                                <span>0</span>
                                <button className="increase">+</button>
                            </div>
                        </div>
                        <button className="add-to-cart-btn"><i className='bx bx-cart'></i>Add to Cart</button>
                    </div>
                    <div className="product-card">
                        <figure className="product-img-container">
                            <a href=""><img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg"
                                    alt="" /></a>
                        </figure>
                        <h3 className="product-name">Product Name</h3>
                        <span className="product-price">Rs 240</span>
                        <div className="product-qty-changer">
                            <span>Qty</span>
                            <div className="qty-btn">
                                <button className="decrease">-</button>
                                <span>0</span>
                                <button className="increase">+</button>
                            </div>
                        </div>
                        <button className="add-to-cart-btn"><i className='bx bx-cart'></i>Add to Cart</button>
                    </div>
                    <div className="product-card">
                        <figure className="product-img-container">
                            <a href=""><img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg"
                                    alt="" /></a>
                        </figure>
                        <h3 className="product-name">Product Name</h3>
                        <span className="product-price">Rs 240</span>
                        <div className="product-qty-changer">
                            <span>Qty</span>
                            <div className="qty-btn">
                                <button className="decrease">-</button>
                                <span>00</span>
                                <button className="increase">+</button>
                            </div>
                        </div>
                        <button className="add-to-cart-btn"><i className='bx bx-cart'></i>Add to Cart</button>
                    </div>


                    {/* <!-- ------------------------------------------------------------ --> */}
                </div>

            </section>


        </section>

    </main>

      </Layout>
    </>
  )
}

export default ProductSinglePage

