"use client"
import React, { useState } from 'react'

import Signinbox from './Signinbox'

const Signinform = () => {
 
  return (
    <div className='bg-orange-500 p-8 rounded-xl' >
         <h2 className='text-3xl font-bold text-center p-2'>Sign in</h2>
       <Signinbox />
    </div>
  )
}

export default Signinform