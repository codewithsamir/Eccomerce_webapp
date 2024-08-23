import React from 'react'

const Productbtn = ({text,classname}:any) => {
  return (
  
      <button className={` border-2 text-sm border-orange-600 rounded-full hover:bg-orange-500 transition-all capitalize hover:text-white py-1 px-4  text-black ${classname} `}>{text}</button>
  
  )
}

export default Productbtn