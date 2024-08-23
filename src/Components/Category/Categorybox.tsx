"use client"
import { useRouter } from 'next/navigation'


const categorybox = ({name,keys}:any) => {
    const route = useRouter()
  return (
    <div className=' p-4
     bg-orange-500 rounded-xl flex justify-center items-center
   cursor-pointer ' key={keys} onClick={()=>route.push(`/Category/${name}`)}>
        <p>{name}</p>
    </div>
  )
}

export default categorybox