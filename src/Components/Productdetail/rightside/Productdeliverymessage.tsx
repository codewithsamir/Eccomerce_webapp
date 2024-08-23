import React from 'react'
import { FaVanShuttle } from 'react-icons/fa6'

const Productdeliverymessage = () => {
  return (
    <div className='flex gap-4 items-center p-2'>
      <FaVanShuttle size={30} color='orange' />
      <p className='text-black'>Free delevery on order over Rs 1000</p>
    </div>
  )
}

export default Productdeliverymessage