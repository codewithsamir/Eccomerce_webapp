import React from 'react'
import Category_left_inputbox from './Category_left_inputbox'
import Categroy_filter_box from './Categroy_filter_box'
import Category_left_price_box from './Category_left_price_box'
import Category_filter_price from './Category_filter_price'

const Category_left = ({text}:any) => {
  return (
    <div className="category-left  w-96">
        <h2>Category</h2>
        <p className='text-xl  capitalize border-b-2
         border-gray-400 pb-4'>{text}</p>
         <div className="categery-left-container
          py-5 ">
            <Categroy_filter_box name={"brand"} />
            <Category_filter_price name={"Price"} />
         </div>
      </div>
  )
}

export default Category_left