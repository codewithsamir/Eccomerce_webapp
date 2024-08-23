import React, { useState } from 'react'

const smallimage = ({img,index,setMainimgchange,setcolorimg}:any) => {
//    const [border, setborder] = useState("")
   const [hoverindex, sethoverindex] = useState(null)
    
  return (

   <div key={index} className={`s-img w-[90px] h-[90px] rounded-2xl overflow-hidden   border-black cursor-pointer transition-all ${hoverindex === index && "border-2"  }`}
   
   onMouseMove={()=>{
    
    
    // setborder("border-2")
    // setfirstborder("")
    sethoverindex(index)
    setMainimgchange(img)
    setcolorimg(null)
   }} 
   
   onMouseLeave={()=>{
    sethoverindex(null)
    // setfirstborder("")
    setMainimgchange(null)
    setcolorimg(null)
   }} >
 <img src={img} alt="" />
            </div>

  )
}

export default smallimage