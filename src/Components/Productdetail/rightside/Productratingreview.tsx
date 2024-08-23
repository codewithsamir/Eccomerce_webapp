import Productrating from '@/Components/Productcard/Productrating'
import React from 'react'

const Productratingreview = ({rating}:any) => {
  return (
    <div className='mb-3 text-orange-500 text-xl flex gap-1 py-3'>
      <Productrating rating={rating}/>
    {rating}</div>
  )
}

export default Productratingreview