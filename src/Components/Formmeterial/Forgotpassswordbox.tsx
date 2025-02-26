import Inputbox from './Inputbox'
import Inputbtn from './Inputbtn'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import Link from 'next/link'

const Forgotpassswordbox = () => {
  return (
    <form action="">
    <Inputbox type="email" label="please enter your email address" icons2={<MdOutlineAlternateEmail color='orange'/>} />
    <Inputbtn text="submit" />
    <p className='text-sm text-center py-2'>if you remember the password go to 
    <Link className=' text-blue-500  p-2' href={"/login"}>login</Link>

    </p>
  </form>
  )
}

export default Forgotpassswordbox
