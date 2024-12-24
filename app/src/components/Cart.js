import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, clearCart, removeItem } from './cartSlice'
import { reduceItem } from '../components/cartSlice'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Cart() {
  const cartItems = useSelector(store => store.cart.items)
  // console.log(cartItems)
  const totalPrice = useSelector(store => store.cart.totalPrice)
  const totalQUantity = useSelector(store => store.cart.totalQUantity)
  // console.log(totalQUantity)
  const dispatch = useDispatch()
  const handleRemoveAll = () => {
    dispatch(clearCart())
  }
  const handleClick = (val) => {
    dispatch(addItem(val))
  }
  const handleRemove = (val) => {
    dispatch(removeItem(val))
    toast.info(" Product Removed From Cart!", {
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
  const handleRem = (val) => {
    dispatch(reduceItem(val))
  }
  return (
    <>
      {cartItems.length > 0 ?
        (<div className='container  border border-1 rounded mb-3'>
          <div className='d-flex justify-content-between mt-3 mb-5 align-items-center'>
            <h3 className='text-primary' >Cart Items</h3>
            <button onClick={handleRemoveAll} className='btn btn-danger'>Clear Cart</button>
          </div>
          <div className='row mt-4'>
            {
              cartItems.map((val, ind) => (
                <div className='col-lg-4  col-md-6 mb-3' >
                  <div className='card shadow-sm text-center mb-3 bg-light rounded ' style={{ width: '19rem', height: '34rem' }} id='card' key={val.id}>
                    <div className='card-body' key={val.id}>
                      <img src={val.image} className="img-fluid" alt="..." style={{ height: '18rem', width: '18rem' }} />
                      <h3 className='mt-2'>{val.title.substring(0, 11)}</h3>
                      {/* <h4>{val.category}</h4> */}
                      <h5>Price : ${Math.floor(val.price)}</h5>
                      <div className='d-flex justify-content-center gap-3 mt-3 align-items-center'>
                        <button onClick={() => handleRem(val)} className='btn btn-warning'>-</button>
                        <h5>{val.quantity}</h5>
                        <button onClick={() => handleClick(val)} className='btn btn-success'>+</button>
                      </div>
                      <h6 className='mt-3'>Total price : ${Math.floor((val.quantity) * (val.price))}</h6>
                      <button onClick={() => handleRemove(val)} className='btn btn-danger mt-2'>Remove Item</button>

                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <hr></hr>
          <div className='row mb-3 me-3 justify-content-end'>
            <div className='col-lg-4 '>
              <div className="card">
                <div className="card-body">
                  <h3 className='text-primary' >Cart Details </h3>
                  <div className='mt-3'>
                    <h5>Total-Quantity : {totalQUantity} no's</h5>
                    <h5>Total-Price    : ${Math.floor(totalPrice)}</h5>
                    <Link to={'/checkout'}>  <button className='btn btn-primary mt-3 '>Go to checkout</button> </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)
        :
        (<div className='container border border-1 rounded mb-3'>
          <div className='row justify-content-center p-3'>
            <div className='col-lg-12 p-3 m-3 border border-1 rounded bg-danger text-white'>
              <h3>Cart is empty!</h3>
              <h4>Add products to the cart !!</h4>
            </div>
          </div>
        </div>)
      }
      <ToastContainer></ToastContainer>
    </>
  )
}
