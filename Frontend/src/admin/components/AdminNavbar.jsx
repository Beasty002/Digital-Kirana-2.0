
const AdminNavbar = () => {
    return (
        <>
            <nav id="adminNavBar">
                <ul className="nav-contents">
                    <li><i className='bx bx-bell admin-notification'><span className="notification-count">12</span></i></li>
                    <li className="admin-profile">
                        <i className='bx bxs-user-circle'></i>
                        <p className="admin-info">
                            <span className="admin-name">
                                John Doe
                            </span>
                            <span className="admin-role">
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
