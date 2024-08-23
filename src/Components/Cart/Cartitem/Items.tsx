import React from 'react'
import Itemimg from './Itemimg'
import Itemname from './Itemname'

const Items = () => {
  return (
    <div className='flex gap-4 '>
        <Itemimg/>
        <Itemname/>
    </div>
  )
}

export default Items