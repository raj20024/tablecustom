import React from 'react'

function MyAccount() {
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
                <a className="list-group-item list-group-item-action dropend-toggle active" href="account-orders.html">
                  Orders
                </a>
                <a className="list-group-item list-group-item-action dropend-toggle " href="account-wishlist.html">
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

            {/* Order */}
            <div className="card card-lg mb-5 border">
              <div className="card-body pb-0">

                {/* Info */}
                <div className="card card-sm">
                  <div className="card-body bg-light">
                    <div className="row">
                      <div className="col-6 col-lg-3">

                        {/* Heading */}
                        <h6 className="heading-xxxs text-muted">Order No:</h6>

                        {/* Text */}
                        <p className="mb-lg-0 fs-sm fw-bold">
                          673290789
                        </p>

                      </div>
                      <div className="col-6 col-lg-3">

                        {/* Heading */}
                        <h6 className="heading-xxxs text-muted">Shipped date:</h6>

                        {/* Text */}
                        <p className="mb-lg-0 fs-sm fw-bold">
                          <time dateTime="2019-10-01">
                            01 Oct, 2019
                          </time>
                        </p>

                      </div>
                      <div className="col-6 col-lg-3">

                        {/* Heading */}
                        <h6 className="heading-xxxs text-muted">Status:</h6>

                        {/* Text */}
                        <p className="mb-0 fs-sm fw-bold">
                          Awating Delivery
                        </p>

                      </div>
                      <div className="col-6 col-lg-3">

                        {/* Heading */}
                        <h6 className="heading-xxxs text-muted">Order Amount:</h6>

                        {/* Text */}
                        <p className="mb-0 fs-sm fw-bold">
                          $259.00
                        </p>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="card-footer">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-6">
                    <div className="row gx-5 mb-4 mb-lg-0">
                      <div className="col-3">

                        {/* Image */}
                        <div className="ratio ratio-1x1 bg-cover" style={{backgroundImage: "url(assets/img/product-5.jpg)"}}></div>

                      </div>
                      <div className="col-3">

                        {/* Image */}
                        <div className="ratio ratio-1x1 bg-cover" style={{backgroundImage: "url(assets/img/product-6.jpg)"}}></div>

                      </div>
                      <div className="col-3">

                        {/* Image */}
                        <div className="ratio ratio-1x1 bg-cover" style={{backgroundImage: "url(assets/img/product-7.jpg)"}}></div>

                      </div>
                      <div className="col-3">

                        {/* Image */}
                        <div className="ratio ratio-1x1 bg-light">
                          <a className="ratio-item ratio-item-text text-reset" href="#!">
                            <div className="fs-xxs fw-bold">
                              +2 <br/> more
                            </div>
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="row gx-5">
                      <div className="col-6">

                        {/* Button */}
                        <a className="btn btn-sm w-100 btn-outline-dark" href="account-order.html">
                          Order Details
                        </a>

                      </div>
                      <div className="col-6">

                        {/* Button */}
                        <a className="btn btn-sm w-100 btn-outline-dark" href="#!">
                          Track order
                        </a>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Order */}
            <div className="card card-lg mb-5 border">
              <div className="card-body pb-0">

                {/* Info */}
                <div className="card card-sm">
                  <div className="card-body bg-light">
                    <div className="row">
                      <div className="col-6 col-lg-3">

                        {/* Heading */}
                        <h6 className="heading-xxxs text-muted">Order No:</h6>

                        {/* Text */}
                        <p className="mb-lg-0 fs-sm fw-bold">
                          871090437
                        </p>

                      </div>
                      <div className="col-6 col-lg-3">

                        {/* Heading */}
                        <h6 className="heading-xxxs text-muted">Shipped date:</h6>

                        {/* Text */}
                        <p className="mb-lg-0 fs-sm fw-bold">
                          <time dateTime="2019-09-25">
                            25 Sep, 2019
                          </time>
                        </p>

                      </div>
                      <div className="col-6 col-lg-3">

                        {/* Heading */}
                        <h6 className="heading-xxxs text-muted">Status:</h6>

                        {/* Text */}
                        <p className="mb-0 fs-sm fw-bold">
                          In Processing
                        </p>

                      </div>
                      <div className="col-6 col-lg-3">

                        {/* Heading */}
                        <h6 className="heading-xxxs text-muted">Order Amount:</h6>

                        {/* Text */}
                        <p className="mb-0 fs-sm fw-bold">
                          $75.00
                        </p>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="card-footer">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-6">
                    <div className="row gx-5 mb-4 mb-lg-0">
                      <div className="col-3">

                        {/* Image */}
                        <div className="ratio ratio-1x1 bg-cover" style={{backgroundImage: "url(assets/img/product-7.jpg)"}}></div>

                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="row gx-5">
                      <div className="col-6">

                        {/* Button */}
                        <a className="btn btn-sm w-100 btn-outline-dark" href="account-order.html">
                          Order Details
                        </a>

                      </div>
                      <div className="col-6">

                        {/* Button */}
                        <a className="btn btn-sm w-100 btn-outline-dark" href="#!">
                          Track order
                        </a>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Order */}
            <div className="card card-lg mb-5 border">
              <div className="card-body pb-0">

                {/* Info */}
                <div className="card card-sm">
                  <div className="card-body bg-light">
                    <div className="row">
                      <div className="col-6 col-lg-3">

                        {/* Heading */}
                        <h6 className="heading-xxxs text-muted">Order No:</h6>

                        {/* Text */}
                        <p className="mb-lg-0 fs-sm fw-bold">
                          891230563
                        </p>

                      </div>
                      <div className="col-6 col-lg-3">

                        {/* Heading */}
                        <h6 className="heading-xxxs text-muted">Shipped date:</h6>

                        {/* Text */}
                        <p className="mb-lg-0 fs-sm fw-bold">
                          <time dateTime="2019-09-07">
                            07 Sep, 2019
                          </time>
                        </p>

                      </div>
                      <div className="col-6 col-lg-3">

                        {/* Heading */}
                        <h6 className="heading-xxxs text-muted">Status:</h6>

                        {/* Text */}
                        <p className="mb-0 fs-sm fw-bold">
                          Delivered
                        </p>

                      </div>
                      <div className="col-6 col-lg-3">

                        {/* Heading */}
                        <h6 className="heading-xxxs text-muted">Order Amount:</h6>

                        {/* Text */}
                        <p className="mb-0 fs-sm fw-bold">
                          $69.00
                        </p>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="card-footer">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-6">
                    <div className="row gx-5 mb-4 mb-lg-0">
                      <div className="col-3">

                        {/* Image */}
                        <div className="ratio ratio-1x1 bg-cover" style={{backgroundImage: "url(assets/img/product-14.jpg)"}}></div>

                      </div>
                      <div className="col-3">

                        {/* Image */}
                        <div className="ratio ratio-1x1 bg-cover" style={{backgroundImage: "url(assets/img/product-15.jpg)"}}></div>

                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="row gx-5">
                      <div className="col-6">

                        {/* Button */}
                        <a className="btn btn-sm w-100 btn-outline-dark" href="account-order.html">
                          Order Details
                        </a>

                      </div>
                      <div className="col-6">

                        {/* Button */}
                        <a className="btn btn-sm w-100 btn-outline-dark" href="#!">
                          Track order
                        </a>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <nav className="d-flex justify-content-center justify-content-md-end mt-10">
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

export default MyAccount