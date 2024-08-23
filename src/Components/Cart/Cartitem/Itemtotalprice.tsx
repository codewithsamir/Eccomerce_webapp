import React from 'react'

const Itemtotalprice = ({price,qty}:any) => {
  return (
    <div className="item-total-price">
    <p className='text-xl'>Rs {price * qty}</p>
</div>
  )
}

export default Itemtotalprice