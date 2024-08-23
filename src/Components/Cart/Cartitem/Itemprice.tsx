import React from 'react'

const Itemprice = ({price}:any) => {
  return (
    <div className="item-price">
    <p className='text-xl'>Rs <span>{price}</span> </p>
</div>
  )
}

export default Itemprice