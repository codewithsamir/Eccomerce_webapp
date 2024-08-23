import React from 'react'

const Productprice = ({price}:any) => {
  return (
    <div className=''>
      <p className='text-orange-500 text-xl w-[100px]'>Rs <span>{price}</span></p>
    </div>
  )
}

export default Productprice