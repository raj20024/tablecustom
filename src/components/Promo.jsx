import React, { useState } from 'react'
import { LiaInfoCircleSolid } from "react-icons/lia";
import { IoCartOutline } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
import { IoIosSearch, IoIosHeartEmpty } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PopupView from './PopupView';



function Promo() {
   
   


  return (
    <>
     <div className="modal fade" id="modalNewsletterHorizontal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">

                        {/* Close */}
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true"></i>
                        </button>

                        {/* Content */}
                        <div className="row gx-0">
                            <div className="col-12 col-lg-5">

                                {/* Image */}
                                <img className="img-fluid" src="./assets/img/covers/cover-25.jpg" alt="..." />

                            </div>
                            <div className="col-12 col-lg-7 d-flex flex-column px-md-8">

                                {/* Body */}
                                <div className="modal-body my-auto py-10">

                                    {/* Heading */}
                                    <h4>Subscribe to Newsletter and get 15% Discount</h4>

                                    {/* Text */}
                                    <p className="mb-7 fs-lg">
                                        On your next purchase
                                    </p>

                                    {/* Form */}
                                    <form>
                                        <div className="row gx-5">
                                            <div className="col">

                                                {/* Input */}
                                                <label className="visually-hidden" htmlFor="modalNewsletterHorizontalEmail">Enter Email *</label>
                                                <input className="form-control form-control-sm" id="modalNewsletterHorizontalEmail" type="email" placeholder="Enter Email *" />

                                            </div>
                                            <div className="col-auto">

                                                {/* Button */}
                                                <button className="btn btn-sm btn-dark" type="submit">
                                                    <i className="fe fe-send"></i>
                                                </button>

                                            </div>
                                        </div>
                                    </form>

                                </div>

                                {/* Footer */}
                                <div className="modal-footer pt-0">

                                    {/* Checkbox */}
                                    <div className="form-check">

                                        {/* Input */}
                                        <input className="form-check-input" id="modalNewsletterHorizontalCheckbox" type="checkbox" />

                                        {/* Label */}
                                        <label className="form-check-label fs-xs" htmlFor="modalNewsletterHorizontalCheckbox">
                                            Prevent this Pop-up
                                        </label>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Newsletter: Vertical */}
            <div className="modal fade" id="modalNewsletterVertical" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">

                        {/* Close */}
                        <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true"></i>
                        </button>

                        {/* Body */}
                        <div className="modal-body mt-2 me-2 ms-2 py-10 bg-cover text-center text-white" >

                            {/* Heading */}
                            <h4>Subscribe to Newsletter and get 15% Discount</h4>

                            {/* Text */}
                            <p className="mb-0 fs-lg">
                                On your next purchase
                            </p>

                        </div>

                        {/* Body */}
                        <div className="modal-body py-9">

                            {/* Form */}
                            <form>
                                <div className="row gx-5">
                                    <div className="col">

                                        {/* Input */}
                                        <label className="visually-hidden" htmlFor="modalNewsletterVerticalEmail">Enter Email *</label>
                                        <input className="form-control form-control-sm" id="modalNewsletterVerticalEmail" type="email" placeholder="Enter Email *" />

                                    </div>
                                    <div className="col-auto">

                                        {/* Button */}
                                        <button className="btn btn-sm btn-dark" type="submit">
                                            Subscribe
                                        </button>

                                    </div>
                                </div>
                            </form>

                        </div>

                        {/* Footer */}
                        <div className="modal-footer justify-content-center pt-0">

                            {/* Checkbox */}
                            <div className="form-check">

                                {/* Input */}
                                <input className="form-check-input" id="modalNewsletterVerticalCheckbox" type="checkbox" />

                                {/* Label */}
                                <label className="form-check-label fs-xs" htmlFor="modalNewsletterVerticalCheckbox">
                                    Prevent this Pop-up
                                </label>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* Password Reset */}
            <div className="modal fade" id="modalPasswordReset" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">

                        {/* Close */}
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true"></i>
                        </button>

                        {/* Header*/}
                        <div className="modal-header lh-fixed fs-lg">
                            <strong className="mx-auto">Forgot Password?</strong>
                        </div>

                        {/* Body */}
                        <div className="modal-body text-center">

                            {/* Text */}
                            <p className="mb-7 fs-sm text-gray-500">
                                Please enter your Email Address. You will receive a link
                                to create a new password via Email.
                            </p>

                            {/* Form */}
                            <form>

                                {/* Email */}
                                <div className="form-group">
                                    <label className="visually-hidden" htmlFor="modalPasswordResetEmail">
                                        Email Address *
                                    </label>
                                    <input className="form-control form-control-sm" id="modalPasswordResetEmail" type="email" placeholder="Email Address *" required />
                                </div>

                                {/* Button */}
                                <button className="btn btn-sm btn-dark">
                                    Reset Password
                                </button>

                            </form>

                        </div>

                    </div>

                </div>
            </div>

            {/* Product popup */}
           
            <PopupView/>
             
            
            

            {/* Search */}
            <div className="offcanvas offcanvas-end" id="modalSearch" tabIndex="-1" role="dialog" aria-hidden="true">

                {/* Close */}
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                    <i className="fe fe-x" aria-hidden="true"></i>
                </button>

                {/* Header*/}
                <div className="offcanvas-header lh-fixed fs-lg">
                    <strong className="mx-auto">Search Products</strong>
                </div>

                {/* Body: Form */}
                <div className="offcanvas-body">
                    <form>
                        <div className="form-group">
                            <label className="visually-hidden" htmlFor="modalSearchCategories">Categories:</label>
                            <select className="form-select" id="modalSearchCategories">
                                <option >All Categories</option>
                                <option>Women</option>
                                <option>Men</option>
                                <option>Kids</option>
                            </select>
                        </div>
                        <div className="input-group input-group-merge">
                            <input className="form-control" type="search" placeholder="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-border" type="submit">
                                    <IoIosSearch />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Body: Results (add `.d-none` to disable it) */}
                <div className="offcanvas-body border-top fs-sm">

                    {/* Heading */}
                    <p>Search Results:</p>

                    {/* Items */}
                    <div className="row align-items-center position-relative mb-5">
                        <div className="col-4 col-md-3">

                            {/* Image */}
                            <img className="img-fluid" src="/assets/img/product-5.jpg" alt="..." />

                        </div>
                        <div className="col position-static">

                            {/* Text */}
                            <p className="mb-0 fw-bold">
                                <a className="stretched-link text-body" href="./product.html">Leather mid-heel Sandals</a> <br />
                                <span className="text-muted">₹ 29.00</span>
                            </p>

                        </div>
                    </div>
                  

                    {/* Button */}
                    <a className="btn btn-link px-0 text-reset" href="./shop.html">
                        View All <IoMdArrowForward />
                    </a>

                </div>

                {/* Body: Empty (remove `.d-none` to enable it) */}
                <div className="offcanvas-body d-none">

                    {/* Text */}
                    <p className="mb-3 fs-sm text-center">
                        Nothing matches your search
                    </p>

                    {/* Smiley */}
                    <p className="mb-0 fs-sm text-center">
                        😞
                    </p>

                </div>

            </div>

            {/* Shopping Cart */}
            <div className="offcanvas offcanvas-end" id="modalShoppingCart" tabIndex="-1" role="dialog" aria-hidden="true">

                {/* Full cart (add `.d-none` to disable it) */}

                {/* Close */}
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">

                </button>

                {/* Header*/}
                <div className="offcanvas-header lh-fixed fs-lg">
                    <strong className="mx-auto">Your Cart (2)</strong>
                </div>

                {/* List group */}
                <ul className="list-group list-group-lg list-group-flush">
                    <li className="list-group-item">
                        <div className="row align-items-center">
                            <div className="col-4">

                                {/* Image */}
                                <a href="./product.html">
                                    <img className="img-fluid" src="./assets/img/products/product-6.jpg" alt="..." />
                                </a>

                            </div>
                            <div className="col-8">

                                {/* Title */}
                                <p className="fs-sm fw-bold mb-6">
                                    <a className="text-body" href="./product.html">Cotton floral print Dress</a> <br />
                                    <span className="text-muted">₹ 40.00</span>
                                </p>

                                {/*Footer */}
                                <div className="d-flex align-items-center">

                                    {/* Select */}
                                    <select className="form-select form-select-xxs w-auto">
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                    </select>

                                    {/* Remove */}
                                    <a className="fs-xs text-gray-400 ms-auto" href="#!">
                                        <IoIosCloseCircleOutline /> Remove
                                    </a>

                                </div>

                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row align-items-center">
                            <div className="col-4">

                                {/* Image */}
                                <a href="./product.html">
                                    <img className="img-fluid" src="./assets/img/products/product-10.jpg" alt="..." />
                                </a>

                            </div>
                            <div className="col-8">

                                {/* Title */}
                                <p className="fs-sm fw-bold mb-6">
                                    <a className="text-body" href="./product.html">Suede cross body Bag</a> <br />
                                    <span className="text-muted">₹ 49.00</span>
                                </p>

                                {/*Footer */}
                                <div className="d-flex align-items-center">

                                    {/* Select */}
                                    <select className="form-select form-select-xxs w-auto">
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                    </select>

                                    {/* Remove */}
                                    <a className="fs-xs text-gray-400 ms-auto" href="#!">
                                        <IoIosCloseCircleOutline /> Remove
                                    </a>

                                </div>

                            </div>
                        </div>
                    </li>
                </ul>

                {/* Footer */}
                <div className="offcanvas-footer justify-between lh-fixed fs-sm bg-light mt-auto">
                    <strong>Subtotal</strong> <strong className="ms-auto">₹ 89.00</strong>
                </div>

                {/* Buttons */}
                <div className="offcanvas-body">
                    <a className="btn w-100 btn-dark" href="./checkout.html">Continue to Checkout</a>
                    <a className="btn w-100 btn-outline-dark mt-2" href="./shopping-cart.html">View Cart</a>
                </div>

                {/* Empty cart (remove `.d-none` to enable it) */}
                <div className="d-none">

                    {/* Close */}
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                        <IoIosCloseCircleOutline />
                    </button>

                    {/* Header*/}
                    <div className="offcanvas-header lh-fixed fs-lg">
                        <strong className="mx-auto">Your Cart (0)</strong>
                    </div>

                    {/* Body */}
                    <div className="offcanvas-body flex-grow-0 my-auto">

                        {/* Heading */}
                        <h6 className="mb-7 text-center">Your cart is empty 😞</h6>

                        {/* Button */}
                        <a className="btn w-100 btn-outline-dark" href="#!">
                            Continue Shopping
                        </a>

                    </div>

                </div>

            </div>

            {/* Sidebar */}
            <div className="offcanvas offcanvas-end" id="modalSidebar" tabIndex="-1" role="dialog" aria-hidden="true">

                {/* Close */}
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                    <i className="fe fe-x" aria-hidden="true"></i>
                </button>

                {/* Body */}
                <div className="offcanvas-body px-10 my-auto">

                    {/* Nav */}
                    <ul className="nav nav-vertical nav-unstyled fs-2" id="sidebarNav">
                        <li className="nav-item">

                            {/* Toggle */}
                            <a className="nav-link dropdown-toggle" data-bs-toggle="collapse" href="#sidebarHome">
                                Home
                            </a>

                            {/* Collapse */}
                            <div className="collapse" id="sidebarHome" data-bs-parent="#sidebarNav">
                                <ul className="list-styled fs-lg py-3 mb-0">
                                    <li className="list-styled-item">
                                        <a className="list-styled-link" href="./index.html">Default</a>
                                    </li>
                                    <li className="list-styled-item">
                                        <a className="list-styled-link" href="./index-classNameic.html">Classic</a>
                                    </li>
                                    <li className="list-styled-item">
                                        <a className="list-styled-link" href="./index-fashion.html">Fashion</a>
                                    </li>
                                    <li className="list-styled-item">
                                        <a className="list-styled-link" href="./index-boxed.html">Boxed</a>
                                    </li>
                                    <li className="list-styled-item">
                                        <a className="list-styled-link" href="./index-simple.html">Simple</a>
                                    </li>
                                    <li className="list-styled-item">
                                        <a className="list-styled-link" href="./index-asymmetric.html">Asymmetric</a>
                                    </li>
                                    <li className="list-styled-item">
                                        <a className="list-styled-link" href="./index-sidenav.html">Sidenav</a>
                                    </li>
                                    <li className="list-styled-item">
                                        <a className="list-styled-link" href="./index-landing.html">Landing</a>
                                    </li>
                                </ul>
                            </div>

                        </li>
                        <li className="nav-item">

                            {/* Toggle */}
                            <a className="nav-link dropdown-toggle" data-bs-toggle="collapse" href="#sidebarCatalog">
                                Catalog
                            </a>

                            {/* Collapse */}
                            <div className="collapse" id="sidebarCatalog" data-bs-parent="#sidebarNav">
                                <div className="row">
                                    <div className="col-12 py-3">

                                        {/* Heading */}
                                        <h6 className="mb-5 fw-bold">Clothing</h6>

                                        {/* Links */}
                                        <ul className="list-styled fs-lg py-3">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">All Clothing</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Blouses & Shirts</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Coats & Jackets</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Dresses</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Hoodies & Sweats</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Denim</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Jeans</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Jumpers & Cardigans</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Leggings</a>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className="col-12 py-3">

                                        {/* Heading */}
                                        <h6 className="mb-5 fw-bold">Shoes & Boots</h6>

                                        {/* Links */}
                                        <ul className="list-styled fs-lg">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">All Shoes & Boots</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Branded Shoes</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Boots</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Heels</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Trainers</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Sandals</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Shoes</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Wide Fit Shoes</a>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className="col-12 py-3">

                                        {/* Heading */}
                                        <h6 className="mb-5 fw-bold">Bags & Accessories</h6>

                                        {/* Links */}
                                        <ul className="list-styled fs-lg">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">All Bags & Accessories</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Accessories</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Bags & Purses</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Luggage</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Belts</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Hats</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Hair Accessories</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Jewellery</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Travel Accessories</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                        </li>
                        <li className="nav-item">

                            {/* Toggle */}
                            <a className="nav-link dropdown-toggle" data-bs-toggle="collapse" href="#sidebarShop">
                                Shop
                            </a>

                            {/* Collapse */}
                            <div className="collapse" id="sidebarShop" data-bs-parent="#sidebarNav">
                                <div className="row">
                                    <div className="col-12 py-3">

                                        {/* Heading */}
                                        <h6 className="mb-5">Shop</h6>

                                        {/* Links */}
                                        <ul className="list-styled fs-lg">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Default</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop-topbar.html">Topbar</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop-collapse.html">Collapse</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop-simple.html">Simple</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop-masonry.html">Masonry</a>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className="col-12 py-3">

                                        {/* Heading */}
                                        <h6 className="mb-5">Product</h6>

                                        {/* Links */}
                                        <ul className="list-styled fs-lg">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./product.html">Default</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./product-images-left.html">Images Left</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./product-image-grid.html">Image Grid</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./product-image-slider.html">Image Slider</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./product-images-stacked.html">Images Stacked</a>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className="col-12 py-3">

                                        {/* Heading */}
                                        <h6 className="mb-5">Support</h6>

                                        {/* Links */}
                                        <ul className="list-styled fs-lg">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shopping-cart.html">Shopping Cart</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./checkout.html">Checkout</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./order-completed.html">Order Completed</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shipping-and-returns.html">Shipping & Returns</a>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className="col-12 py-3">

                                        {/* Heading */}
                                        <h6 className="mb-5">Account</h6>

                                        {/* Links */}
                                        <ul className="list-styled fs-lg">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./account-order.html">Order</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./account-orders.html">Orders</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./account-wishlist.html">Wishlist</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./account-personal-info.html">Personal Info</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./account-address.html">Addresses</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./account-address-edit.html">Addresses: New</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./account-payment.html">Payment</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./account-payment-edit.html">Payment: New</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./account-payment-choose.html">Payment: Choose</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./auth.html">Auth</a>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className="col-12 py-3">

                                        {/* Heading */}
                                        <h6 className="mb-5">Modals</h6>

                                        {/* Links */}
                                        <ul className="list-styled fs-lg">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" data-bs-toggle="modal" href="#modalNewsletterHorizontal">
                                                    Newsletter: Horizontal
                                                </a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" data-bs-toggle="modal" href="#modalNewsletterVertical">
                                                    Newsletter: Vertical
                                                </a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" data-bs-toggle="modal" href="#modalProduct">
                                                    Product
                                                </a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" data-bs-toggle="offcanvas" href="#modalSearch">
                                                    Search
                                                </a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" data-bs-toggle="offcanvas" href="#modalShoppingCart">
                                                    Shopping Cart
                                                </a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" data-bs-toggle="modal" href="#modalSizeChart">
                                                    Size Chart
                                                </a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" data-bs-toggle="modal" href="#modalWaitList">
                                                    Wait List
                                                </a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                        </li>
                        <li className="nav-item">

                            {/* Toggle */}
                            <a className="nav-link dropdown-toggle" data-bs-toggle="collapse" href="#sidebarPages">
                                Pages
                            </a>

                            {/* Collapse */}
                            <div className="collapse" id="sidebarPages" data-bs-parent="#sidebarNav">
                                <ul className="list-styled fs-lg py-3 mb-0">
                                    <li className="list-styled-item">
                                        <a className="list-styled-link" href="./about.html">About</a>
                                    </li>
                                    <li className="list-styled-item">
                                        <a className="list-styled-link" href="./contact-us.html">Contact Us</a>
                                    </li>
                                    <li className="list-styled-item">
                                        <a className="list-styled-link" href="./store-locator.html">Store Locator</a>
                                    </li>
                                    <li className="list-styled-item">
                                        <a className="list-styled-link" href="./faq.html">FAQ</a>
                                    </li>
                                    <li className="list-styled-item">
                                        <a className="list-styled-link" href="./coming-soon.html">Coming Soon</a>
                                    </li>
                                    <li className="list-styled-item">
                                        <a className="list-styled-link" href="./404.html">404</a>
                                    </li>
                                </ul>
                            </div>

                        </li>
                        <li className="nav-item">

                            {/* Toggle */}
                            <a className="nav-link dropdown-toggle" data-bs-toggle="collapse" href="#sidebarBlog">
                                Blog
                            </a>

                            {/* Collapse */}
                            <div className="collapse" id="sidebarBlog" data-bs-parent="#sidebarNav">
                                <ul className="list-styled fs-lg py-3 mb-0">
                                    <li className="list-styled-item">
                                        <a className="list-styled-link" href="./blog.html">Blog</a>
                                    </li>
                                    <li className="list-styled-item">
                                        <a className="list-styled-link" href="./blog-post.html">Blog Post</a>
                                    </li>
                                </ul>
                            </div>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./docs/getting-started.html">Docs</a>
                        </li>
                    </ul>

                </div>

                {/* Body */}
                <div className="moda-body px-10 py-9">

                    {/* Social links */}
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a className="text-gray-350" href="#!">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="text-gray-350" href="#!">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="text-gray-350" href="#!">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="text-gray-350" href="#!">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="text-gray-350" href="#!">
                                <i className="fab fa-medium-m"></i>
                            </a>
                        </li>
                    </ul>

                    {/* Footer */}
                    <div className="fs-xxs text-gray-350">
                        © 2019 All rights reserved. Designed by Unvab.
                    </div>

                </div>

            </div>

            {/* Size Chart */}
            <div className="modal fade" id="modalSizeChart" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">

                        {/* Close */}
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true"></i>
                        </button>

                        {/* Header*/}
                        <div className="modal-header lh-fixed fs-lg">
                            <strong className="mx-auto">Size Chart</strong>
                        </div>

                        {/* Body */}
                        <div className="modal-body border-bottom">

                            {/* Header */}
                            <div className="d-flex mb-7">

                                {/* Heading */}
                                <h5 className="mb-0">Clothing</h5>

                                {/* Inputs */}
                                <div className="ms-auto">

                                    {/* IN */}
                                    <input type="radio" className="btn-check" name="modalSizeChartUnitOne" id="inOne" />
                                    <label className="btn btn-xxs btn-circle btn-outline-dark fs-xxxs rounded-0" htmlFor="inOne">IN</label>

                                    {/* CM */}
                                    <input type="radio" className="btn-check" name="modalSizeChartUnitOne" id="cmOne" />
                                    <label className="btn btn-xxs btn-circle btn-outline-dark fs-xxxs rounded-0" htmlFor="cmOne">CM</label>

                                </div>

                            </div>

                            {/* Table */}
                            <div className="table-responsive">
                                <table className="table table-bordered table-sm table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>Size</th>
                                            <th>US</th>
                                            <th>Bust</th>
                                            <th>Waist</th>
                                            <th>Hips</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>XS</td>
                                            <td>2</td>
                                            <td>32</td>
                                            <td>24 - 25</td>
                                            <td>33 - 34</td>
                                        </tr>
                                        <tr>
                                            <td>S</td>
                                            <td>4</td>
                                            <td>34 - 35</td>
                                            <td>26 - 27</td>
                                            <td>35 - 26</td>
                                        </tr>
                                        <tr>
                                            <td>M</td>
                                            <td>6</td>
                                            <td>36 - 37</td>
                                            <td>28 - 29</td>
                                            <td>38 - 40</td>
                                        </tr>
                                        <tr>
                                            <td>L</td>
                                            <td>8</td>
                                            <td>38 - 29</td>
                                            <td>30 - 31</td>
                                            <td>42 - 44</td>
                                        </tr>
                                        <tr>
                                            <td>XL</td>
                                            <td>10</td>
                                            <td>40 - 41</td>
                                            <td>32 - 33</td>
                                            <td>45 - 47</td>
                                        </tr>
                                        <tr>
                                            <td>XXL</td>
                                            <td>12</td>
                                            <td>42 - 43</td>
                                            <td>34 - 35</td>
                                            <td>48 - 50</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        {/* Body */}
                        <div className="modal-body">

                            {/* Header */}
                            <div className="d-flex mb-7">

                                {/* Heading */}
                                <h5 className="mb-0">Shoes</h5>

                                {/* Inputs */}
                                <div className="ms-auto">

                                    {/* IN */}
                                    <input type="radio" className="btn-check" name="modalSizeChartUnitTwo" id="inTwo" />
                                    <label className="btn btn-xxs btn-circle btn-outline-dark fs-xxxs rounded-0" htmlFor="inTwo">IN</label>

                                    {/* CM */}
                                    <input type="radio" className="btn-check" name="modalSizeChartUnitTwo" id="cmTwo" />
                                    <label className="btn btn-xxs btn-circle btn-outline-dark fs-xxxs rounded-0" htmlFor="cmTwo">CM</label>

                                </div>

                            </div>

                            {/* Tables */}
                            <div className="row">
                                <div className="col-12 col-lg-6">

                                    {/* Table */}
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-sm table-hover mb-lg-0">
                                            <thead>
                                                <tr>
                                                    <th>Size</th>
                                                    <th>US</th>
                                                    <th>Foot Length</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>36</td>
                                                    <td>5</td>
                                                    <td>22.8</td>
                                                </tr>
                                                <tr>
                                                    <td>26.5</td>
                                                    <td>5.5</td>
                                                    <td>23.1</td>
                                                </tr>
                                                <tr>
                                                    <td>37</td>
                                                    <td>6</td>
                                                    <td>23.5</td>
                                                </tr>
                                                <tr>
                                                    <td>37.5</td>
                                                    <td>6.</td>
                                                    <td>23.5</td>
                                                </tr>
                                                <tr>
                                                    <td>38</td>
                                                    <td>7</td>
                                                    <td>24.1</td>
                                                </tr>
                                                <tr>
                                                    <td>38.5</td>
                                                    <td>7.5</td>
                                                    <td>24.5</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                <div className="col-12 col-lg-6">

                                    {/* Table */}
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-sm table-hover mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Size</th>
                                                    <th>US</th>
                                                    <th>Foot Length</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>36</td>
                                                    <td>5</td>
                                                    <td>22.8</td>
                                                </tr>
                                                <tr>
                                                    <td>39</td>
                                                    <td>8</td>
                                                    <td>24.1</td>
                                                </tr>
                                                <tr>
                                                    <td>40</td>
                                                    <td>9</td>
                                                    <td>25.4</td>
                                                </tr>
                                                <tr>
                                                    <td>40.5</td>
                                                    <td>9.5</td>
                                                    <td>25.7</td>
                                                </tr>
                                                <tr>
                                                    <td>41</td>
                                                    <td>10</td>
                                                    <td>26.0</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* Wait List */}
            <div className="modal fade" id="modalWaitList" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">

                        {/* Close */}
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true"></i>
                        </button>

                        {/* Header*/}
                        <div className="modal-header lh-fixed fs-lg">
                            <strong className="mx-auto">Wait List</strong>
                        </div>

                        {/* Body */}
                        <div className="modal-body">
                            <div className="row mb-6">
                                <div className="col-12 col-md-3">

                                    {/* Image */}
                                    <a href="./product.html">
                                        <img className="img-fluid mb-7 mb-md-0" src="./assets/img/products/product-6.jpg" alt="..." />
                                    </a>

                                </div>
                                <div className="col-12 col-md-9">

                                    {/* Label */}
                                    <p>
                                        <a className="fw-bold text-body" href="./product.html">Cotton floral print Dress</a>
                                    </p>

                                    {/* Radio */}
                                    <div className="form-check form-check-inline form-check-size mb-2">
                                        <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeOne" value="6" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="form-check-label" htmlFor="modalWaitListSizeOne">3XS</label>
                                    </div>
                                    <div className="form-check form-check-inline form-check-size mb-2">
                                        <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeTwo" value="6.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="form-check-label" htmlFor="modalWaitListSizeTwo">2XS</label>
                                    </div>
                                    <div className="form-check form-check-inline form-check-size mb-2">
                                        <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeThree" value="7" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="form-check-label" htmlFor="modalWaitListSizeThree">XS</label>
                                    </div>
                                    <div className="form-check form-check-inline form-check-size mb-2">
                                        <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeFour" value="7.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="form-check-label" htmlFor="modalWaitListSizeFour">S</label>
                                    </div>
                                    <div className="form-check form-check-inline form-check-size mb-2">
                                        <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeFive" value="8" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="form-check-label" htmlFor="modalWaitListSizeFive">M</label>
                                    </div>
                                    <div className="form-check form-check-inline form-check-size mb-2">
                                        <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeSix" value="8.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="form-check-label" htmlFor="modalWaitListSizeSix">LG</label>
                                    </div>
                                    <div className="form-check form-check-inline form-check-size mb-2">
                                        <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeSeven" value="9" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="form-check-label" htmlFor="modalWaitListSizeSeven">XL</label>
                                    </div>
                                    <div className="form-check form-check-inline form-check-size mb-2">
                                        <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeEight" value="9.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="form-check-label" htmlFor="modalWaitListSizeEight">2XL</label>
                                    </div>
                                    <div className="form-check form-check-inline form-check-size mb-2">
                                        <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeNine" value="10" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="form-check-label" htmlFor="modalWaitListSizeNine">3XL</label>
                                    </div>
                                    <div className="form-check form-check-inline form-check-size mb-2">
                                        <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeTen" value="10.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                        <label className="form-check-label" htmlFor="modalWaitListSizeTen">4XL</label>
                                    </div>

                                </div>

                            </div>
                            <div className="row">
                                <div className="col-12">

                                    {/* Text */}
                                    <p className="fs-sm text-center text-gray-500">
                                        Justo ut diam erat hendrerit morbi porttitor,
                                        per eu curabitur diam sociis.
                                    </p>

                                </div>
                            </div>
                            <div className="row gx-5 mb-2">
                                <div className="col-12 col-md-6">

                                    {/* Form group */}
                                    <div className="form-group">
                                        <label className="visually-hidden" htmlFor="listName">Your Name</label>
                                        <input className="form-control" id="listName" type="text" placeholder="Your Name *" required />
                                    </div>

                                </div>
                                <div className="col-12 col-md-6">

                                    {/* Form group */}
                                    <div className="form-group">
                                        <label className="visually-hidden" htmlFor="listEmail">Your Name</label>
                                        <input className="form-control" id="listEmail" type="email" placeholder="Your Email *" required />
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">

                                    {/* Button */}
                                    <button className="btn btn-dark" type="submit">Subscribe</button>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

     {/* PROMO */}
     <div className="py-3 bg-dark bg-pattern ">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            {/* Text */}
                            <div className="text-center text-white">
                                <span className="heading-xxs letter-spacing-xl">
                                    ⚡️ Happy Holiday Deals on Everything ⚡️
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Promo