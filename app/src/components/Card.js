import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem } from './cartSlice'
import { useFetch } from './useFetch'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Card({ category }) {
    const dispatch = useDispatch()
    const arr = useFetch("https://fakestoreapi.in/api/products")
    // console.log(arr)
    const filterData = arr.filter((fval) => fval.category === category)
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
            <div className='container mt-5'>
                <div className='row'>
                    {
                        filterData.map((val, ind) => (
                            <div className='col-lg-4  col-md-6 mb-3 ' >
                                <div className='card shadow-sm p-3 mb-3 bg-light rounded text-center ' style={{ width: '19rem', height: '31rem' }} id='card' key={val.id}>
                                    <div className='card-body' key={val.id}>
                                        <img src={val.image} className="img-fluid" alt="..." style={{ height: '18rem', width: '18rem' }} />
                                        <h3 className='mt-2'>{val.title.substring(0, 11)}</h3>
                                        <h5>Just  {Math.floor(val.price)}$ Only!</h5>
                                        <h6 className='text-success'>Buy Now!</h6>
                                        <div className='d-flex justify-content-around mt-3'>
                                            <Link to={`/singleinfo/${val.id}`}> <button className='btn btn-info'>More</button></Link>
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
