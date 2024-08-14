import React from 'react'
import { IoSearch } from 'react-icons/io5'

const Searchbox = () => {
  return (
    <div className="searchbox w-full md:w-[600px]">
    <div className="search-box-input flex  border-2 border-red-500 rounded-lg overflow-hidden w-full">
    <input className="outline-none px-5 py-2 w-full text-orange-500 text-2xl" type="text" placeholder="search your product" />
    
     <button className="w-[60px] flex justify-center items-center bg-orange-500"><IoSearch size={30} /></button>
    </div>
 </div>
  )
}

export default Searchbox