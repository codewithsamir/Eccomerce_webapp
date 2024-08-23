import Image from "next/image"


const banner = () => {
  return (
    <div className="w-full px-4 md:px-16 h-[300px] mx-auto mt-3 rounded-lg overflow-hidden ">
     
        {/* <Image src={"https://images.unsplash.com/photo-1644161170685-2f5678222db8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3QlMjBiYW5uZXJ8ZW58MHx8MHx8fDA%3D"} alt="" width={700} height={600} /> */}

        <img src="https://images.unsplash.com/photo-1644161170685-2f5678222db8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3QlMjBiYW5uZXJ8ZW58MHx8MHx8fDA%3D" alt="" className="w-full h-full object-cover  rounded-lg" />

    </div>
  )
}

export default banner