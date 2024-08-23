import React from 'react'
import Category_left_price_box from './Category_left_price_box'

const Category_filter_price = ({name}:any) => {
  return (
    <div className="category-left__item border-b-2
     border-gray-400 pb-4 py-2">
    <h3 className='text-xl capitalize mb-2'>{name}</h3>
    <ul>
      <li>
    <Category_left_price_box />
      </li>
    </ul>
      </div>
  )
}

export default Category_filter_price