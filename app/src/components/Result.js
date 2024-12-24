import { addItem } from './cartSlice'
import { useFetch } from './useFetch'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Result({ data }) {
    const arr = useFetch("https://fakestoreapi.in/api/products")
    const filterData = arr.filter((fval) => fval?.category?.toLowerCase()?.includes(data))
    // console.log(filterData)
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
    return (
        <>
            <div className='container  border border-1 rounded mb-3'>
                <div className='row mt-4'>
                    {
                        filterData.map((val, ind) => (
                            <div className='col-lg-4  col-md-6 mb-3 ' >
                                <div className='card shadow-sm p-3 mb-3 bg-light rounded text-center ' style={{ width: '19rem', height: '31rem' }} id='card'>
                                    <div className='card-body'>
                                        <img src={val.image} className="img-fluid" alt="..." style={{ height: '18rem', width: '18rem' }} />
                                        <h3 className='mt-2'>{val.title.substring(0, 11)}</h3>
                                        <h5>From  ${val.price}</h5>
                                        <h6 className='text-success'>Shop Now!</h6>
                                        <div className='mt-3'>
                                            <button onClick={() => handleItem(val)} className='btn btn-warning'>Add to cart</button>

                                        </div>
                                    </div>
                                </div>
                                <ToastContainer />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
