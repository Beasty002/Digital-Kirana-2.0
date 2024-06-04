import React from 'react'
import '../components/css/addcategory.css'
import Layout from '../layout/Layout'

const AdminAddCategory = () => {
  return (
    <>
      <Layout>
      <main id="addcategory">
        <section class="add-category-container">
            <h1 class="page-heading">Add Category</h1>
            <form action="" class="add-category-form">
                <label for="">Category Name</label>
                <input type="text" />
                <label for="">Upload Image</label>
                <div class="img-submitter">
                    <input type="image" src="" alt="" />
                    <span class='upload-image'>Click to <br/>add image</span>
                </div>
                <div class="submit-btn"> <input type="submit" value="Add " />
                </div>
            </form>
        </section>
    </main>

    </Layout>
    </>
  )
}

export default AdminAddCategory
