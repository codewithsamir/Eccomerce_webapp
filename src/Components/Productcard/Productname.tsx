import React from 'react'

const Productname = ({p_name}:any) => {
  return (
    <div className=''>
      <h2 className='text-2xl text-black '>{p_name?.slice(0,30)}</h2>
    </div>
  )
}

export default Productname