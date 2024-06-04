import React from 'react'
import '../components/css/addproduct.css'
import Layout from '../layout/Layout'

const AdminAddProduct = () => {
  return (
    <>
    <Layout>
       <main id="addProduct">
        <h1 class="page-heading">Products</h1>
        <form action="" class="add-product-form">
            <section class="left-container">
                <div class="form-group">
                    <label for="">Product Images</label>
                    <div class="add-product-img-container">
                        <div class="img1">image</div>
                        <div class="img2">image</div>
                        <div class="img3">image</div>
                        <div class="img4">image</div>
                    </div>
                    <span class="form-criteria">Only this much image is allowed</span>
                </div>
                <div class="form-group">
                    <label for="">Product Description</label>
                    <textarea name="" id="" class="product-description"></textarea>
                    <span class="form-criteria">NO more than 500 characters</span>

                </div>

            </section>
            <section class="right-container">
                <div class="form-group">
                    <label for="">Product Name</label>
                    <input type="text" />
                </div>
                <div class="form-group-container">
                    <div class="form-group">
                        <label for="">Category</label>
                        <select name="" id="">
                            <option value="">category1</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="">Brand</label>
                        <input type="text" />
                    </div>
                </div>
                <div class="form-group-container">
                    <div class="form-group">
                        <label for="">Product Name</label>
                        <input type="text" />
                    </div>
                    <div class="form-group">
                        <label for="">Product Name</label>
                        <input type="text" />
                    </div>
                </div>
                <div class="form-group-container">
                    <div class="form-group">
                        <label for="">Stock Quantity</label>
                        <input type="text" />
                    </div>
                    <div class="form-group">
                        <label for="">Unit</label>
                        <select name="" id="">
                            <option value="">Pieces</option>
                            <option value="">Killogram</option>
                            <option value="">Box</option>
                        </select>
                    </div>
                </div>
                <input type="submit" value="Add Product" class="add-product-submit-btn" />

            </section>
        </form>



    </main>

    </Layout>
    </>
  )
}

export default AdminAddProduct
