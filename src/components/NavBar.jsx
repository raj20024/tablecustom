import React from 'react'
import { CiUser } from "react-icons/ci";
import { IoIosSearch, IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <>

            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom ">
                <div className="container">

                    {/* Brand */}
                    <Link className="navbar-brand d-xl-none" to="/">
                        ShopWorld
                    </Link>

                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarClassicCollapse" aria-controls="navbarClassicCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="navbarClassicCollapse">
                    <Link className="navbar-brand   d-none d-xl-block" to="/">
                            ShopWorld
                        </Link>
                        {/* Nav */}
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown">

                                {/* Toggle */}
                                <Link className="nav-link"  to="/">Home</Link>

                                {/* Menu */}
                              

                            </li>
                            <li className="nav-item dropdown position-static">

                                {/* Toggle */}
                                <Link className="nav-link" data-bs-toggle="dropdown" to="#">Catalog</Link>

                                {/* Menu */}
                                <div className="dropdown-menu w-100">
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-4 col-md">

                                                        {/* Heading */}
                                                        <div className="mb-5 fw-bold">Women</div>

                                                        {/* Links */}
                                                        <ul className="list-styled mb-0 fs-sm">
                                                            <li className="list-styled-item">
                                                                <Link className="list-styled-link" to="/shop">Clothing</Link>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <Link className="list-styled-link" to="/shop">Shoes</Link>
                                                            </li>

                                                        </ul>

                                                    </div>
                                                    <div className="col-4 col-md">

                                                        {/* Heading */}
                                                        <div className="mb-5 fw-bold">Men</div>

                                                        {/* Links */}
                                                        <ul className="list-styled mb-0 fs-sm">
                                                            <li className="list-styled-item">
                                                                <Link className="list-styled-link" to="/shop">Clothing</Link>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <Link className="list-styled-link" to="/shop">Shoes</Link>
                                                            </li>

                                                        </ul>

                                                    </div>
                                                    <div className="col-4 col-md">

                                                        {/* Heading */}
                                                        <div className="mb-5 fw-bold">Kids</div>

                                                        {/* Links */}
                                                        <ul className="list-styled mb-0 fs-sm">
                                                            <li className="list-styled-item">
                                                                <Link className="list-styled-link" to="/shop">Clothing</Link>
                                                            </li>

                                                        </ul>

                                                    </div>
                                                    <div className="d-none d-md-flex flex-column col-md-3">

                                                        {/* Card */}


                                                        {/* Card */}


                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li className="nav-item dropdown">

                                {/* Toggle */}
                                <Link className="nav-link" data-bs-toggle="dropdown" to="#">Shop</Link>

                                {/* Menu */}


                            </li>
                         
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>

                        {/* Brand */}
                       

                        {/* Nav */}


                        {/* Nav */}
                        <ul className="navbar-nav flex-row ">
                            <li className="nav-item">
                                <Link className="nav-link" data-bs-toggle="offcanvas" to="#modalSearch">
                                    <IoIosSearch />
                                </Link>
                            </li>
                            <li className="nav-item ms-lg-n4">
                                <Link className="nav-link" to="./account-orders.html">
                                    <CiUser />
                                </Link>
                            </li>
                            <li className="nav-item ms-lg-n4">
                                <Link className="nav-link" to="./account-wishlist.html">
                                    <IoIosHeartEmpty />
                                </Link>
                            </li>
                            <li className="nav-item ms-lg-n4">
                                <Link className="nav-link" data-bs-toggle="offcanvas" to="#modalShoppingCart">
                                    <span data-cart-items="2">
                                        <IoCartOutline />
                                    </span>
                                </Link>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>

        </>
    )
}

export default NavBar