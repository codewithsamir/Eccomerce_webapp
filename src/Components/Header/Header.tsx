"use client"
import { useState } from "react"
import Account from "./Account"
import Hamburger from "./Hamburger"
import Logo from "./Logo"
import Searchbox from "./Searchbox"
import Sidebarclose from "./Sidebarclose"

const Header = () => {
  const [gotoright, setGoToRight] = useState("right-[-120%]")

  return (
    <header className=" py-5 px-2 lg:px-16 bg-white flex  justify-between items-center  gap-3">
      
     <div className={`side-box md:flex gap-5 fixed bg-orange-800 top-0 ${gotoright} bottom-0 md:bg-transparent md:relative md:right-0 md:p-0  p-5 w-[300px] transition-all`}>
     <Sidebarclose setGoToRight={setGoToRight}  />
 <Logo  />
 <Account  classText="last flex    justify-between  flex-col  gap-6  md:hidden pt-4" color = "white" setvalue ={0} />
        
       
     </div>
   
  <Searchbox />
  <Account classText="last  hidden md:flex  justify-between  gap-6 " color = "orange" setvalue ={1} />

     <Hamburger setGoToRight={setGoToRight} />
      


    </header>
  )
}

export default Header