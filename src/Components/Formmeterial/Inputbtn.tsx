import React from 'react'

const Inputbtn = ({text,className}:any) => {
  return (
    <div className={`py-2 ${className}`} >
        <button className='py-2 px-8 text-xl bg-white border-2 border-orange-500 rounded-xl text-black hover:bg-orange-500 hover:border-white hover:text-white '>{text}</button>
    </div>
  )
}

export default Inputbtn