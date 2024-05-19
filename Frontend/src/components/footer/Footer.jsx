import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>

        <div className="footer-social-links">
          <a href=""><i className='bx bxl-facebook-circle'></i></a>
          <a href=""><i className='bx bxl-instagram-alt'></i></a>
          <a href=""><i className='bx bxl-discord-alt'></i></a>
        </div>
        <div className="home-links">
          <Link to="">Home</Link>
          <div className="footer-vr-border"></div>
          <Link to="" className="">About us</Link>
          <div className="footer-vr-border"></div>
          <Link to="" className="">Contact us</Link>
        </div>
        <ul className="footer-contact-info">
          <li>+977 9898989</li>
          <li>Newroad Pokhara</li>
          <li> digitalkirana1@gmail.com</li>
        </ul>
        <span id="copyright">Copyright © 2023 beasty corp</span>
      </footer>

    </>
  )
}

export default Footer
