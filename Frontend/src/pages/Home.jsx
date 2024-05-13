import React from 'react'
import Layout from '../components/layout/Layout'
import Products from './components/products/Products'

const Home = () => {
  return (
    <>
    <Layout>
    <main>
        <section id="promotionalImageContainer">
            <div class="main-img-banner">
                <img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg" alt="" />
            </div>
            <div class="secondary-img-banner">
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
