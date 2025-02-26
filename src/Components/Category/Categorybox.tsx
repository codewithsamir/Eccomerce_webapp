"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const categorybox = ({name,keys}:any) => {
    const route = useRouter()
  return (
    <div className=' p-4
     bg-orange-500 rounded-xl flex justify-center items-center
   cursor-pointer flex-col' key={keys} onClick={()=>route.push(`/Category/${name}`)}>
    {/* <Image src="https://images.unsplash.com/photo-1518991043280-1da61d9f3ac5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D" alt={name} width={100} height={100}  /> */}
        <p>{name}</p>
    </div>
  )
}

export default categorybox