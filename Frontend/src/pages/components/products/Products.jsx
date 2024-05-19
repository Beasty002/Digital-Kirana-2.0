
import Product from '../product/Product'

const Products = () => {
  return (
    <>
      <section id="productShowcase">
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-card-container">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </section>
      </section>
    </>
  )
}

export default Products
