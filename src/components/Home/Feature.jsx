import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { IoMdPricetags } from "react-icons/io";


function Feature() {
  return (
    <>
    
    <section className="py-9">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">

            {/* Item */}
            <div className="d-flex mb-6 mb-lg-0">

              {/* Icon */}
              <FaShippingFast />
              {/* Body */}
              <div className="ms-6">

                {/* Heading */}
                <h6 className="heading-xxs mb-1">
                  Free shipping
                </h6>

                {/* Text */}
                <p className="mb-0 fs-sm text-muted">
                  From all orders over $100
                </p>

              </div>

            </div>

          </div>
          <div className="col-12 col-md-6 col-lg-3">

            {/* Item */}
            <div className="d-flex mb-6 mb-lg-0">

              {/* Icon */}
              <GiReturnArrow />

              {/* Body */}
              <div className="ms-6">

                {/* Heading */}
                <h6 className="mb-1 heading-xxs">
                  Free returns
                </h6>

                {/* Text */}
                <p className="mb-0 fs-sm text-muted">
                  Return money within 30 days
                </p>

              </div>

            </div>

          </div>
          <div className="col-12 col-md-6 col-lg-3">

            {/* Item */}
            <div className="d-flex mb-6 mb-md-0">

              {/* Icon */}
              <GrSecure />

              {/* Body */}
              <div className="ms-6">

                {/* Heading */}
                <h6 className="mb-1 heading-xxs">
                  Secure shopping
                </h6>

                {/* Text */}
                <p className="mb-0 fs-sm text-muted">
                  You're in safe hands
                </p>

              </div>

            </div>

          </div>
          <div className="col-12 col-md-6 col-lg-3">

            {/* Item */}
            <div className="d-flex">

              {/* Icon */}
              <IoMdPricetags />

              {/* Body */}
              <div className="ms-6">

                {/* Heading */}
                <h6 className="mb-1 heading-xxs">
                  Over 10,000 Styles
                </h6>

                {/* Text */}
                <p className="mb-0 fs-sm text-muted">
                  We have everything you need
                </p>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Feature