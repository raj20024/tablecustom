import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
function Banner() {
  return (
    <>
  <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">

            {/* Card */}
            <div className="card card-lg">

              {/* Circle */}
              <div className="card-circle card-circle-lg card-circle-end">
                <strong className="fs-xs text-decoration-line-through opacity-80">$99.00</strong>
                <span className="fs-6 fw-bold">$59.00</span>
              </div>

              {/* Image */}
              <img className="card-img-top" src="/assets/img/product-30.jpg" alt="..." />

              {/* Body */}
              <div className="card-body position-relative mx-6 mx-lg-11 mt-n11 bg-white text-center">

                {/* Heading */}
                <h4 className="mb-0">Cropped Trousers</h4>

                {/* Link */}
                <a className="btn btn-link stretched-link px-0 text-reset" href="shop.html">
                  Shop Now <IoIosArrowForward />
                </a>

              </div>

            </div>

          </div>
          <div className="col-12 col-md-6">

            {/* Card */}
            <div className="card card-lg">

              {/* Circle */}
              <div className="card-circle card-circle-lg card-circle-end">
                <strong className="fs-xs text-decoration-line-through opacity-80">$99.00</strong>
                <span className="fs-6 fw-bold">$59.00</span>
              </div>

              {/* Image */}
              <img className="card-img-top" src="/assets/img/product-31.jpg" alt="..." />

              {/* Body */}
              <div className="card-body position-relative mx-6 mx-lg-11 mt-n11 bg-white text-center">

                {/* Heading */}
                <h4 className="mb-0">Leather Sneakers</h4>

                {/* Link */}
                <a className="btn btn-link stretched-link px-0 text-reset" href="shop.html">
                  Shop Now <IoIosArrowForward />
                </a>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Banner