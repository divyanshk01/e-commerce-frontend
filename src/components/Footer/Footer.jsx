import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
        <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quis eum at! Sequi asperiores iusto est, inventore ipsum natus eligendi.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis explicabo eaque id commodi incidunt dignissimos ab laborum recusandae corporis vitae!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">
          कृष्णास्टोर
          </span>
          <span className="copyright">
          © Copyright {new Date().getFullYear()}. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="" height={70} width={400} />
        </div>
      </div>
    </div>
  )
}

export default Footer
