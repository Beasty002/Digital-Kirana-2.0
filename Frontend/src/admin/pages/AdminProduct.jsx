import React from 'react'
import Layout from '../layout/Layout'
import '../components/css/productpage.css'

const AdminProduct = () => {
    return (

        <Layout >
            <main id="productListingPage">
                <h1 class="page-heading">Products</h1>
                <section class="admin-product-search">
                    <div class="admin-product-search-container">
                        <div class="searchbar-container">
                            <input type="text" placeholder="Search Product" class="product-searchbar" />
                            <i class='bx bx-search'></i>
                        </div>
                        <select name="" id="" class="product-category-search">ss
                            <option value="Categories">Categories</option>
                            <option value="Groccery">Groccery</option>
                        </select>
                    </div>
                    <button class="add-product-btn">Add New Product <i class='bx bx-plus-circle'></i></button>
                </section>
                <section class="admin-product-list">
                    <table class="admin-product-table">
                        <tr class="table-heading">
                            <th class="product-id">S.N</th>
                            <th class="prod-list-img">Image</th>
                            <th class="prod-list-name">Product Name</th>
                            <th class="prod-list-category">Category</th>
                            <th class="prod-list-stock">Stock</th>
                            <th class="prod-list-published">Published</th>
                            <th class="prod-list-view">View</th>
                            <th class="prod-list-actions">Actions</th>
                        </tr>
                        <tr class="product-data">
                            <td class="prod-data-sn">1</td>
                            <td class="prod-data-img"><img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_0tDxKr6OVOME5w1NODBkotoRW4ih_UsRzuJxlfx_Og&s"
                                alt="" /></td>
                            <td class="prod-data-name">1</td>
                            <td class="prod-data-category">1</td>
                            <td class="prod-data-stock">1</td>
                            <td class="prod-data-published">1</td>
                            <td class="prod-data-view"><i class='bx bx-search-alt-2 view-prod-btn'></i></td>
                            <td class="prod-data-actions"><i class='bx bx-edit-alt edit-prod-btn'></i><i
                                class='bx bx-trash-alt delete-prod-btn'></i></td>
                        </tr>
                    </table>
                </section>

            </main>

        </Layout>

    )
}

export default AdminProduct
