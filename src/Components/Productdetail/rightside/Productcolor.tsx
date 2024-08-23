import React from 'react'

const Productcolor = ({color,img,mainimg,img2,setcolorimg}:any) => {

  return (
    <div className='text-xl capitalize text-gray-400'>
      <h5 className='text-xl capitalize text-gray-400 mb-1'>color</h5>
     {color && 
      <div className="color-img flex gap-2">
          {    mainimg && <img className='w-[50px] h-[80px] border-2 rounded-xl' src={mainimg} alt="" onClick={()=>    {
            console.log("it first");
            
         setcolorimg(mainimg)
          }}/>}
      {img && <img className='w-[50px] h-[80px] border-2 rounded-xl' src={img} alt="" onClick={()=> {
        console.log("it second");
        
    setcolorimg(img)}}/>}

      {img2 &&<img className='w-[50px] h-[80px] border-2 rounded-xl' src="" alt="" onClick={()=>setcolorimg()} />}
    </div>
     }
    </div>
  )
}

export default Productcolor