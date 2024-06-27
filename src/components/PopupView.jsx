import React from 'react'
import { useSelector } from 'react-redux';
import { LiaInfoCircleSolid } from "react-icons/lia";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import {  IoIosHeartEmpty } from "react-icons/io";

function PopupView() {
    const { popupData, loading } = useSelector((store) => store.product);
   if(popupData){
  return (
    <>
        <div className="modal fade" id="modalProduct" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">
                       
                        {/* Close */}
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                          
                        </button>
                       
                        {/* Content */}
                        <div className="container-fluid px-xl-0">
                            <div className="row align-items-center mx-xl-0">
                                <div className="col-12 col-lg-6 col-xl-5 py-4 py-xl-0 px-xl-0">

                                    {/* Image */}
                                    <img className="img-fluid" src={popupData.images && popupData.images} alt="..." />

                                    {/* Button */}
                                    <Link className="btn btn-sm w-100 btn-primary "   to={`/product-detail/${popupData.id}`}>
                                       <span data-bs-dismiss="modal"> More Product Info <LiaInfoCircleSolid />
                                       </span> </Link>

                                </div>
                                <div className="col-12 col-lg-6 col-xl-7 py-9 px-md-9">

                                    {/* Heading */}
                                    <h4 className="mb-3">{popupData.title}</h4>

                                    {/* Price */}
                                    <div className="mb-7">
                                        <span className="h5">₹ {popupData.price}</span>
                                        <span className="fs-sm">(In Stock)</span>
                                    </div>

                                    {/* Form */}
                                    <form>
                                        <div className="form-group">

                                            {/* Label */}
                                            <p>
                                                Color: <strong id="modalProductColorCaption">White</strong>
                                            </p>

                                            {/* Radio */}
                                            <div className="mb-8 ms-n1">
                                                <div className="form-check form-check-inline form-check-img">
                                                    <input type="radio" className="form-check-input" id="modalProductColorOne" name="modalProductColor" data-toggle="form-caption" data-target="#modalProductColorCaption" value="White" />
                                                </div>
                                                <div className="form-check form-check-inline form-check-img">
                                                    <input type="radio" className="form-check-input" id="modalProductColorTwo" name="modalProductColor" data-toggle="form-caption" data-target="#modalProductColorCaption" value="Black" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="form-group">

                                            {/* Label */}
                                            <p>
                                                Size: <strong><span id="modalProductSizeCaption">7.5</span> US</strong>
                                            </p>

                                            {/* Radio */}
                                            <div className="mb-2">
                                                <div className="form-check form-check-inline form-check-size mb-2">
                                                    <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeOne" value="6" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="form-check-label" htmlFor="modalProductSizeOne">6</label>
                                                </div>
                                                <div className="form-check form-check-inline form-check-size mb-2">
                                                    <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeTwo" value="6.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" disabled />
                                                    <label className="form-check-label" htmlFor="modalProductSizeTwo">6.5</label>
                                                </div>
                                                <div className="form-check form-check-inline form-check-size mb-2">
                                                    <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeThree" value="7" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="form-check-label" htmlFor="modalProductSizeThree">7</label>
                                                </div>
                                                <div className="form-check form-check-inline form-check-size mb-2">
                                                    <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeFour" value="7.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="form-check-label" htmlFor="modalProductSizeFour">7.5</label>
                                                </div>
                                                <div className="form-check form-check-inline form-check-size mb-2">
                                                    <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeFive" value="8" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="form-check-label" htmlFor="modalProductSizeFive">8</label>
                                                </div>
                                                <div className="form-check form-check-inline form-check-size mb-2">
                                                    <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeSix" value="8.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="form-check-label" htmlFor="modalProductSizeSix">8.5</label>
                                                </div>
                                                <div className="form-check form-check-inline form-check-size mb-2">
                                                    <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeSeven" value="9" data-toggle="form-caption" data-target="#modalProductSizeCaption" disabled />
                                                    <label className="form-check-label" htmlFor="modalProductSizeSeven">9</label>
                                                </div>
                                                <div className="form-check form-check-inline form-check-size mb-2">
                                                    <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeEight" value="9.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" disabled />
                                                    <label className="form-check-label" htmlFor="modalProductSizeEight">9.5</label>
                                                </div>
                                                <div className="form-check form-check-inline form-check-size mb-2">
                                                    <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeNine" value="10" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="form-check-label" htmlFor="modalProductSizeNine">10</label>
                                                </div>
                                                <div className="form-check form-check-inline form-check-size mb-2">
                                                    <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeTen" value="10.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="form-check-label" htmlFor="modalProductSizeTen">10.5</label>
                                                </div>
                                                <div className="form-check form-check-inline form-check-size mb-2">
                                                    <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeEleven" value="11" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="form-check-label" htmlFor="modalProductSizeEleven">11</label>
                                                </div>
                                                <div className="form-check form-check-inline form-check-size mb-2">
                                                    <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeTwelve" value="12" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="form-check-label" htmlFor="modalProductSizeTwelve">12</label>
                                                </div>
                                                <div className="form-check form-check-inline form-check-size mb-2">
                                                    <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeThirteen" value="13" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="form-check-label" htmlFor="modalProductSizeThirteen">13</label>
                                                </div>
                                                <div className="form-check form-check-inline form-check-size mb-2">
                                                    <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeFourteen" value="14" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                    <label className="form-check-label" htmlFor="modalProductSizeFourteen">14</label>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="form-group mb-0">
                                            <div className="row gx-5">
                                                <div className="col-12 col-lg-auto">

                                                    {/* Quantity */}
                                                    <select className="form-select mb-2">
                                                        <option value="1" >1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>

                                                </div>
                                                <div className="col-12 col-lg">

                                                    {/* Submit */}
                                                    <button type="submit" className="btn w-100 btn-dark mb-2">
                                                        Add to Cart <IoCartOutline />
                                                    </button>

                                                </div>
                                                <div className="col-12 col-lg-auto">

                                                    {/* Wishlist */}
                                                    <button className="btn btn-outline-dark w-100 mb-2" data-toggle="button">
                                                        Wishlist <IoIosHeartEmpty />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </>
  )
}
}

export default PopupView