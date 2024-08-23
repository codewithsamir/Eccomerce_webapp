"use client"
import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa'

const Productimage = () => {
const [updateheart , setUpdateHeart]  = useState(true)
  return (
    <div className='w-full h-[200px] relative'>
      <img src="https://images.unsplash.com/photo-1519554318711-aaf73ece6ff9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlc3N8ZW58MHx8MHx8fDA%3D" alt="product image" className='w-full h-full object-cover'/>
     <div className='heart absolute top-2 right-4 rounded-full w-12 h-12 bg-white p-2 flex items-center justify-center' onClick={()=>setUpdateHeart(!updateheart)}>
     {updateheart ? <CiHeart color='black'   size={40}/> :  <FaHeart  color='orange'   size={25}/> }
    
     </div>
    </div>
  )
}

export default Productimage