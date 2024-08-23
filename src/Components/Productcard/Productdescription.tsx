import React from 'react'

const Productdescription = ({descriptions}:any) => {
  
  console.log(descriptions);
  
  return (
    <div className='p-2'>
      <p className='text-sm text-black'>{descriptions?.slice(0,50)}...</p>
    </div>
  )
}

export default Productdescription