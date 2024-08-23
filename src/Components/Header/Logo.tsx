
import Link from 'next/link'
import React from 'react'

const Logo = () => {
 
  return (
   <Link href={"/"}>
     <div className="logo cursor-pointer " >
    <h1 className="text-4xl font-bold text-white md:text-orange-500">MYshop</h1>
</div>
   </Link>
  )
}

export default Logo