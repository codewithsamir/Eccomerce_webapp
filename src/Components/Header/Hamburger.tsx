import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Hamburger = ({setGoToRight}:any) => {
  return (
    <div className="hamburger-sider md:hidden" onClick={()=>setGoToRight("right-0")}>
<GiHamburgerMenu  color="orange" size={40}/>

</div>
  )
}

export default Hamburger