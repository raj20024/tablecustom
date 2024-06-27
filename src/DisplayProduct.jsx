import React, { useEffect, useState } from 'react'
import { usePagination } from './hook/pagination';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";


function DisplayProduct({ filterdata }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] =useState(Math.ceil(filterdata.length / 12));
   // current pages function
   const handlePageChange = (newPage)=>{
    setCurrentPage(newPage)
}
const handleNextClick = ()=>{
    if(currentPage < totalPages){
        setCurrentPage(currentPage + 1)
    }
}
const handlePrevClick = ()=>{
    if(currentPage > 1){
        setCurrentPage(currentPage - 1)
    }
}
const preDisabled = currentPage === 1;
const nextDisabled = currentPage === totalPages

const itemsPerPage = 12;
const startIndex = (currentPage-1)* itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const itemsToDiaplay = filterdata.slice(startIndex, endIndex);
    return (
        <>
            {
                itemsToDiaplay && itemsToDiaplay.length > 0 ? itemsToDiaplay.map((item) => {
                    return (
                        <div className="col-6 col-md-4" key={item.id}>
                        <div className="card mb-7">
                          <div className="badge bg-white text-body card-badge card-badge-start text-uppercase">
                            {item.brand}
                          </div>
                          <div className="card-img">
                            <Link className="card-img-hover" to={`/product-detail/${item.id}`}>
                              <img className="card-img-top card-img-back" src={item.thumbnail} alt="..." />
                              <img className="card-img-top card-img-front" src={item.thumbnail} alt="..." />
                            </Link >
                            <div className="card-actions">
                              <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-bs-toggle="modal" data-bs-target="#modalProduct">
                                  <IoIosSearch />
                                </button>
                              </span>
                              <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                  <IoCartOutline />
                                </button>
                              </span>
                              <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                  <IoIosHeartEmpty />
                                </button>
                              </span>
                            </div>
                          </div>
                          <div className="card-body px-0">
                            <div className="fs-xs">
                              <Link className="text-muted" to={`/product-detail/${item.id}`}>{item.category}</Link >
                            </div>
                            <div className="fw-bold">
                              <Link className="text-body" to={`/product-detail/${item.id}`}>
                                {item.title}
                              </Link >
                            </div>
                            <div className="fw-bold text-muted">
                              ₹ {item.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                }) : ('No Recods')
            }
              <button 
                    onClick={handlePrevClick}
                    disabled={preDisabled}
                    >
                    Prev
                </button>
            {
                Array.from({length:totalPages},(_,i)=>{
                    return (
                        <button 
                            onClick={()=>handlePageChange(i+1)} 
                            key={i}
                            disabled={i+1 === currentPage}
                            >
                            {i+1}
                        </button>
                    )
                })
            }
            
                
                <button 
                    onClick={handleNextClick}
                    disabled={nextDisabled}
                    >
                    Next
                </button>

        </>
    )
}

export default DisplayProduct