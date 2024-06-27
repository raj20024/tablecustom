import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
function CategoryThree() {
  return (
    <>
      {/* CATEGORIES */}
      <section className="pt-6">
      <div className="container-fluid px-3 px-md-6">
        <div className="row mx-n3">
          <div className="col-12 col-sm-4 d-flex flex-column px-3">
            {/* Card*/}
            <div className="card card-xl mb-3 mb-sm-0"  style={{minHeight:" 280px"}}>
              {/* Background */}
              <div className="card-bg">
                <div className="card-bg-img bg-cover" style={{backgroundImage: "url(/assets/img//product-22.jpg"}} ></div>
              </div>
              {/* Body */}
              <div className="card-body my-auto">

                {/* Heading */}
                <h5 className="mb-0">Summer Hats</h5>

                {/* Link */}
                <a className="btn btn-link stretched-link px-0 text-reset" href="shop.html">
                  Shop Now <IoIosArrowForward />
                </a>

              </div>

            </div>

          </div>
          <div className="col-12 col-sm-4 d-flex flex-column px-3">

            {/* Card*/}
            <div className="card card-xl mb-3 mb-sm-0" style={{minHeight:" 280px"}}>

              {/* Background */}
              <div className="card-bg">
                <div className="card-bg-img bg-cover" style={{backgroundImage: "url(/assets/img//product-23.jpg"}}></div>
              </div>

              {/* Body */}
              <div className="card-body my-auto">

                {/* Heading */}
                <h5 className="mb-0">Men Hats</h5>

                {/* Link */}
                <a className="btn btn-link stretched-link px-0 text-reset" href="shop.html">
                  Shop Now <IoIosArrowForward />
                </a>

              </div>

            </div>

          </div>
          <div className="col-12 col-sm-4 d-flex flex-column px-3">

            {/* Card*/}
            <div className="card card-xl bg-cover bg-hover"  style={{minHeight:" 280px"}}>

              {/* Background */}
              <div className="card-bg">
                <div className="card-bg-img bg-cover" style={{backgroundImage: "url(/assets/img//product-24.jpg"}}></div>
              </div>

              {/* Body */}
              <div className="card-body my-auto">

                {/* Heading */}
                <h5 className="mb-0">Floral Dresses</h5>

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

export default CategoryThree