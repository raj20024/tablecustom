import React from 'react';
import { BsTrash } from "react-icons/bs";

function Wishlist() {
  return (
    <>
    {/* BREADCRUMB */}
    <nav className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">

           {/* Breadcrumb */}
            <ol className="breadcrumb mb-0 fs-xs text-gray-400">
              <li className="breadcrumb-item">
                <a className="text-gray-400" href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">
                My Account
              </li>
            </ol>

          </div>
        </div>
      </div>
    </nav>

   {/* CONTENT */}
    <section className="pt-7 pb-12">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">

           {/* Heading */}
            <h3 className="mb-10">My Account</h3>

          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3">

           {/* Nav */}
            <nav className="mb-10 mb-md-0">
              <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                <a className="list-group-item list-group-item-action dropend-toggle " href="account-orders.html">
                  Orders
                </a>
                <a className="list-group-item list-group-item-action dropend-toggle active" href="account-wishlist.html">
                  Widhlist
                </a>
                <a className="list-group-item list-group-item-action dropend-toggle " href="account-personal-info.html">
                  Personal Info
                </a>
                <a className="list-group-item list-group-item-action dropend-toggle " href="account-address.html">
                  Addresses
                </a>
                <a className="list-group-item list-group-item-action dropend-toggle " href="account-payment.html">
                  Payment Methods
                </a>
                <a className="list-group-item list-group-item-action dropend-toggle" href="#!">
                  Logout
                </a>
              </div>
            </nav>

          </div>
          <div className="col-12 col-md-9 col-lg-8 offset-lg-1">

           {/* Products */}
            <div className="row">

             {/* Item */}
              <div className="col-6 col-md-4">
                <div className="card mb-7">

                 {/* Image */}
                  <div className="card-img">

                   {/* Action */}
                    <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-end">
                      <BsTrash />
                    </button>

                   {/* Button */}
                    <button className="btn btn-xs w-100 btn-dark card-btn" data-bs-toggle="modal" data-bs-target="#modalProduct">
                      <i className="fe fe-eye me-2 mb-1"></i> Quick View
                    </button>

                   {/* Image */}
                    <img className="card-img-top" src="assets/img/product-6.jpg" alt="..." />

                  </div>

                 {/* Body */}
                  <div className="card-body fw-bold text-center">
                    <a className="text-body" href="product.html">Cotton floral print Dress</a> <br />
                    <span className="text-muted">$40.00</span>
                  </div>

                </div>
              </div>

             {/* Item */}
              <div className="col-6 col-md-4">
                <div className="card mb-7">

                 {/* Image */}
                  <div className="card-img">

                   {/* Action */}
                    <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-end">
                      <BsTrash />
                    </button>

                   {/* Badge */}
                    <span className="badge bg-dark card-badge card-badge-start text-uppercase">
                      Sale
                    </span>

                   {/* Button */}
                    <button className="btn btn-xs w-100 btn-dark card-btn" data-bs-toggle="modal" data-bs-target="#modalProduct">
                      <i className="fe fe-eye me-2 mb-1"></i> Quick View
                    </button>

                   {/* Image */}
                    <img className="card-img-top" src="assets/img/product-10.jpg" alt="..." />

                  </div>

                 {/* Body */}
                  <div className="card-body fw-bold text-center">
                    <a className="text-body" href="product.html">Suede cross body Bag</a> <br />
                    <span>
                      <span className="fs-xs text-gray-350 text-decoration-line-through">$85.00</span>
                      <span className="text-primary">$49.00</span>
                    </span>
                  </div>

                </div>
              </div>

             {/* Item */}
              <div className="col-6 col-md-4">
                <div className="card mb-7">

                 {/* Image */}
                  <div className="card-img">

                   {/* Action */}
                    <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-end">
                      <BsTrash />
                    </button>

                   {/* Button */}
                    <button className="btn btn-xs w-100 btn-dark card-btn" data-bs-toggle="modal" data-bs-target="#modalProduct">
                      <i className="fe fe-eye me-2 mb-1"></i> Quick View
                    </button>

                   {/* Image */}
                    <img className="card-img-top" src="assets/img/product-32.jpg" alt="..." />

                  </div>

                 {/* Body */}
                  <div className="card-body fw-bold text-center">
                    <a className="text-reset" href="product.html">Cotton leaf print Shirt</a>
                    <span className="text-muted">$65.00</span>
                  </div>

                </div>
              </div>

             {/* Item */}
              <div className="col-6 col-md-4">
                <div className="card mb-7">

                 {/* Image */}
                  <div className="card-img">

                   {/* Action */}
                    <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-end">
                      <BsTrash />
                    </button>

                   {/* Button */}
                    <button className="btn btn-xs w-100 btn-dark card-btn" data-bs-toggle="modal" data-bs-target="#modalProduct">
                      <i className="fe fe-eye me-2 mb-1"></i> Quick View
                    </button>

                   {/* Image */}
                    <img className="card-img-top" src="assets/img/product-7.jpg" alt="..." />

                  </div>

                 {/* Body */}
                  <div className="card-body fw-bold text-center">
                    <a className="text-body" href="product.html">Leather Sneakers</a> <br />
                    <a className="text-primary" href="#">Select Options</a>
                  </div>

                </div>
              </div>

             {/* Item */}
              <div className="col-6 col-md-4">
                <div className="card mb-7">

                 {/* Image */}
                  <div className="card-img">

                   {/* Action */}
                    <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-end">
                      <BsTrash />
                    </button>

                   {/* Button */}
                    <button className="btn btn-xs w-100 btn-dark card-btn" data-bs-toggle="modal" data-bs-target="#modalProduct">
                      <i className="fe fe-eye me-2 mb-1"></i> Quick View
                    </button>

                   {/* Image */}
                    <img className="card-img-top" src="assets/img/product-11.jpg" alt="..." />

                  </div>

                 {/* Body */}
                  <div className="card-body fw-bold text-center">
                    <a className="text-body" href="product.html">Another fine dress</a> <br />
                    <span className="text-muted">$99.00</span>
                  </div>

                </div>
              </div>

            </div>

           {/* Pagination */}
            <nav className="d-flex justify-content-center justify-content-md-end">
              <ul className="pagination pagination-sm text-gray-400">
                <li className="page-item">
                  <a className="page-link page-link-arrow" href="#">
                    <i className="fa fa-caret-left"></i>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">6</a>
                </li>
                <li className="page-item">
                  <a className="page-link page-link-arrow" href="#">
                    <i className="fa fa-caret-right"></i>
                  </a>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Wishlist