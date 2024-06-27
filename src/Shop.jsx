import React, { useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { fetchProduct, searchByName, filterProducts, fetchCategory, filterProductsCat, multiFilter, fetchCateDummyjson, sortProducts, setSortingOption } from './Store/ProdcutSlice';
import DisplayProduct from './DisplayProduct';



function Shop() {
  const dispatch = useDispatch();
  const { data, loading, filteredProducts, catgoryData, catgoryDataFilter, filteredProductsMulti, catDataDummyjson } = useSelector((store) => store.product);
  //console.log('shop' + data.products)

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilers] = useState([]);
  const [sortingValue, setSortingValue] = useState("Top Rated");

  const changeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = (e, userId) => {
    const { checked } = e.target;
    if (checked) {
      setSelectedFilers((prev) => [...prev, userId]);
    } else {
      setSelectedFilers(selectedFilters.filter((x) => x !== userId));
    }
  };
  //console.log(selectedFilters)

  ///all data input
  const [formData, setFormData] = useState({
    searchTerm: '',
    filter_cat: []

  });
  const handleChange = (e) => {
    //console.log(formData)
    // const { name, value } = e.target;
    // setFormData({...formData,[name]: value,});
    if (e.target.name === "filter_cat") {
      //let copy = {...formData}
      if (e.target.checked) {
        setFormData({ ...formData, 'filter_cat': [...formData.filter_cat, e.target.value] })
      } else {
        //alert(formData.filter_cat)
        setFormData({ ...formData, 'filter_cat': formData.filter_cat.filter((el) => el !== e.target.value) })
      }
      //setFormData(copy)

    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }

  };
  const removeTag = (val) => {
    console.log('filter input', formData.filter_cat);
    setFormData({
      ...formData, filter_cat: formData.filter_cat.filter((elm) => {
        return elm !== val;

      })

    })
    return formData.filter_cat
  }



  useEffect(() => {
    dispatch(setSortingOption(sortingValue));
    dispatch(sortProducts());
  }, [sortingValue]);




  useEffect(() => {
    //dispatch(searchByName(searchTerm));
    // dispatch(filterProducts(searchTerm))
    // dispatch(filterProductsCat(selectedFilters))
    dispatch(multiFilter(formData))
    //console.log(searchTerm);
  }, [searchTerm, selectedFilters, multiFilter, filterProductsCat, formData]);

  let totlal = "";

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

  };
  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchCategory());
    dispatch(fetchCateDummyjson());
    document.title = "new title";
    window.scrollTo(0, 0)
  }, [])
  if (loading) {
    return (<div className=' w-100 mx-auto my-5 text-center'><div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div></div>)
  }
  
  return (
    <>
      <section className="py-11">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">

              {/* Filters */}
              <form className="mb-10 mb-md-0">
                <ul className="nav nav-vertical" id="filterNav">

                  <li className="nav-item">

                    {/* Toggle */}
                    <a className="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6" data-bs-toggle="collapse" href="#seasonCollapse">
                      Category
                    </a>

                    {/* Collapse */}

                    {formData.filter_cat.length}
                    <div className="collapse" id="seasonCollapse" data-simplebar-collapse="#seasonGroup">
                      <div className="form-group form-group-overflow mb-6" id="seasonGroup">
                        {
                          catDataDummyjson.map((item) => {
                            return <div className="form-check mb-3" key={item.name}>

                              <input className="form-check-input" name="filter_cat" value={item.name.toLowerCase()} type="checkbox" onClick={handleChange} />

                              <label className="form-check-label" >
                                {item.name}
                              </label>
                            </div>
                          })

                        }


                      </div>
                    </div>

                  </li>
                  <li className="nav-item">

                    {/* Toggle */}
                    <a className="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6" data-bs-toggle="collapse" href="#sizeCollapse">
                      Size
                    </a>

                    {/* Collapse */}
                    <div className="collapse" id="sizeCollapse" data-simplebar-collapse="#sizeGroup">
                      <div className="form-group form-group-overlow mb-6" id="sizeGroup">
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input className="form-check-input" id="sizeOne" type="checkbox" />
                          <label className="form-check-label" htmlFor="sizeOne">
                            3XS
                          </label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input className="form-check-input" id="sizeTwo" type="checkbox" />
                          <label className="form-check-label" htmlFor="sizeTwo">
                            2XS
                          </label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input className="form-check-input" id="sizeThree" type="checkbox" />
                          <label className="form-check-label" htmlFor="sizeThree">
                            XS
                          </label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input className="form-check-input" id="sizeFour" type="checkbox" />
                          <label className="form-check-label" htmlFor="sizeFour">
                            S
                          </label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input className="form-check-input" id="sizeFive" type="checkbox" />
                          <label className="form-check-label" htmlFor="sizeFive">
                            M
                          </label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input className="form-check-input" id="sizeSix" type="checkbox" />
                          <label className="form-check-label" htmlFor="sizeSix">
                            L
                          </label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input className="form-check-input" id="sizeSeven" type="checkbox" />
                          <label className="form-check-label" htmlFor="sizeSeven">
                            XL
                          </label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input className="form-check-input" id="sizeEight" type="checkbox" />
                          <label className="form-check-label" htmlFor="sizeEight">
                            2XL
                          </label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input className="form-check-input" id="sizeNine" type="checkbox" />
                          <label className="form-check-label" htmlFor="sizeNine">
                            3XL
                          </label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input className="form-check-input" id="sizeTen" type="checkbox" />
                          <label className="form-check-label" htmlFor="sizeTen">
                            4XL
                          </label>
                        </div>
                        <div className="form-check form-check-inline form-check-size mb-2">
                          <input className="form-check-input" id="sizeEleven" type="checkbox" />
                          <label className="form-check-label" htmlFor="sizeEleven">
                            One Size
                          </label>
                        </div>
                      </div>
                    </div>

                  </li>
                  <li className="nav-item">

                    {/* Toggle */}
                    <a className="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6" data-bs-toggle="collapse" href="#colorCollapse">
                      Color
                    </a>

                    {/* Collapse */}
                    <div className="collapse" id="colorCollapse" data-simplebar-collapse="#colorGroup">
                      <div className="form-group form-group-overflow mb-6" id="colorGroup">
                        <div className="form-check form-check-color mb-3">
                          <input className="form-check-input" id="colorOne" type="checkbox" style={{ backgroundColor: " black" }} />
                          <label className="form-check-label text-body" htmlFor="colorOne">
                            Black
                          </label>
                        </div>
                        <div className="form-check form-check-color mb-3">
                          <input className="form-check-input" id="colorTwo" type="checkbox" style={{ backgroundColor: " red" }} />
                          <label className="form-check-label text-body" htmlFor="colorTwo">
                            White
                          </label>
                        </div>



                      </div>
                    </div>

                  </li>
                  <li className="nav-item">

                    {/* Toggle */}
                    <a className="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6" data-bs-toggle="collapse" href="#brandCollapse">
                      Brand
                    </a>

                    {/* Collapse */}
                    <div className="collapse" id="brandCollapse" data-simplebar-collapse="#brandGroup">

                      {/* Search */}
                      <div data-list='{"valueNames": ["name"]}'>

                        {/* Input group */}
                        <div className="input-group input-group-merge mb-6">
                          <input className="form-control form-control-xs search" type="search" placeholder="Search Brand" />

                          {/* Button */}
                          <div className="input-group-append">
                            <button className="btn btn-outline-border btn-xs">
                              <i className="fe fe-search"></i>
                            </button>
                          </div>

                        </div>

                        {/* Form group */}
                        <div className="form-group form-group-overflow mb-6" id="brandGroup">
                          <div className="list">
                            <div className="form-check mb-3">
                              <input className="form-check-input" id="brandOne" type="checkbox" />
                              <label className="form-check-label name" htmlFor="brandOne">
                                Dsquared2
                              </label>
                            </div>
                            <div className="form-check mb-3">
                              <input className="form-check-input" id="brandTwo" type="checkbox" />
                              <label className="form-check-label name" htmlFor="brandTwo" >
                                Alexander McQueen
                              </label>
                            </div>
                            <div className="form-check mb-3">
                              <input className="form-check-input" id="brandThree" type="checkbox" />
                              <label className="form-check-label name" htmlFor="brandThree">
                                Balenciaga
                              </label>
                            </div>
                            <div className="form-check mb-3">
                              <input className="form-check-input" id="brandFour" type="checkbox" />
                              <label className="form-check-label name" htmlFor="brandFour">
                                Adidas
                              </label>
                            </div>
                            <div className="form-check mb-3">
                              <input className="form-check-input" id="brandFive" type="checkbox" />
                              <label className="form-check-label name" htmlFor="brandFive">
                                Balmain
                              </label>
                            </div>
                            <div className="form-check mb-3">
                              <input className="form-check-input" id="brandSix" type="checkbox" />
                              <label className="form-check-label name" htmlFor="brandSix">
                                Burberry
                              </label>
                            </div>
                            <div className="form-check mb-3">
                              <input className="form-check-input" id="brandSeven" type="checkbox" />
                              <label className="form-check-label name" htmlFor="brandSeven">
                                Chloé
                              </label>
                            </div>
                            <div className="form-check mb-3">
                              <input className="form-check-input" id="brandEight" type="checkbox" />
                              <label className="form-check-label name" htmlFor="brandEight">
                                Kenzo
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" id="brandNine" type="checkbox" />
                              <label className="form-check-label name" htmlFor="brandNine">
                                Givenchy
                              </label>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>

                  </li>
                  <li className="nav-item">

                    {/* Toggle */}
                    <a className="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6" data-bs-toggle="collapse" href="#priceCollapse">
                      Price
                    </a>

                    {/* Collapse */}
                    <div className="collapse" id="priceCollapse" data-simplebar-collapse="#priceGroup">

                      {/* Form group*/}
                      <div className="form-group form-group-overflow mb-6" id="priceGroup">
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="priceOne" type="checkbox" />
                          <label className="form-check-label" htmlFor="priceOne">
                            $10.00 - $49.00
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="priceTwo" type="checkbox" />
                          <label className="form-check-label" htmlFor="priceTwo">
                            $50.00 - $99.00
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="priceThree" type="checkbox" />
                          <label className="form-check-label" htmlFor="priceThree">
                            $100.00 - $199.00
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" id="priceFour" type="checkbox" />
                          <label className="form-check-label" htmlFor="priceFour">
                            $200.00 and Up
                          </label>
                        </div>
                      </div>

                      {/* Range */}
                      <div className="d-flex align-items-center">

                        {/* Input */}
                        <input type="number" className="form-control form-control-xs" placeholder="$10.00" min="10" />

                        {/* Divider */}
                        <div className="text-gray-350 mx-2">‒</div>

                        {/* Input */}
                        <input type="number" className="form-control form-control-xs" placeholder="$350.00" max="350" />

                      </div>

                    </div>

                  </li>
                </ul>
              </form>
            </div>
            <div className="col-12 col-md-8 col-lg-9">

              {/* Slider
              <Slider {...settings}>
                <div className="w-100">
                  <div className="card bg-h-100 bg-start" style={{ backgroundImage: "url(/assets/img/cover-30.jpg" }}>
                    <div className="row" style={{ minHeight: " 400px" }}>
                      <div className="col-12 col-md-10 col-lg-8 col-xl-6 align-self-center">
                        <div className="card-body px-md-10 py-11">
                          <h4>
                            2019 Summer Collection
                          </h4>
                          <Link className="btn btn-link px-0 text-body" to="/product-detail/1">
                            View Collection <i className="fe fe-arrow-right ms-2"></i>
                          </Link >
                        </div>
                      </div>
                      <div className="col-12 col-md-2 col-lg-4 col-xl-6 d-none d-md-block bg-cover" ></div>
                    </div>
                  </div>
                </div>
              </Slider>
                         */}
              {/* Header */}
              <div className="row align-items-center mb-7">
                <div className="col-12 col-md">

                  {/* Heading */}


                  {/* Breadcrumb */}
                  <ol className="breadcrumb mb-md-0 fs-xs text-gray-400">
                    <li className="breadcrumb-item" >
                      <Link className="text-gray-400" to="/">Home</Link >
                    </li>
                    <li className="breadcrumb-item active">
                      Shop
                    </li>
                  </ol>

                </div>
                <div className="col-12 col-md-auto d-flex">
                  <input onChange={handleChange} name='searchTerm' className='form-control-xs me-2' type="text" value={formData.searchTerm} />

                  {/* Select */}
                  <select className="form-select form-select-xs" value={sortingValue}
                    onChange={handleChange}>
                    <option value='Price (High to Low)'  >Price (High to Low)</option>
                    <option value='Price (Low to High)'  >Price (Low to High)</option>
                  </select>

                </div>
              </div>

              {/* Tags */}
              <div className="row mb-7">
                <div className="col-12">
                  {formData.filter_cat.length === 0 ? '' : (<div>{
                    formData.filter_cat.map((item, index) => (
                      <span key={index} className="btn btn-xs btn-light fw-normal text-muted me-3 mb-3 text-capitalize">
                        {item} <Link className="text-reset ms-2" href="#!" role="button">
                          <IoMdClose onClick={() => { removeTag(item) }} />
                        </Link >
                      </span>
                    ))

                  }</div>)

                  }



                </div>
              </div>
              {/* Products */}
              <div className="row">
                
                <DisplayProduct filterdata={(filteredProducts.length !== 0 ? filteredProducts : data)} />

                {/* product listing without pagination */}     
               
              </div>

              {/* Pagination */}
              <nav className="d-flex justify-content-center justify-content-md-end">
                <ul className="pagination pagination-sm text-gray-400">
                  <li className="page-item">
                    <Link className="page-link page-link-arrow" href="#">
                      <i className="fa fa-caret-left"></i>
                    </Link >
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" href="#">1</Link >
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">2</Link >
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">3</Link >
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">4</Link >
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">5</Link >
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">6</Link >
                  </li>
                  <li className="page-item">
                    <Link className="page-link page-link-arrow" href="#">
                      <i className="fa fa-caret-right"></i>
                    </Link >
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

export default Shop