import React from 'react'
import Productimage from './Productimage'
import Productname from './Productname'
import Productprice from './Productprice'
import Productdescription from './Productdescription'
import Productrating from './Productrating'
import Productbtn from './Productbtn'
import Link from 'next/link'

const Productcard = ({items}:any) => {
  const {id,name,price,category, rating,description} = items ||{}

  
  
  return (
  <Link href={`Productdetail/${name}_${id}`} key={id}>
      <div className='w-[320px] h-[450px] shadow-lg rounded-lg overflow-hidden  '>
      <Productimage />
     <div className="product-info p-2 bg-white h-full">
     <div className="content p-1 flex justify-between">
        <Productname p_name={name } />
        <Productprice price={price }/>
      </div>
      <Productdescription descriptions = {description }/>
      <Productrating rating={rating }/>
      <div className="p-bnt flex justify-between p-1">
      <Productbtn text={"Add cart"} />
      <Productbtn text={"Buy now"} />
      

      </div>
     </div>
    </div>
  </Link>
  )
}

export default Productcard