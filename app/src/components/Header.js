// import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
// import Result from './Result'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Header({ data }) {
  // const [inp, setInp] = useState()
  const cartItems = useSelector(store => store.cart.items)
  return (
    <>
      <div className='container shadow-sm p-3 mb-3 bg-light rounded'>
        <div className='row align-items-center ' >
          <div className='col-lg-3 d-flex justify-content-center' >
            <Link to={'/'} id='logo'> <h1 className='text-primary'>E-KART</h1></Link>
          </div>
          <div className='col-lg-6 mb-2'>
            <div id='form'>
              <input className="form-control form-control-lg" type="text" onChange={(e) => data(e.target.value)} placeholder="Search by category" aria-label=".form-control-lg example" />
            </div>
          </div>
          <div className='col-lg-3 d-flex justify-content-around' id='header'>
            <div className='d-flex gap-2'>
              <h4> <FontAwesomeIcon icon={faUserCircle} /></h4>
              <Link to={'/login'} id='cart'> <h4>Login</h4></Link>
            </div>
            <div className='d-flex gap-2'>
              <Link to={'/cart'} id='cart'><h4>Cart -</h4></Link>
              <h4>({cartItems.length})</h4>
            </div>
          </div>
        </div>
      </div>
      {/* {(inp) ? <Result data={inp} /> : null} */}
    </>
  )
}
