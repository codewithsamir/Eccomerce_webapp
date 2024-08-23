import React from 'react'

const page = ({params}:any) => {
  const text = decodeURIComponent(params.searchid)
  return (
    <div className='text-orange-600 text-3xl h-[82vh] flex justify-center items-center bg-gray-300' >
<p className='text-orange-500'>Here is no data of {text}</p>
    </div>
  )
}

export default page