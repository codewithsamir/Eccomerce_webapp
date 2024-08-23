import React from 'react'

const Cartsummery_list = ({leftname,price}:any) => {
  return (
    <div className='w-full flex justify-between border-b-2 px-2 py-3 text-black border-black'>
      <p className='font-bold capitalize'>subtotal</p>
      <p>Rs 3000</p>
    </div>
  )
}

export default Cartsummery_list