import { Link } from 'react-router-dom'
import { useFetch } from './useFetch'

export default function Card({ category }) {
    const arr = useFetch("https://fakestoreapi.in/api/products")
    const filterData = arr.filter((fval) => fval.category === category).splice(0, 3)
 
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    {
                        filterData.map((val, ind) => (
                            <div className='col-lg-4 col-md-6 mb-3 ' >
                                <div className='card shadow-sm  mb-3 bg-light rounded  text-center' style={{ width: '19rem', height: '30rem' }} id='card' key={val.id}>
                                    <div className='card-body' key={val.id}>
                                        <img src={val.image} className="img-fluid " alt="..." style={{ height: '18rem', width: '18rem' }} />
                                        <h3 className='mt-2'>{val.title.substring(0, 11)}</h3>
                                        <h5 >From  ${Math.floor(val.price)}</h5>
                                        <h6 className='text-success'>Shop Now!</h6>
                                        <div className=' mt-3'>
                                            <Link to={`/singleinfo/${val.id}`}> <button className='btn btn-info' >View More</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
