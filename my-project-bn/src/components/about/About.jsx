import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div className='h-container flexCenter'>
      <div className="content-left">
        <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/desktop/aio-desktop-optiplex-7410-keyboard-mouse-wired-inspiron-27-7710-800x620-category.png?fmt=png-alpha&wid=800&hei=620" alt="" width={600} />
      </div>

      <div className="content-right">
        <div className="welcome">
          <h1>About Us</h1>
          <p>Welcome to our website! We are a leading provider of high-quality computers and technology solutions. With years of experience in the industry, we pride ourselves on delivering top-notch products and excellent customer service.</p>
        </div>
        <hr />
        <div className="quaility">
          <h3>Quality and Reliability</h3>
          <p>We understand the importance of reliability when it comes to technology. That's why we source products from trusted manufacturers known for their quality craftsmanship and durability. Each product undergoes rigorous testing to ensure it meets our high standards before it reaches your hands.</p>
        </div>
        <hr />
        <div className="detail-product">
          <div className="mission">
            <h3>Our Mission</h3>
            <p>Our mission is to empower individuals and businesses through technology. We believe that computers play a vital role in today's interconnected world. Whether you're a student, a professional, or a gaming enthusiast, we strive to provide reliable and innovative computing solutions that meet your needs.</p>
          </div>
          <hr />
          <div className="product-rang">
            <h3>Product Rang</h3>
            <p>At our company, we offer a wide range of computers and accessories to cater to diverse requirements. From powerful desktop computers for intensive tasks to sleek laptops for on-the-go productivity, we have you covered. We also provide a variety of peripherals, such as monitors, keyboards, and mice, to enhance your computing experience.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
