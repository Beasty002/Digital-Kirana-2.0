import React from 'react'

const AdminNavbar = () => {
    return (
        <>
            <nav id="adminNavBar">
                <ul class="nav-contents">
                    <li><i class='bx bx-bell admin-notification'><span class="notification-count">12</span></i></li>
                    <li class="admin-profile">
                        <i class='bx bxs-user-circle'></i>
                        <p class="admin-info">
                            <span class="admin-name">
                                John Doe
                            </span>
                            <span class="admin-role">
                                Admin
                            </span>
                        </p>
                    </li>


                </ul>
            </nav>
        </>
    )
}

export default AdminNavbar
