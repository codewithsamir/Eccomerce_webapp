import { FaCartArrowDown } from "react-icons/fa"
import { RiAccountPinCircleFill } from "react-icons/ri"


const Account = ({classText,color,setvalue}:any) => {
    
    // console.log(color);
    
  return (
    <div className={`${classText}`}>
    <div className="account flex items-center gap-2 ">
        <RiAccountPinCircleFill color={color} size={30} />
       <span className={`${setvalue === 1 ? "text-orange-500" : "text-white"} text-xl  capitalize`}> Account </span>
    </div>
    <div className="cart flex items-center gap-2">
        <FaCartArrowDown color={color} size={30} />
        <span className={`${setvalue === 1 ? "text-orange-500" : "text-white"}  text-xl  capitalize ` }>cart </span>
    </div>
</div>
  )
}

export default Account