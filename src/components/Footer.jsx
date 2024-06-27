import React from 'react'

function Footer() {
  return (
    <>
       {/* FOOTER */}
       <footer className="bg-dark bg-cover "  >
      <div className="py-12 border-bottom border-gray-700">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
    
              {/* Heading */}
              <h5 className="mb-7 text-center text-white">Want style Ideas and Treats?</h5>
    
              {/* Form */}
              <form className="mb-11">
                <div className="row gx-5 align-items-start">
                  <div className="col">
                    <input type="email" className="form-control form-control-gray-700 form-control-lg" placeholder="Enter Email *" />
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn btn-gray-500 btn-lg">Subscribe</button>
                  </div>
                </div>
              </form>
    
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3">
    
              {/* Heading */}
              <h4 className="mb-6 text-white">ShopWorld</h4>
    
              {/* Social */}
              <ul className="list-unstyled list-inline mb-7 mb-md-0">
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <i className="fab fa-medium"></i>
                  </a>
                </li>
              </ul>
    
            </div>
            <div className="col-6 col-sm">
    
              {/* Heading */}
              <h6 className="heading-xxs mb-4 text-white">
                Support
              </h6>
    
              {/* Links */}
              <ul className="list-unstyled mb-7 mb-sm-0">
                <li>
                  <a className="text-gray-300" href="./contact-us.html">Contact Us</a>
                </li>
                <li>
                  <a className="text-gray-300" href="./faq.html">FAQs</a>
                </li>
                <li>
                  <a className="text-gray-300" data-bs-toggle="modal" href="#modalSizeChart">Size Guide</a>
                </li>
                <li>
                  <a className="text-gray-300" href="./shipping-and-returns.html">Shipping & Returns</a>
                </li>
              </ul>
    
            </div>
            <div className="col-6 col-sm">
    
              {/* Heading */}
              <h6 className="heading-xxs mb-4 text-white">
                Shop
              </h6>
    
              {/* Links */}
              <ul className="list-unstyled mb-7 mb-sm-0">
                <li>
                  <a className="text-gray-300" href="./shop.html">Men's Shopping</a>
                </li>
                <li>
                  <a className="text-gray-300" href="./shop.html">Women's Shopping</a>
                </li>
                <li>
                  <a className="text-gray-300" href="./shop.html">Kids' Shopping</a>
                </li>
                <li>
                  <a className="text-gray-300" href="./shop.html">Discounts</a>
                </li>
              </ul>
    
            </div>
            <div className="col-6 col-sm">
    
              {/* Heading */}
              <h6 className="heading-xxs mb-4 text-white">
                Company
              </h6>
    
              {/* Links */}
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-gray-300" href="./about.html">Our Story</a>
                </li>
                <li>
                  <a className="text-gray-300" href="#!">Careers</a>
                </li>
                <li>
                  <a className="text-gray-300" href="#!">Terms & Conditions</a>
                </li>
                <li>
                  <a className="text-gray-300" href="#!">Privacy & Cookie policy</a>
                </li>
              </ul>
    
            </div>
            <div className="col-6 col-sm">
    
              {/* Heading */}
              <h6 className="heading-xxs mb-4 text-white">
                Contact
              </h6>
    
              {/* Links */}
              <ul className="list-unstyled mb-0">
                
                <li>
                  <a className="text-gray-300" href="#!">555-555-4444</a>
                </li>
                <li>
                  <a className="text-gray-300" href="#!">mail@gmail.com</a>
                </li>
              </ul>
    
            </div>
          </div>
        </div>
      </div>
      <div className="py-6">
        <div className="container">
          <div className="row">
            <div className="col">
    
              {/* Copyright */}
              <p className="mb-3 mb-md-0 fs-xxs text-muted">
                © 2024 All rights reserved 
              </p>
    
            </div>
            <div className="col-auto">
    
              {/* Payment methods */}
             
              
    
            </div>
          </div>
        </div>
      </div>
    </footer>
    
    </>
  )
}

export default Footer