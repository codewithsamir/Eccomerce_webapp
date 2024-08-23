import React from 'react'

const Productdetaildiscription = ({descriptions}:any) => {
    let des = descriptions.split(",")
  return (
    <div className='py-3 text-black'>
        <h3 className='text-2xl py-1'>Product  Description</h3>
        <ul className='py-2 list-disc list-inside'>
            {des.map((data:any, index:number)=>{
                return <li className='text-xl capitalize' key={index}>{data}</li>

            })}
          
          
        </ul>
    </div>
  )
}

export default Productdetaildiscription