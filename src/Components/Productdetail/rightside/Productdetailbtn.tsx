import Productbtn from '@/Components/Productcard/Productbtn'
import React from 'react'

const Productdetailbtn = () => {
  return (
    <div className='mt-5 flex gap-4'>
      <Productbtn text="buy Now" classname="bg-orange-500 text-white py-2 px-6" />
      <Productbtn text="Add to cart" classname="bg-orange-500 text-white py-2 px-6"/>
      <Productbtn text="Add to wishlist" classname="bg-orange-500 text-white py-2 px-6"/>
    </div>
  )
}

export default Productdetailbtn