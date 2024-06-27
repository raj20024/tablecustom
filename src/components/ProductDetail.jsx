import React, { useEffect, useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LuPencilRuler } from "react-icons/lu";
import Slider from "react-slick";
import { HiOutlineEye } from "react-icons/hi";

// import styles




function ProductDetail() {
  const [mainImage, setMainImage] = useState("/assets/img/product-11.jpg")
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  useEffect(()=>{
    window.scrollTo(0, 0);
    
  },[])
  return (
    <>

      <nav className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ol className="breadcrumb mb-0 fs-xs text-gray-400">
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="shop.html">Men Clothing</a>
                </li>
                <li className="breadcrumb-item active">
                  Cotton striped T-Shirt
                </li>
              </ol>
            </div>
          </div>
        </div>
      </nav>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-md-6">
                  {/* Images */}
                  <div className="row gx-5 mb-10 mb-md-0">
                    <div className="col-2">
                      {/* Slider */}
                      <div className="flickity-nav flickity-vertical" data-flickity='{"asNavFor": "#productSlider", "draggable": false}'>
                        {(() => {
                          const a = 16;
                          let td = [];
                          let imagName = "/assets/img/product-";
                          for (let i = 11; i <= a; i++) {
                            td.push(
                              <div className="ratio ratio-1x1 bg-cover mb-4" style={{ backgroundImage: `url(${imagName}${i}.jpg)` }} onClick={(e) =>
                                //console.log(e.target.style.backgroundImage.split('("')[1].split('")')[0])
                                setMainImage(e.target.style.backgroundImage.split('("')[1].split('")')[0])
                              }></div>
                            );
                          }
                          return td;
                        })()}
                      </div>
                    </div>
                    <div className="col-10">
                      {/* Card */}
                      <div className="card">
                        {/* Badge */}
                        <div className="badge bg-secondary card-badge card-badge-end text-uppercase">
                          Out of Stock
                        </div>
                        {/* Slider */}
                        <div className='flickity-slider' data-flickity='{"draggable": false, "fade": true}' id="productSlider">
                          {/* Item */}
                          <a href="#" data-bigpicture='{ "imgSrc": mainImage}'>
                            <img src={mainImage} alt="..." className="card-img-top" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 ps-lg-10">

                  {/* Header */}
                  <div className="row mb-1">
                    <div className="col">

                      {/* Preheading */}
                      <a className="text-muted" href="shop.html">T-Shirts</a>

                    </div>
                    <div className="col-auto">

                      {/* Rating */}
                      <div className="rating fs-xs text-dark">
                        <div className="rating-item">
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star"></i>
                        </div>
                      </div>

                      <a className="fs-sm text-reset ms-2" href="#reviews">
                        Reviews (0)
                      </a>

                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="mb-2">Cotton striped T-Shirt</h3>

                  {/* Price */}
                  <div className="mb-7 text-gray-400">
                    <span className="ms-1 fs-5 fw-bold">$30.00</span>
                    <span className="ms-1 fs-sm">(Out of Stock)</span>
                  </div>

                  {/* Form */}
                  <form>
                    <div className="form-group">

                      {/* Label */}
                      <p className="mb-4">
                        Color: <strong id="colorCaption">Multicolor</strong>
                      </p>

                      {/* Radio */}
                      <div className="mb-8 ms-n1">
                        <div className="form-check form-check-inline form-check-img">
                          <input type="radio" className="form-check-input" id="imgRadioOne" name="imgRadio" data-toggle="form-caption" data-target="#colorCaption" defaultValue="White" style={{ backgroundImage: "url(/assets/img/product-15.jpg)" }} />
                        </div>
                        <div className="form-check form-check-inline form-check-img">
                          <input type="radio" className="form-check-input" id="imgRadioOne" name="imgRadio" data-toggle="form-caption" data-target="#colorCaption" defaultValue="White" style={{ backgroundImage: "url(/assets/img/product-16.jpg)" }} />
                        </div>
                      </div>

                    </div>
                    <div className="form-group">

                      {/* Label */}
                      <p className="mb-4">
                        Size: <strong><span id="sizeCaption">Choose size</span></strong>
                      </p>

                      {/* Radio */}
                      <div className="mb-2">
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioOne" defaultValue="6" data-toggle="form-caption" data-target="#sizeCaption" />
                          <label className="form-check-label" htmlFor="sizeRadioOne">3XS</label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioTwo" defaultValue="6.5" data-toggle="form-caption" data-target="#sizeCaption" />
                          <label className="form-check-label" htmlFor="sizeRadioTwo">2XS</label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioThree" defaultValue="7" data-toggle="form-caption" data-target="#sizeCaption" />
                          <label className="form-check-label" htmlFor="sizeRadioThree">XS</label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioFour" defaultValue="7.5" data-toggle="form-caption" data-target="#sizeCaption" />
                          <label className="form-check-label" htmlFor="sizeRadioFour">SM</label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioFive" defaultValue="8" data-toggle="form-caption" data-target="#sizeCaption" />
                          <label className="form-check-label" htmlFor="sizeRadioFive">MD</label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioSix" defaultValue="8.5" data-toggle="form-caption" data-target="#sizeCaption" />
                          <label className="form-check-label" htmlFor="sizeRadioSix">LG</label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioSeven" defaultValue="9" data-toggle="form-caption" data-target="#sizeCaption" />
                          <label className="form-check-label" htmlFor="sizeRadioSeven">XL</label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioEight" defaultValue="9.5" data-toggle="form-caption" data-target="#sizeCaption" />
                          <label className="form-check-label" htmlFor="sizeRadioEight">2XL</label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioNine" defaultValue="10" data-toggle="form-caption" data-target="#sizeCaption" />
                          <label className="form-check-label" htmlFor="sizeRadioNine">3XL</label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioTen" defaultValue="10.5" data-toggle="form-caption" data-target="#sizeCaption" />
                          <label className="form-check-label" htmlFor="sizeRadioTen">4XL</label>
                        </div>
                      </div>

                      {/* Size chart */}
                      <p className="mb-8">
                        <LuPencilRuler /> <a className="text-reset text-decoration-underline ms-3" data-bs-toggle="modal" href="#modalSizeChart">Size chart</a>
                      </p>

                      <div className="row gx-5 mb-7">
                        <div className="col-12 col-lg-6">

                          {/* Submit */}
                          <button className="btn w-100 btn-dark mb-2 rounded" data-toggle="button">
                            <IoCartOutline className='fs-5' /> Add to Cart
                          </button>

                        </div>
                        <div className="col-12 col-lg-6">

                          {/* Wishlist */}
                          <button className="btn btn-outline-dark w-100 mb-2 rounded" data-toggle="button">
                            Wishlist <IoIosHeartEmpty className='fs-5' />
                          </button>

                        </div>
                      </div>

                      {/* Text */}


                      {/* Share */}
                      <p className="mb-0">
                        <span className="me-4">Share:</span>
                        <a className="btn btn-xxs btn-circle btn-light fs-xxxs text-gray-350" href="#!">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a className="btn btn-xxs btn-circle btn-light fs-xxxs text-gray-350" href="#!">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="btn btn-xxs btn-circle btn-light fs-xxxs text-gray-350" href="#!">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </p>

                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="pt-11">
        <div className="container">
          <div className="row">
            <div className="col-12">

              {/* Nav */}
              <div className="nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom">
                <a className="nav-link active" data-bs-toggle="tab" href="#descriptionTab">
                  Description
                </a>
                <a className="nav-link" data-bs-toggle="tab" href="#sizeTab">
                  Size & Fit
                </a>
                <a className="nav-link" data-bs-toggle="tab" href="#shippingTab">
                  Shipping & Return
                </a>
              </div>

              {/* Content */}
              <div className="tab-content">
                <div className="tab-pane fade show active" id="descriptionTab">
                  <div className="row justify-content-center py-9">
                    <div className="col-12 col-lg-10 col-xl-8">
                      <div className="row">
                        <div className="col-12">

                          {/* Text */}
                          <p className="text-gray-500">
                            Won't herb first male seas, beast. Let upon, female upon third fifth every. Man subdue rule after years herb after
                            form. And image may, morning. Behold in tree day sea that together cattle whose. Fifth gathering brought
                            bearing. Abundantly creeping whose. Beginning form have void two. A whose.
                          </p>

                        </div>
                        <div className="col-12 col-md-6">

                          {/* List */}
                          <ul className="list list-unstyled mb-md-0 text-gray-500">
                            <li>
                              <strong className="text-body">SKU</strong>: #61590437
                            </li>
                            <li>
                              <strong className="text-body">Occasion</strong>: Lifestyle, Sport
                            </li>
                          </ul>

                        </div>
                        <div className="col-12 col-md-6">

                          {/* List */}
                          <ul className="list list-unstyled mb-0">
                            <li>
                              <strong>Country</strong>: USA
                            </li>
                            <li>
                              <strong>Meterial</strong>: 96% Cotton, 4% Elastane
                            </li>
                          </ul>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="sizeTab">
                  <div className="row justify-content-center py-9">
                    <div className="col-12 col-lg-10 col-xl-8">
                      <div className="row">
                        <div className="col-12 col-md-6">

                          {/* Text */}
                          <p className="mb-4">
                            <strong>Fitting information:</strong>
                          </p>

                          {/* List */}
                          <ul className="mb-md-0 text-gray-500">
                            <li>
                              Upon seas hath every years have whose
                              subdue creeping they're it were.
                            </li>
                            <li>
                              Make great day bearing.
                            </li>
                            <li>
                              For the moveth is days don't said days.
                            </li>
                          </ul>

                        </div>
                        <div className="col-12 col-md-6">

                          {/* Text */}
                          <p className="mb-4">
                            <strong>Model measurements:</strong>
                          </p>

                          {/* List */}
                          <ul className="list-unstyled text-gray-500">
                            <li>Height: 1.80 m</li>
                            <li>Bust/Chest: 89 cm</li>
                            <li>Hips: 91 cm</li>
                            <li>Waist: 65 cm</li>
                            <li>Model size: M</li>
                          </ul>

                          {/* Size */}
                          <p className="mb-0">
                            <img src="/assets/img/icons/icon-ruler.svg" alt="..." className="img-fluid" />
                            <a className="text-reset text-decoration-underline ms-3" data-bs-toggle="modal" href="#modalSizeChart">Size chart</a>
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="shippingTab">
                  <div className="row justify-content-center py-9">
                    <div className="col-12 col-lg-10 col-xl-8">

                      {/* Table */}
                      <div className="table-responsive">
                        <table className="table table-bordered table-sm table-hover">
                          <thead>
                            <tr>
                              <th>Shipping Options</th>
                              <th>Delivery Time</th>
                              <th>Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Standard Shipping</td>
                              <td>Delivery in 5 - 7 working days</td>
                              <td>$8.00</td>
                            </tr>
                            <tr>
                              <td>Express Shipping</td>
                              <td>Delivery in 3 - 5 working days</td>
                              <td>$12.00</td>
                            </tr>
                            <tr>
                              <td>1 - 2 day Shipping</td>
                              <td>Delivery in 1 - 2 working days</td>
                              <td>$12.00</td>
                            </tr>
                            <tr>
                              <td>Free Shipping</td>
                              <td>
                                Living won't the He one every subdue meat replenish
                                face was you morning firmament darkness.
                              </td>
                              <td>$0.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Caption */}
                      <p className="mb-0 text-gray-500">
                        May, life blessed night so creature likeness their, for. <a className="text-body text-decoration-underline" href="#!">Find out more</a>
                      </p>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="pt-11">
        <div className="container">
          <div className="row">
            <div className="col-12">

              {/* Heading */}
              <h4 className="mb-10 text-center">You might also like</h4>

              {/* Items */}
              

            </div>
          </div>
        </div>
        <div className="container-fluid">
              <Slider {...settings}>
                  {/* Item */}
                  {(() => {
                    const a = 17;
                    let td = [];
                    let imagName = "/assets/img/product-";
                    for (let k = 11; k <= a; k++) {
                      td.push(<div className="col px-4" key={Math.random()} style={{ maxWidth: " 300px" }}>
                        <div className="card">
                          {/* Image */}
                          <div className="card-img">
                            {/* Action */}
                            <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-end" data-toggle="button">
                              <IoIosHeartEmpty />
                            </button>
                            {/* Button */}
                            <button className="btn btn-xs w-100 btn-dark card-btn" data-bs-toggle="modal" data-bs-target="#modalProduct">
                              <HiOutlineEye /> Quick View
                            </button>
                            {/* Image */}
                            <img className="card-img-top" src={imagName + k + '.jpg'} alt="..." />
                          </div>
                          {/* Body */}
                          <div className="card-body fw-bold text-center">
                            <a className="text-body" href="product.html">Cotton floral print Dress</a> <br />
                            <span className="text-muted">₹ 40.00</span>
                          </div>
                        </div>
                      </div>);
                    }
                    return td;
                  })()}
                </Slider>
              </div>
      </section>

      {/* REVIEWS */}
      <section className="pt-9 pb-11" id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-12">

              {/* Heading */}
              <h4 className="mb-10 text-center">Customer Reviews</h4>

              {/* No reviews */}
              <div className="text-center">

                {/* Icon */}
                <div className="mb-6 fs-1">🙁</div>

                {/* Text */}
                <p>
                  No reviews have been published.
                  Place an order first now to write a review.
                </p>

                {/* Button*/}
                <a className="btn btn-sm btn-dark" data-bs-toggle="collapse" href="#reviewForm">
                  Write Review
                </a>

              </div>

              {/* New Review */}
              <div className="collapse" id="reviewForm">

                {/* Divider */}
                <hr className="my-8" />

                {/* Form */}
                <form>
                  <div className="row">
                    <div className="col-12 mb-6 text-center">

                      {/* Text */}
                      <p className="mb-1 fs-xs">
                        Score:
                      </p>

                      {/* Rating form */}
                      <div className="rating-form">

                        {/* Input */}
                        <input className="rating-input" type="range" min="1" max="5" defaultValue="5" />

                        {/* Rating */}
                        <div className="rating h5 text-dark" >
                          <div className="rating-item">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star"></i>
                          </div>
                        </div>

                      </div>

                    </div>
                    <div className="col-12 col-md-6">

                      {/* Name */}
                      <div className="form-group">
                        <label className="visually-hidden" htmlFor="reviewName">Your Name:</label>
                        <input className="form-control form-control-sm" id="reviewName" type="text" placeholder="Your Name *" required />
                      </div>

                    </div>
                    <div className="col-12 col-md-6">

                      {/* Email */}
                      <div className="form-group">
                        <label className="visually-hidden" htmlFor="reviewEmail">Your Email:</label>
                        <input className="form-control form-control-sm" id="reviewEmail" type="email" placeholder="Your Email *" required />
                      </div>

                    </div>
                    <div className="col-12">

                      {/* Name */}
                      <div className="form-group">
                        <label className="visually-hidden" htmlFor="reviewTitle">Review Title:</label>
                        <input className="form-control form-control-sm" id="reviewTitle" type="text" placeholder="Review Title *" required />
                      </div>

                    </div>
                    <div className="col-12">

                      {/* Name */}
                      <div className="form-group">
                        <label className="visually-hidden" htmlFor="reviewText">Review:</label>
                        <textarea className="form-control form-control-sm" id="reviewText" rows="5" placeholder="Review *" required></textarea>
                      </div>

                    </div>
                    <div className="col-12 text-center">

                      {/* Button */}
                      <button className="btn btn-outline-dark" type="submit">
                        Post Review
                      </button>

                    </div>
                  </div>
                </form>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
     
    </>
  )
}

export default ProductDetail