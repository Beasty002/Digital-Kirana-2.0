// import React from 'react'
import { useParams } from 'react-router-dom'
import '../components/css/productDetail.css'
import Layout from '../components/layout/Layout'
import { useEffect, useState } from 'react'
import axios from 'axios'
// import Products from './components/products/Products'

const ProductSinglePage = () => {
    const { id } = useParams()

    const [product, setProduct] = useState({})

    // const [similarProducts, setSimilarProducts] = useState([])

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [propertyToFilterBy, setPrpoertyToFilterBy] = useState('Meat');

    useEffect(()=>{
        const handleAPI = async () => {
            const singleProduct = await axios.get(`http://localhost:3000/singlePage/${id}`)
             setProduct(singleProduct.data.productData)
            //  console.log(product)
            console.log(propertyToFilterBy)  
        }
        handleAPI()
    },[])

    // useEffect(()=>{

    // })
    // const sendAPI = async () => {
    //     try{
    //         const response = await axios.get(`http://localhost:3000/product`)
    //         setData(response.data.products)

    //     }catch{
    //         console.error('Error fetching data:', error);
    //     }
        // allData.filter(function(elem){
        //     if(elem.category === product.category){
        //         setFilteredData(elem)
        //     }
        // })
        // console.log(filteredData)
    // }
    // const handleMulti = async () => {
    //    
    //   const same = response.data.products
    // // console.log(same)
    // if(!same){
    //     return
    // }else{
    //           let similar = same.filter(function(data){
    //                return data.category === product.category
    //         }
    //     )
    //     console.log(similar)
    // }

    //     console.log(similarProducts)
    // }

    // useEffect(() => {
    //     handleAPI()
    //     sendAPI()
    // }, [])

    return (
        <>
            <Layout>
                <main id="productDetail">
                    <section className="full-product-page">
                        <ul className="category-page-bread-crumb">
                            <li><a href="">Home</a></li>
                            <li><a href="">{product.category} </a></li>
                            <li>{product.productName}</li>
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
                                    <h1 id="productName">{product.productName}</h1>
                                    <p className="rating"></p>
                                    <p className="product-brand">Brand : <span>Anime</span></p>
                                    <p className="main-product-price">{product.salesPrice}</p>
                                    <p className="product-mrp">Rs 456</p>
                                    <div className="main-product-qty-btn-container">
                                        <span>Quantity :</span>
                                        <div className="main-product-qty-btn">
                                            <i className='bx bxs-minus-circle qty-decrease'></i>
                                            <span className="qty-value">{product.stocks}</span>
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

