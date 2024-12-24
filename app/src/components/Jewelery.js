import React from 'react'
import Card from '../components/Card';
export default function Jewelery() {
  return (
    <>
      <div className='container border border-1 rounded mb-3'>
        <h3 className='mt-2 text-primary'>Audios</h3>
        <Card
          category='audio' />
      </div>
    </>
  )
}
