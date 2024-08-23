import { FaEye } from "react-icons/fa"


const Inputbox = ({icons2,label, type,icons,...props}:any) => {
    
    
  return (
    <div className="my-3">
      {label &&  <label htmlFor={label} className="block capitalize text-xl mb-1">{label}</label>}
      <div className="input p-2 text-black rounded-md w-full text-xl outline-none flex items-center bg-white">
      {icons2 && icons2}
      <input className="bg-transparent w-full outline-none px-2" type={type} {...props} />

      {icons && icons}
      </div>
    </div>
  )
}

export default Inputbox