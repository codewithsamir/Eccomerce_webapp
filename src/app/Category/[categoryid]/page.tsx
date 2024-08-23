
import Category_left from '@/Components/Categroy_page/Category_left'
import Category_right from '@/Components/Categroy_page/Category_right'
import Productcard from '@/Components/Productcard/Productcard'
import React from 'react'

const page = ({params}:any) => {
const text = decodeURIComponent(params.categoryid)
  return (
    <div className='py-10 px-4 md:px-16 bg-gray-300  text-4xl text-orange-400'>
      {/* <h1 className='capitalize'>{text}</h1> */}

  <div className="categroy-container flex gap-4">
  <Category_left  text={text}/>
  <Category_right />
  </div>
    </div>
  )
}

export default page