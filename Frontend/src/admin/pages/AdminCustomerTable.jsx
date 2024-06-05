/* eslint-disable no-unused-vars */

import Layout from '../layout/Layout'
import '../components/css/allcustomer.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
const AdminCustomerTable = () => {
    const {allCustomers, setAllCustomers} = useState([])
    const handleAPI = async() =>{
        const response = await axios.get("http://localhost:3000/admin/dashboard/allCustomers");
        setAllCustomers(response.data.allCustomers)
    }
    useEffect(() => {
        handleAPI()
    },[])
    const {allLocalCustomers,allGoogleCustomers} = allCustomers;
    return (
        <>
            <Layout>
                <main id="adminCustomerPage">
                    <h1>Customers</h1>
                    <section className="admin-cus-search">
                        <div className="admin-cus-search-container">
                            <div className="searchbar-container">
                                <input type="text" placeholder="Search customer" className="cus-searchbar" />
                                <i className='bx bx-search'></i>
                            </div>
                        </div>
                    </section>
                    <section className="admin-cus-list">
                        <table className="admin-cus-table">
                            <tr className="table-heading">
                                <th className="cus-id">S.N</th>
                                <th className="cus-list-joindate">Joindate</th>
                                <th className="cus-list-name">Customer Name</th>
                                <th className="cus-list-email">Email</th>
                                <th className="cus-list-number">Number</th>

                                <th className="cus-list-view">View</th>
                                <th className="cus-list-actions">Actions</th>
                            </tr>
                            {
                                allLocalCustomers.map((localCustomer,index) => {
                                    <tr className="cus-data">
                                        <td className="cus-data-id">{index+1}</td>
                                        <td className="cus-data-joindate">{localCustomer.createdAt}</td>
                                        <td className="cus-data-name">{localCustomer.fullName}</td>
                                        <td className="cus-data-email">{localCustomer.email}</td>
                                        <td className="cus-data-number">{localCustomer.phoneNumber}</td>
                                        <td className="cus-data-view"><i className='bx bx-search-alt-2 view-cus-btn'></i></td>
                                        <td className="cus-data-actions"><i className='bx bx-trash-alt delete-cus-btn'></i></td>
                                    </tr>
                                })
                            }
                            
                        </table>
                    </section>


                </main>

            </Layout>
        </>
    )
}

export default AdminCustomerTable
