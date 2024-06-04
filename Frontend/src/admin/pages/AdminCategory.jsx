import React, { useEffect, useState } from 'react'
import '../components/css/category.css'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AdminCategory = () => {
  const [categories,setCategories] = useState([])
  const handleAPI = async () =>{
    const response = await axios.get('http://localhost:3000/api/homepage')
    setCategories(response.data.category)
}
console.log(categories)
useEffect(()=>{
    handleAPI()
},[])
  return (
    <>
    <Layout>
     <main id="categoryListingPage">
        <h1 class="page-heading">Category</h1>
        <section class="admin-category-search">
            <div class="admin-category-search-container">
                <div class="searchbar-container">
                    <input type="text" placeholder="Search category" class="category-searchbar" />
                    <i class='bx bx-search'></i>
                </div>
                <select name="" id="" class="category-category-search">ss
                    <option value="Categories">Categories</option>
                    {
                      categories.map(category=>{
                        return <option value={category.name}>{category.name}</option>

                      })
                    }
                </select>
            </div>
            <button class="add-category-btn"><Link to='/adminCategory/addCategory'>Add New category</Link> <i class='bx bx-plus-circle'></i></button>
        </section>
        <section class="admin-category-list">
            <table class="admin-category-table">
                <tr class="table-heading">
                    <th class="category-id">S.N</th>
                    <th class="cat-list-img">Image</th>
                    <th class="cat-list-name">Category Name</th>
                    <th class="cat-list-published">Published</th>
                    <th class="cat-list-view">View</th>
                    <th class="cat-list-actions">Actions</th>
                </tr>
                { 
                  categories.map((category,index)=>{ 
                return (<tr class="category-data">
                    <td class="cat-data-sn">{index+1}</td>
                    <td class="cat-data-img"><img
                            src={`../../../Assets/Images/categories/${category.imageUrl}`}
                            alt="" /></td>
                    <td class="cat-data-name">{category.name}</td>
                    <td class="cat-data-published">1</td>
                    <td class="cat-data-view"><i class='bx bx-search-alt-2 view-cat-btn'></i></td>
                    <td class="cat-data-actions"><i class='bx bx-edit-alt edit-cat-btn'></i><i
                            class='bx bx-trash-alt delete-cat-btn'></i></td>
                </tr>)

                    }) 
                 } 
            </table>
        </section>

    </main>
    </Layout>
    </>
  )
}

export default AdminCategory
