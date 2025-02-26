"use client"

import Loginbox from "./Loginbox"

const Loginform = () => {
 
  return (
    <div className='w-[500px] py-12 px-6 bg-orange-500 rounded-xl'>
        <h2 className='text-center text-3xl font-bold'>Login </h2>
       <Loginbox />
    </div>
  )
}

export default Loginform