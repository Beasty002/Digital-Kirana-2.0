import React from 'react'
import Layout from '../layout/Layout'
import '../components/css/allcustomer.css'

const AdminCustomerTable = () => {
  return (
    <>
    <Layout>
       <main id="adminCustomerPage">
        <h1>Customers</h1>
        <section class="admin-cus-search">
            <div class="admin-cus-search-container">
                <div class="searchbar-container">
                    <input type="text" placeholder="Search customer" class="cus-searchbar" />
                    <i class='bx bx-search'></i>
                </div>
            </div>
        </section>
        <section class="admin-cus-list">
            <table class="admin-cus-table">
                <tr class="table-heading">
                    <th class="cus-id">S.N</th>
                    <th class="cus-list-joindate">Joindate</th>
                    <th class="cus-list-name">cus Name</th>
                    <th class="cus-list-email">Email</th>
                    <th class="cus-list-number">Number</th>

                    <th class="cus-list-view">View</th>
                    <th class="cus-list-actions">Actions</th>
                </tr>
                <tr class="cus-data">
                    <td class="cus-data-id">1</td>
                    <td class="cus-data-joindate">1</td>
                    <td class="cus-data-name">1</td>
                    <td class="cus-data-email">40</td>
                    <td class="cus-data-number">1</td>
                    <td class="cus-data-view"><i class='bx bx-search-alt-2 view-cus-btn'></i></td>
                    <td class="cus-data-actions"><i class='bx bx-trash-alt delete-cus-btn'></i></td>
                </tr>
            </table>
        </section>


    </main>

    </Layout>
    </>
  )
}

export default AdminCustomerTable
