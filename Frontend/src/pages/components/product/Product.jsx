
const Product = () => {
  return (
    <>
      <div className="product-card">
        <figure className="product-img-container">
          <img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg" alt="" />
        </figure>
        <h3>Product Name</h3>
        <span>Rs 240</span>
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
    </>
  )
}

export default Product