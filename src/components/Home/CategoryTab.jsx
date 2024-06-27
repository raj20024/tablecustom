import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { fetchCategory } from '../../Store/ProdcutSlice';
import { Link } from 'react-router-dom';

function CategoryTab() {
    const dispatch = useDispatch();
    const { catgoryData, loading } = useSelector((store) => store.product);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
        dispatch(fetchCategory())
    }, [])
    if (loading) {
        return (<div className=' w-100 mx-auto my-5 text-center'><div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div></div>)
    }
    return (
        <>

            {/* CATEGORIES */}
            <section className="py-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            {/* Heading */}
                            <h2 className="mb-4 text-center">Shop by Category</h2>

                            {/* Nav */}
                            <div className="nav justify-content-center mb-10">
                                <a className="nav-link active" href="#topSellersTab" data-bs-toggle="tab">Women</a>
                                <a className="nav-link" href="#topSellersTab" data-bs-toggle="tab">Men</a>
                                <a className="nav-link" href="#topSellersTab" data-bs-toggle="tab">Kids</a>
                            </div>

                            {/* Content */}
                            <div className="tab-content">

                                {/* Pane */}
                                <div className="tab-pane fade show active" id="topSellersTab">

                                    {/* Slider */}
                                    <Slider {...settings}>

                                        {/* Item */}
                                        {catgoryData && catgoryData.map((item) => (
                                            <div className="col px-4" key={item.id} style={{ maxWidth: " 200px" }}>
                                                <div className="card" >
                                                    <img className="card-img-top" src={item.image} alt="..." />
                                                    <div className="card-body py-4 px-0 text-center">
                                                        <Link className="stretched-link text-body" to={"/shop"}>
                                                            <h6>{item.name} <small>(58)</small></h6>
                                                        </Link>

                                                    </div>

                                                </div>
                                            </div>

                                        ))}


                                        {/* Item */}


                                    </Slider>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CategoryTab