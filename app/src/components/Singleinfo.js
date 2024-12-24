import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addItem } from './cartSlice'
import { useFetch } from './useFetch'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Singleinfo() {
    const productid = useParams()
    // console.log(productid)
    const dispatch = useDispatch()
    const handleItem = (val) => {
        dispatch(addItem(val))
        toast.success("Product Added Successfully !", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }
    const arr = useFetch("https://fakestoreapi.in/api/products")
    const filterData = arr.filter((fval) => fval.id == productid.id)
    console.log(filterData)
    return (
        <>
            <div className='container mt-3 border border-1 rounded mb-3'>
                <div className='row mt-3 align-items-center'>
                    {
                        filterData.map((val, ind) => (
                            <>
                                <div className='col-lg-7 text-center mb-3'>
                                    <img src={val?.image} className="img-fluid" alt="..." style={{ width: '28rem', height: '30rem' }} />
                                </div>
                                <div className='col-lg-5'>
                                    <h3 className='mt-2'>{val?.title.substring(0, 11)}</h3>
                                    <h4 className='mt-2'><span className='fs-3'>Category </span>: <span className='fs-5'>{val?.category}</span></h4>
                                    <h5 className='mt-2'><span className='fs-3'>Price </span>: <span className='fs-5'>${Math.floor(val?.price)}</span></h5>
                                    <h5 className='mt-2'><span className='fs-3'>Brand </span>: <button className='btn btn-secondary'>{val?.brand}  </button></h5>
                                    <h6 className='mt-2'><span className='fs-3'>Description :</span> <span className='fs-5'>{val?.description.substring(0, 182)}</span></h6>
                                    <button onClick={() => handleItem(val)} className='btn btn-warning mt-2'>Add to cart</button>
                                </div>
                                <ToastContainer />
                            </>
                        ))
                    }
                </div>
            </div>

        </>
    )
}
