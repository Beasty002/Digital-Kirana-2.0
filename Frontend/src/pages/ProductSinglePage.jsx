// import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../components/css/productDetail.css'
import Layout from '../components/layout/Layout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Product from './components/product/Product'
// import {importProductImages} from '../utils/importProductImages'


const ProductSinglePage = () => {
    const { id } = useParams()

    const [product, setProduct] = useState({})
    const [similarProducts, setSimilarProducts] = useState([])
    const [data,setData] = useState({})
    // console.log(importProductImages)
    useEffect(() => {
        const handleAPI = async () => {
            const singleProduct = await axios.get(`http://localhost:3000/api/singlePage/${id}`)
            // console.log(singleProduct.data)
            setProduct(singleProduct.data.productData)
            setSimilarProducts(singleProduct.data.similarProducts)
            console.log(product)
        }
        handleAPI()
    }, [])

    const handleEvent = (data) =>{
        // e.preventDefault()
        // console.log(data)
        setProduct(data)
    }   
    



    return (
        <>
            <Layout>
                <main id="productDetail">
                    <section className="full-product-page">
                        <ul className="category-page-bread-crumb">
                            <li><Link to='/'>Home</Link></li>
                            <li><a href="">{product.category} </a></li>
                            <li>{product.productName}</li>
                        </ul>
                        <section className="product-content-container">
                            <figure className="detail-product-img-container">
                                <div className="small-img-container">
                                    <div className="img1 mini-img focus">
                                        <img src={`../../Assets/Images/Products/${product.frontView}`} alt="" />
                                    </div>
                                    <div className="img2 mini-img">
                                        <img src={`../../Assets/Images/Products/${product.backView}`} alt="" />
                                    </div>
                                    <div className="img3 mini-img">
                                        <img src={`../../Assets/Images/Products/${product.sideView}`} alt="" />
                                    </div>
                                    <div className="img3 mini-img">
                                        <img src={`../../Assets/Images/Products/${product.topView}`} alt="" />
                                    </div>
                                </div>
                                <div className="main-img-container">
                                    <img src="https://img.freepik.com/free-photo/beautiful-anime-character-cartoon-scene_23-2151035157.jpg"
                                        alt="" />
                                </div>

                            </figure>
                            <section className="product-content">
                                <div className="product-main-detail">
                                    <h1 id="productName">{product.productName}</h1>
                                    <p className="rating"></p>
                                    <p className="product-brand">Brand : <span>Anime</span></p>
                                    <p className="main-product-price">{data.salesPrice}</p>
                                    <p className="product-mrp">Rs 456</p>
                                    <div className="main-product-qty-btn-container">
                                        <span>Quantity :</span>
                                        <div className="main-product-qty-btn">
                                            <i className='bx bxs-minus-circle qty-decrease'></i>
                                            <span className="qty-value">{data.stocks}</span>
                                            <i className='bx bxs-plus-circle qty-increase'></i>
                                        </div>
                                    </div>
                                    <button className="product-add-to-cart-btn"><i className='bx bx-cart'></i> Add to Cart</button>
                                </div>
                                <hr className="divider-product-detail" />
                                <div className="product-details" />
                                <h4>Product Details</h4>
                                <div className="product-detail-content">
                                    {product.description}
                                </div>
                            </section>
                        </section>
                        <section className="similar-products">
                            <h2>Similar Products</h2>
                            <div className="product-card-container">
                                {
                                    similarProducts.map((product,index) => {
                                        return (
                                            <Product data={product} change={handleEvent} key={index} />
                                        )
                                    })
                                }
                            </div>
                        </section>
                    </section>

                </main>

            </Layout>
        </>
    )
}

export default ProductSinglePage

