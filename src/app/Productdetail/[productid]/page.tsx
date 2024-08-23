"use client"
import React, { useState } from 'react'
import Productimgdisplay from '@/Components/Productdetail/leftside/productimgdisplay'
import Productdetail from '@/Components/Productdetail/rightside/Productdetail'

const page = ({params}:any) => {
    let productname = decodeURIComponent(params.productid)

 let id = productname.split("_")
 console.log(id[1]);

 const [colorimg, setcolorimg] = useState("")

 
  return (
  

      <div className="product-detail-container py-20 px-8 flex gap-4 justify-center ">
        <Productimgdisplay  id={id[1]} colorimgs={colorimg} setcolorimgs={setcolorimg}/>
      <Productdetail id={id[1]}  setcolorimg={setcolorimg}/>
      </div>
   
  )
}

export default page