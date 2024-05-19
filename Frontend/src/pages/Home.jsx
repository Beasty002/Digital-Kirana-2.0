
import Layout from '../components/layout/Layout'
import Products from './components/products/Products'
import '../components/css/cart.css'
// import '../components/css/navbar.css'
import '../components/css/footer.css'

const Home = () => {
  return (
    <>
      <Layout>
        <main>
          <section id="promotionalImageContainer">
              <div className="main-img-banner">
                  <img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg" alt="" />
              </div>
              <div className="secondary-img-banner">
                  <img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg" alt="" />
              </div>
          </section>
        <Products />
        </main>
      </Layout>
    </>
  )
}

export default Home
