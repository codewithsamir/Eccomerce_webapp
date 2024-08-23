"use client"
import React, { useState } from 'react'

import Itemimg from './Cartitem/Itemimg'
import Itemname from './Cartitem/Itemname'
import Itemprice from './Cartitem/Itemprice'
import Itemqty from './Cartitem/Itemqty'
import Itemtotalprice from './Cartitem/Itemtotalprice'
import Items from './Cartitem/Items'
import { MdDelete } from 'react-icons/md'

const Cartitemsection = () => {
    const [takeqty, settakeqty] = useState(1)
    const[takeprice, settakeprice] = useState(100)
  return (
    <table className='w-full' >
<tr className='border-b-2 border-gray-400 p-2 '>
    <th className='text-left  p-4 text-black capitalize'>items</th>
    <th className='text-left p-4 text-black capitalize'>price</th>
    <th className='text-left p-4 text-black capitalize'>quantity</th>
    <th className='text-left p-4 text-black capitalize'>Total</th>
    <th className='text-left p-4 text-black capitalize'>action</th>
</tr>

<tr  className='border-b-2 border-gray-400 '>
  <td className='p-4  text-black'><Items/></td>
   <td className='p-4 text-black'><Itemprice price={takeprice}/></td>
   <td className='p-4 text-black'><Itemqty getqty={settakeqty} /></td>
   <td className='p-4 text-black '><Itemtotalprice price={takeprice} qty = {takeqty}/></td>
   <td className='p-4 text-black '><MdDelete color='red'  size={30} className="cursor-pointer"/></td>
</tr>
<tr  className='border-b-2 border-gray-400 '>
  <td className='p-4  text-black'><Items/></td>
   <td className='p-4 text-black'><Itemprice price={takeprice}/></td>
   <td className='p-4 text-black'><Itemqty getqty={settakeqty} /></td>
   <td className='p-4 text-black '><Itemtotalprice price={takeprice} qty = {takeqty}/></td>
   <td className='p-4 text-black '><MdDelete color='red'  size={30} className="cursor-pointer"/></td>
</tr>

    </table>
  )
}

export default Cartitemsection