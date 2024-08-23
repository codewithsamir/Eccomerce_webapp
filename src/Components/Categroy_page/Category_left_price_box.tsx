import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Category_left_price_box = () => {
  return (
    <div className='flex gap-1  items-center pt02'>
        <input type="number" className='w-[90px]
         h-[30px] p-1 text-xl'/> 
        <span>-</span>
        <input type="number" className='w-[90px]
         h-[30px] p-1 text-xl'/>
        <button className=' h-[30px] px-2
         bg-orange-500 flex justify-center 
         items-center'>
            <FaPlay size={15} color='white' />
            </button>
    </div>
  )
}

export default Category_left_price_box