import React from 'react'
import { GoChevronDown } from 'react-icons/go'

const Categorybtn = ({btnname,icons,index}:any) => {
 
    
  return (
    <div className='btn' key={index}>
        <button key={index} className="btn bg-orange-400 py-1.5 px-4 rounded-full flex items-center gap-3 text-xl">{btnname} <span>{icons}</span></button>
      
    </div>
  )
}

export default Categorybtn