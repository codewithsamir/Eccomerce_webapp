"use client"
import React, { useState } from 'react'
import Inputbox from './Inputbox'
import Inputbtn from './Inputbtn'
import Link from 'next/link'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'

const Loginform = () => {
  const [showpassword, setshowpassword]  = useState(true)

  const showPassword= ()=>{
    setshowpassword(!showpassword)
    
  }
  return (
    <div className='w-[500px] py-12 px-6 bg-orange-500 rounded-xl'>
        <h2 className='text-center text-3xl font-bold'>Login </h2>
        <form action="" >
            <Inputbox label="username" type="text" icons2 = {<FaUser size={20 } color="orange"  />} />



            <Inputbox label="password" type={`${showpassword ? "password" : "text" }`} icons={showpassword ? <FaEye size={30 } color="orange" onClick={showPassword}/> : <FaEyeSlash size={30 } color="orange" onClick={showPassword}/>}  />




            <Inputbtn text="submit"  />
            <p className='text-center  py-2'>if you don't have Account then <Link href="/signin" className='text-blue-500'>Sign in </Link></p>
        </form>
    </div>
  )
}

export default Loginform