import Inputbox from './Inputbox'
import Inputbtn from './Inputbtn'
import Link from 'next/link'
import { FaBirthdayCake, FaEye, FaEyeSlash, FaFemale, FaMale, FaPhone, FaUser } from 'react-icons/fa'
import { IoMdPersonAdd } from 'react-icons/io'
import { MdOutlineAlternateEmail, MdOutlineTravelExplore } from 'react-icons/md'
import { BiMaleFemale } from 'react-icons/bi'
import { useState } from 'react'

const Signinbox = () => {
    const [showpassword, setshowpassword]  = useState(true)
    const [showconfirmpassword, setshowconfirmpassword]  = useState(true)
    const showPassword= ()=>{
      setshowpassword(!showpassword)
      
    }
    const showPassword2= ()=>{
      setshowconfirmpassword(!showconfirmpassword)
      
    }
  
    
    

  return (
    <form action="">

    <div className="input flex gap-3">
    <Inputbox type="text" label="first name" icons2 = {<IoMdPersonAdd color='orange'/>} /> 
    <Inputbox type="text" label="last name" icons2 = {<IoMdPersonAdd color='orange'/>} /> 
    </div>

     <div className="input flex gap-3">
     <Inputbox type="text" label="username" icons2={<FaUser color='orange' />} /> 
     <Inputbox type="email" label="email" icons2={<MdOutlineAlternateEmail color='orange'/>}/> 
     </div>

     <div className="input  flex gap-3">
     <Inputbox type="text" label="mobile number" icons2={<FaPhone color='orange'/>} /> 
     <Inputbox type="text" label="address" icons2={<MdOutlineTravelExplore color='orange' />} /> 
     </div>

      <div className="input  flex gap-3">
     <div className="i flex-1">
     <Inputbox type="date" label="date of birth" icons2={<FaBirthdayCake color='orange' />} /> 
     </div>

     <div className="gender flex items-center gap-5">
     <Inputbox  type="radio" label="Male" icons2={<FaMale  color='orange' size={30}/>} name="gender" value="Male" csschildren="w-[120px]"/>

     <Inputbox   type="radio" label="Female" icons2={<FaFemale color='orange' size={30}/>} name="gender" value="female" csschildren="w-[120px]" />
     </div>
      </div>

    <div className="input flex gap-3">

    <Inputbox label="password" type={`${showpassword ? "password" : "text" }`} icons={showpassword ? <FaEye size={30 } color="orange" onClick={showPassword}/> : <FaEyeSlash size={30 } color="orange" onClick={showPassword}/>}  />

    <Inputbox label="confirm password" type={`${showconfirmpassword ? "password" : "text" }`} icons={showconfirmpassword ? <FaEye size={30 } color="orange" onClick={showPassword2}/> : <FaEyeSlash size={30 } color="orange" onClick={showPassword2}/>}  />
  
    </div>

    <div className="input">
      <Inputbtn text="submit" />
    </div>


    <p className='text-center'> if you have Already Account then 
      <Link href="/login" className='text-blue-500 px-1' >Login</Link>

    </p>
   </form>
  )
}

export default Signinbox
