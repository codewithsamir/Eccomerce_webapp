"use client"
import { useState } from 'react'

const Itemqty = ({getqty}:any) => {
  const [qty, setqty] = useState(1)

  const increaseitem = ()=>{
    setqty(qty+1)
    getqty(qty+1)
  }
  const decreaseitem = ()=>{
    if(qty>1){

      setqty(qty-1)
      getqty(qty-1)
    }else{
      setqty(1)
    }
  }
  return (
    <div className="item-quantity ">
    <div className="quantity-box border-2 rounded-xl border-black  flex w-[105px] ">
        <button className="minus-btn w-[35px] p-1  text-xl" onClick={decreaseitem}>-</button>
        <p className='border-l-2 border-r-2 w-[35px] p-1 border-black text-xl text-center'>{qty}</p>
        <button className="plus-btn w-[35px] p-1 text-xl" onClick={increaseitem}>+</button>
    </div>
</div>
  )
}

export default Itemqty