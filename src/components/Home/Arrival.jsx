import React, { useEffect }  from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineEye } from "react-icons/hi";
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { fetchArrivals, popupData } from '../../Store/ProdcutSlice';
import { Link } from 'react-router-dom';


function Arrival() {
  const dispatch = useDispatch();
  const { newArrivalData, loading } = useSelector((store) => store.product);
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
   useEffect(() => {
        dispatch(fetchArrivals())
    }, [])
    if (loading) {
        return (<div className=' w-100 mx-auto my-5 text-center'><div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div></div>)
    }  
    return (
        <>
            <section className="py-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Heading */}
                            <h2 className="mb-10 text-center">New Arrivals</h2>
                        </div>
                    </div>
                </div>
                <Slider {...settings}>
                    {/* Item */}
            {newArrivalData && newArrivalData.map((item)=>(
              <div className="col px-4" key={item.id} style={{ maxWidth: " 300px" }}>
              <div className="card">
                  {/* Image */}
                  <div className="card-img">
                      {/* Action */}
                      <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-end" data-toggle="button">
                      <IoIosHeartEmpty />
                      </button>
                      {/* Button */}
                      <button className="btn btn-xs w-100 btn-dark card-btn" data-bs-toggle="modal" data-bs-target="#modalProduct" onClick={()=>dispatch(popupData(item))}>
                      <HiOutlineEye /> Quick View
                      </button>
                      {/* Image */}
                      

                      <img className="card-img-top" src={item.images[0]} alt="..." />
                  </div>
                  {/* Body */}
                  <div className="card-body fw-bold text-center">
                      <Link className="text-body" to={`/product-detail/${item.id}`}>{item.title}</Link> <br />
                      <span className="text-muted">₹ {item.price}</span>
                  </div>
              </div>
          </div>
            ))}

                </Slider>
            </section>


        </>
    )
}

export default Arrival