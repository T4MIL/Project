import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
export default function Checkout() {
    const [fdata, setFdata] = useState({
        fname: '',
        lname: '',
        email: '',
        city: '',
        state: '',
        code: ''
    })
    const nav = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        if (fdata.fname && fdata.lname && fdata.email && fdata.city && fdata.state && fdata.code) {
            nav('/payment')
        }
    }
    return (
        <>
            <div className='container border border-1 rounded mb-3 '>
                <form className='mt-3' onSubmit={handleSubmit}>
                    <div className='row '>
                        <div className='col-lg-4 col-md-3'></div>
                        <div className='col-lg-4 col-md-6 '>
                            <table className='table  '>
                                <tbody>
                                    <tr>
                                        <td ><label className='fw-bold fs-5'>First Name : </label></td>
                                        <td><input type='text' required name='fname' onChange={(e) => { setFdata({ ...fdata, [e.target.name]: e.target.value }) }}></input></td>
                                    </tr>
                                    <tr>
                                        <td ><label className='fw-bold fs-5'>Last Name : </label></td>
                                        <td><input type='text' required name='lname' onChange={(e) => { setFdata({ ...fdata, [e.target.name]: e.target.value }) }}></input></td>
                                    </tr>
                                    <tr>
                                        <td><label className='fw-bold fs-5'>Email Id : </label></td>
                                        <td><input type='text' required name='email' onChange={(e) => { setFdata({ ...fdata, [e.target.name]: e.target.value }) }}></input></td>
                                    </tr>
                                    <tr>
                                        <td><label className='fw-bold fs-5'>City : </label></td>
                                        <td><input type='text' required name='city' onChange={(e) => { setFdata({ ...fdata, [e.target.name]: e.target.value }) }}></input></td>
                                    </tr>
                                    <tr>
                                        <td><label className='fw-bold fs-5'>State : </label></td>
                                        <td><input type='text' required name='state' onChange={(e) => { setFdata({ ...fdata, [e.target.name]: e.target.value }) }}></input></td>
                                    </tr>
                                    <tr>
                                        <td><label className='fw-bold fs-5'>Zip Code : </label></td>
                                        <td><input type='number' required name='code' onChange={(e) => { setFdata({ ...fdata, [e.target.name]: e.target.value }) }}></input></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='col-lg-4 col-md-3'></div>
                    </div>
                    <div className='frm'>
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div >
        </>
    )
}
