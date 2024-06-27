import React from 'react';
import Slider from "react-slick";


function SliderTop() {
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
    return (
        <>
            <section>
                <Slider {...settings}>
                    {/* Item */}
                    <div>
                        <div className="w-100 bg-cover" style={{ backgroundImage: "url(/assets/img/cover-5.jpg)" }}>
                            <div className="container d-flex flex-column">
                                <div className="row align-items-center py-12" style={{ minHeight: "550px" }}>
                                    <div className="col-12 col-md-6 col-lg-5 col-xl-4 offset-md-1">

                                        {/* Heading */}
                                        <h1>Summer Sale</h1>

                                        {/* Heading */}
                                        <h2 className="display-1 text-primary">-70%</h2>

                                        {/* Heading */}
                                        <h5 className="mt-n4 mb-8">with promo code CN67EW*</h5>

                                        {/* Button */}
                                        <a className="btn btn-dark" href="shop.html">
                                            Shop Now <i className="fe fe-arrow-right ms-2"></i>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Item */}
                    <div>
                        <div className="w-100 bg-cover" style={{ backgroundImage: "url(/assets/img/cover-16.jpg)" }}>
                            <div className="container d-flex flex-column">
                                <div className="row align-items-center py-12" style={{ minHeight: "550px" }}>
                                    <div className="col-12 col-md-6 col-lg-5 col-xl-4 offset-md-1">

                                        {/* Heading */}
                                        <h1>Summer Sale</h1>

                                        {/* Heading */}
                                        <h2 className="display-1 text-primary">-70%</h2>

                                        {/* Heading */}
                                        <h5 className="mt-n4 mb-8">with promo code CN67EW*</h5>

                                        {/* Button */}
                                        <a className="btn btn-dark" href="shop.html">
                                            Shop Now <i className="fe fe-arrow-right ms-2"></i>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item */}


                </Slider>
            </section>
        </>
    )
}

export default SliderTop