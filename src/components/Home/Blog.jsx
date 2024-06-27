import React from 'react'

function Blog() {
    return (
        <>
            <section className="py-12 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Preheading */}
                            <h6 className="heading-xxs mb-3 text-center text-gray-400">
                                Our blog
                            </h6>
                            {/* Heading */}
                            <h2 className="mb-10 text-center">Latest in Blog</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            {/* Card */}
                            <div className="card mb-7 shadow shadow-hover lift">
                                {/* Image */}
                                <a href="blog-post.html">
                                    <img src="/assets/img/blog-1.jpg" alt="..." className="card-img-top" />
                                </a>
                                {/* Body */}
                                <div className="card-body px-8 py-7">
                                    {/* Time */}
                                    <p className="mb-3 fs-xs">
                                        <a className="text-muted" href="blog.html">Fashion / Jun 20, 2019</a>
                                    </p>
                                    {/* Heading */}
                                    <h6 className="mb-0">
                                        <a className="text-body" href="blog-post.html">
                                            Us yielding Fish sea night night the said him two
                                        </a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            {/* Card */}
                            <div className="card mb-7 shadow shadow-hover lift">
                                {/* Image */}
                                <a href="blog-post.html">
                                    <img src="/assets/img/blog-2.jpg" alt="..." className="card-img-top" />
                                </a>
                                {/* Body */}
                                <div className="card-body px-8 py-7">
                                    {/* Time */}
                                    <p className="mb-3 fs-xs">
                                        <a className="text-muted" href="blog.html">Travel / Jun 13, 2019</a>
                                    </p>
                                    {/* Heading */}
                                    <h6 className="mb-0">
                                        <a className="text-body" href="blog-post.html">
                                            Tree earth fowl given moveth deep lesser After
                                        </a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            {/* Card */}
                            <div className="card mb-7 shadow shadow-hover lift">
                                {/* Image */}
                                <a href="blog-post.html">
                                    <img src="/assets/img/blog-3.jpg" alt="..." className="card-img-top" />
                                </a>
                                {/* Body */}
                                <div className="card-body px-8 py-7">
                                    {/* Time */}
                                    <p className="mb-3 fs-xs">
                                        <a className="text-muted" href="blog.html">Lifestyle / Jun 08, 2019</a>
                                    </p>
                                    {/* Heading */}
                                    <h6 className="mb-0">
                                        <a className="text-body" href="blog-post.html">
                                            Given Set was without from god divide rule Hath
                                        </a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {/* Link */}
                            <div className="mt-7 text-center">
                                <a className="link-underline" href="blog.html">Discover more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog