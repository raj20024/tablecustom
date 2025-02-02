import React from 'react'
import { BsTrash } from "react-icons/bs";

function Cart() {
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
                Shopping Cart
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
          <div className="col-12">

            {/* Heading */}
            <h3 className="mb-10 text-center">Shopping Cart</h3>

          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-7">

            {/* List group */}
            <ul className="list-group list-group-lg list-group-flush-x mb-6">
              <li className="list-group-item">
                <div className="row align-items-center">
                  <div className="col-3">

                    {/* Image */}
                    <a href="product.html">
                      <img src="assets/img/product-6.jpg" alt="..." className="img-fluid" />
                    </a>

                  </div>
                  <div className="col">

                    {/* Title */}
                    <div className="d-flex mb-2 fw-bold">
                      <a className="text-body" href="product.html">Cotton floral print</a> <span className="ms-auto">$40.00</span>
                    </div>

                    {/* Text */}
                    <p className="mb-7 fs-sm text-muted">
                      Size: M <br />
                      Color: Red
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
                      <BsTrash /> Remove
                      </a>

                    </div>

                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row align-items-center">
                  <div className="col-3">

                    {/* Image */}
                    <a href="product.html">
                      <img src="assets/img/product-10.jpg" alt="..." className="img-fluid" />
                    </a>

                  </div>
                  <div className="col">

                    {/* Title */}
                    <div className="d-flex mb-2 fw-bold">
                      <a className="text-body" href="product.html">Suede cross body Bag</a> <span className="ms-auto">$49.00</span>
                    </div>

                    {/* Text */}
                    <p className="mb-7 fs-sm text-muted">
                      Color: Brown
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
                      <BsTrash /> Remove
                      </a>

                    </div>

                  </div>
                </div>
              </li>
            </ul>

            {/* Footer */}
            <div className="row align-items-end justify-content-between mb-10 mb-md-0">
              <div className="col-12 col-md-7">

                {/* Coupon */}
                <form className="mb-7 mb-md-0">
                  <label className="form-label fs-sm fw-bold" for="cartCouponCode">
                    Coupon code:
                  </label>
                  <div className="row row gx-5">
                    <div className="col">

                      {/* Input */}
                      <input className="form-control form-control-sm" id="cartCouponCode" type="text" placeholder="Enter coupon code*" />

                    </div>
                    <div className="col-auto">

                      {/* Button */}
                      <button className="btn btn-sm btn-dark" type="submit">
                        Apply
                      </button>

                    </div>
                  </div>
                </form>

              </div>
              <div className="col-12 col-md-auto">

                {/* Button */}
                <button className="btn btn-sm btn-outline-dark">Update Cart</button>

              </div>
            </div>

          </div>
          <div className="col-12 col-md-5 col-lg-4 offset-lg-1">

            {/* Total */}
            <div className="card mb-7 bg-light">
              <div className="card-body">
                <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                  <li className="list-group-item d-flex">
                    <span>Subtotal</span> <span className="ms-auto fs-sm">$89.00</span>
                  </li>
                  <li className="list-group-item d-flex">
                    <span>Tax</span> <span className="ms-auto fs-sm">$00.00</span>
                  </li>
                  <li className="list-group-item d-flex fs-lg fw-bold">
                    <span>Total</span> <span className="ms-auto fs-sm">$89.00</span>
                  </li>
                  <li className="list-group-item fs-sm text-center text-gray-500">
                    Shipping cost calculated at Checkout *
                  </li>
                </ul>
              </div>
            </div>

            {/* Button */}
            <a className="btn w-100 btn-dark mb-2" href="checkout.html">Proceed to Checkout</a>

            {/* Link */}
            <a className="btn btn-link btn-sm px-0 text-body" href="shop.html">
              <i className="fe fe-arrow-left me-2"></i> Continue Shopping
            </a>

          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Cart