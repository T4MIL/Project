import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faInstagram,faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
    return (
        <>
            <div className='container'>
                <div className='row bg-dark pt-3 rounded'>
                    <div className='col-lg-3' id='footer'>
                        <h5 className='text-warning'>ABOUT</h5>
                        <div className='pt-3 text-light'>
                            <p>Contact Us</p>
                            <p>About Us</p>
                            <p>Careers</p>
                            <p>E-kart Stories</p>
                        </div>
                    </div>
                    <div className='col-lg-3' id='footer'>
                        <h5 className='text-warning' >HELP</h5>
                        <div className='pt-3 text-light'>
                            <p>Payments</p>
                            <p>Shipping</p>
                            <p>Cancellation & Returns</p>
                            <p>FAQ</p>
                        </div>
                    </div>
                    <div className='col-lg-3' id='footer'>
                        <h5 className='text-warning' >GROUP COMPANIES</h5>
                        <div className='pt-3 text-light'>
                            <p>Myntra</p>
                            <p>Cleartrip</p>
                            <p>Shopsy</p>
                        </div>
                    </div>
                    <div className='col-lg-3' id='footer'>
                        <h5 className='text-warning'>SOCIAL</h5>
                        <div className='text-light d-flex mt-3'>
                            <span className='ps-0 p-3'><FontAwesomeIcon icon={faXTwitter} /></span>
                            <span className='p-3'><FontAwesomeIcon icon={faYoutube} /></span>
                            <span className='p-3'><FontAwesomeIcon icon={faInstagram} /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
