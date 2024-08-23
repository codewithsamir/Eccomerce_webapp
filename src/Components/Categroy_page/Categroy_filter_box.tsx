import React from 'react'
import Category_left_inputbox from './Category_left_inputbox'

const Categroy_filter_box = ({name}:any) => {
  return (
    <div className="category-left__item border-b-2
     border-gray-400 pb-4">
    <h3 className='text-xl capitalize mb-2'>{name}</h3>
    <ul>
      <li>
      <Category_left_inputbox />
      <Category_left_inputbox />
      <Category_left_inputbox />
      <Category_left_inputbox />
      </li>
    </ul>
      </div>
  )
}

export default Categroy_filter_box