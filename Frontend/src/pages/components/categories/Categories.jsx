import React from 'react'
import { Link } from 'react-router-dom'

const Categories = ({data}) => {
    // console.log(data)
    return (
        <>
        {
            data.map((category,index) =>{
            return (
            <Link to={`/productCategory/${category._id}`} key={index} >
                <div class="category-card">
                    <figure class="category-img-container">
                        <img src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg" alt="" />
                    </figure>
                    <p class="category-name">
                        {category.name}
                    </p>

                </div>

            </Link>
            )
            })
        }
        </>
    )
}

export default Categories
