import React from 'react'
import Cartsummery_list from './Cartsummery_list'
import Cartsummery_total from './Cartsummery_total'
import Cartsummery_btn from './Cartsummery_btn'

const Cartsummery = () => {
  return (
    <div className='w-[400px] p-4 '>
  <Cartsummery_list />
  <Cartsummery_list />
  <Cartsummery_list />
  <Cartsummery_total/>
  <Cartsummery_btn />

    </div>
  )
}

export default Cartsummery