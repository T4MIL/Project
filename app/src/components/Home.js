import React from 'react'
import Homecard from '../components/Homecard'
export default function Home() {
    return (
        <> 
            <div className='container border border-1 rounded mb-3' >
                <h4 className='mt-2 text-primary'>Top Offers</h4>
                <Homecard
                    category="mobile"
                />
            </div>
            <div className='container border border-1 rounded mb-3'>
                <h4 className='mt-2 text-primary'>Best Of Electronics</h4>
                <Homecard
                    category='audio'
                />
            </div>
            <div className='container border border-1 rounded mb-3'>
                <h4 className='mt-2 text-primary'>Top Deals</h4>
                <Homecard
                    category='tv'
                />
            </div>
        </>
    )
}
