import React from 'react'
import '../components/css/productDetail.css'
import Layout from '../components/layout/Layout'
import Products from './components/products/Products'

const ProductSinglePage = () => {
  return (
    <>
      <Layout>
      <main id="productDetail">
        <section class="full-product-page">
            <ul class="category-page-bread-crumb">
                <li><a href="">Home</a></li>
                <li><a href="">Category Name</a></li>
                <li>Product name</li>
            </ul>
            <section class="product-content-container">
                <figure class="detail-product-img-container">
                    <div class="small-img-container">
                        <div class="img1 mini-img focus">
                            <img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg" alt="" />
                        </div>
                        <div class="img2 mini-img">
                            <img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg" alt="" />
                        </div>
                        <div class="img3 mini-img">
                            <img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg" alt="" />
                        </div>
                        <div class="img3 mini-img">
                            <img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg" alt="" />
                        </div>
                    </div>
                    <div class="main-img-container">
                        <img src="https://img.freepik.com/free-photo/beautiful-anime-character-cartoon-scene_23-2151035157.jpg"
                            alt="" />
                    </div>

                </figure>
                <section class="product-content">
                    <div class="product-main-detail">
                        <h1 id="productName">Product Name</h1>
                        <p class="rating"></p>
                        <p class="product-brand">Brand : <span>Anime</span></p>
                        <p class="main-product-price">Rs 426</p>
                        <p class="product-mrp">Rs 456</p>
                        <div class="main-product-qty-btn-container">
                            <span>Quantity :</span>
                            <div class="main-product-qty-btn">
                                <i class='bx bxs-minus-circle qty-decrease'></i>
                                <span class="qty-value">20</span>
                                <i class='bx bxs-plus-circle qty-increase'></i>
                            </div>
                        </div>
                        <button class="product-add-to-cart-btn"><i class='bx bx-cart'></i> Add to Cart</button>
                    </div>
                    <hr class="divider-product-detail" />
                    <div class="product-details" />
                        <h4>Product Details</h4>
                        <div class="product-detail-content">
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
            <section class="similar-products">
                <h2>Similar Products</h2>
                <div class="product-card-container">
                    <div class="product-card">
                        <figure class="product-img-container">
                            <a href=""><img
                                    src="https://img.freepik.com/free-photo/beautiful-anime-character-cartoon-scene_23-2151035157.jpg"
                                    alt="" /></a>
                        </figure>
                        <h3 class="product-name">Product Name</h3>
                        <span class="product-price">Rs 240</span>
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
                    {/* <!-- ------------------------------------------------------------ --> */}
                    <div class="product-card">
                        <figure class="product-img-container">
                            <a href=""><img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg"
                                    alt="" /></a>
                        </figure>
                        <h3 class="product-name">Product Name</h3>
                        <span class="product-price">Rs 240</span>
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
                    <div class="product-card">
                        <figure class="product-img-container">
                            <a href=""><img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg"
                                    alt="" /></a>
                        </figure>
                        <h3 class="product-name">Product Name</h3>
                        <span class="product-price">Rs 240</span>
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
                    <div class="product-card">
                        <figure class="product-img-container">
                            <a href=""><img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg"
                                    alt="" /></a>
                        </figure>
                        <h3 class="product-name">Product Name</h3>
                        <span class="product-price">Rs 240</span>
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
                    <div class="product-card">
                        <figure class="product-img-container">
                            <a href=""><img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg"
                                    alt="" /></a>
                        </figure>
                        <h3 class="product-name">Product Name</h3>
                        <span class="product-price">Rs 240</span>
                        <div class="product-qty-changer">
                            <span>Qty</span>
                            <div class="qty-btn">
                                <button class="decrease">-</button>
                                <span>00</span>
                                <button class="increase">+</button>
                            </div>
                        </div>
                        <button class="add-to-cart-btn"><i class='bx bx-cart'></i>Add to Cart</button>
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

