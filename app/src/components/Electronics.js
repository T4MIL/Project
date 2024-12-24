import React from 'react'
import Card from '../components/Card';

export default function Electronics() {
  return (
    <>
      <div className='container border border-1 rounded mb-3'>
        <h3 className='mt-2 text-primary'>Electronics</h3>
        <Card
          category='gaming' />
      </div>
    </>
  )
}
