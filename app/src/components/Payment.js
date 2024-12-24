import React, { useState } from 'react'
import Newmodal from './Newmodal'
import Newmodal1 from './Newmodal1'
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';
import { useNavigate } from 'react-router-dom';
export default function Payment() {
    const dispatch=useDispatch()
    const nav=useNavigate()
    let totalPrice=useSelector(store=>store.cart.totalPrice)
    totalPrice=parseInt(Math.floor(totalPrice)*100)
    // console.log(totalPrice)
    const [mod, setMod] = useState('')
    // console.log(mod)
    function makePayment(token){
     const body={
        token,
        totalPrice
     }
     const headers={
        'Content-Type':'application/json'
     }
     return fetch('http://localhost:8080/payment',{
        method:'POST',
        headers,
        body:JSON.stringify(body)
     }).then((response)=>{if(response.status === 200){
       window.alert('Paid Successfully')
       dispatch(clearCart())
       nav('/')
     }}).catch((error)=>{console.log(error)})
    }
    return (
        <>
            <div className='container  border border-1 rounded mb-3'>
                <div className='row mt-3'>
                    <h3 className='text-primary'>Payment Methods</h3>
                    <div className='col-lg-12 mb-5 mt-4'>
                        <div className='d-flex gap-4 justify-content-center'>
                            <button onClick={() => setMod('modal1')} className='btn btn-warning'>Scan</button>
                            {
                                mod === 'modal1' ? <Newmodal str1={true} fn={setMod}></Newmodal> : null
                            }
                            <button className='btn btn-warning ' onClick={() => setMod('modal2')}>Cash On Delivery</button>
                            {
                                mod === 'modal2' ? <Newmodal1 str1={true} fn={setMod}></Newmodal1> : null
                            }
                            <StripeCheckout name='Pay Now' amount={totalPrice} currency='INR' token={makePayment}
                            stripeKey='pk_test_51QZ1vAAh9mF3tGjWOGuUWGE9IvzkjJ4YhRvPjIN2atftRavCZYwzgab29vMxWtZ7WhOe50DiEHQlwwT8T6oPnrjg00bSjQ8L7d'>
                            <button className='btn btn-warning'>Pay With Card</button>
                            </StripeCheckout>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
