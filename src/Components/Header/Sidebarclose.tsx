import React from 'react'
import { GiCrossedSwords } from 'react-icons/gi'

const Sidebarclose = ({setGoToRight}:any) => {
  return (
    <div className="cross md:hidden absolute right-2 cursor-pointer" onClick={()=>{setGoToRight("right-[-100%]")}}>
   <GiCrossedSwords size={40} color='white'/>
   </div>
    
  )
}

export default Sidebarclose