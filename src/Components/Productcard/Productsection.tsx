import React from 'react'
import Productcard from './Productcard'
import Productdetail from '@/Constant/productdetail'

const Productsection = () => {
  return (
  <div className="product-container pt-b pb-16 px-4 md:px-16">
    <h2 className='text-black text-4xl capitalize font-bold py-4'>Product Name</h2>
      <div className=' flex  gap-5 flex-wrap justify-center'>
{Productdetail && Productdetail.map((items)=>{
  
return <Productcard items={items}/>
})}

</div>
  </div>
  )
}

export default Productsection