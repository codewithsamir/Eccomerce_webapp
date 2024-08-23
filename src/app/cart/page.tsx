import Cartitemsection from '@/Components/Cart/Cartitemsection'
import Cartsummery from '@/Components/Cart/Cartsummery/Cartsummery'
import React from 'react'

const page = () => {
  return (
    <div className='p-5'>
        <h1 className='text-3xl text-center text-black capitalize  py-8'>Your cart  [2 item]</h1>
        <div className="tableofrm overflow-x-auto w-[1200px] m-auto">
          <Cartitemsection/>
       <div className="c-summery flex justify-end">
       <Cartsummery />
       </div>
   
        </div>
        </div>
  )
}

export default page