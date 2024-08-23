"use client"
import { GoChevronDown } from "react-icons/go"
import Categorybtn from "./fiterbtn"
import { useState } from "react"
import { IoFilter } from "react-icons/io5"


const Categorysection = () => {
    const buttonsname = 
    ["Types","price","review","color","meterial","offer","all filter"]
//    const [allfilter, setallfiler] =
//     useState()

// console.log(allfilter);


  return (
    <div className="py-4 px-4 md:px-16 flex items-center justify-between flex-wrap gap-3">
    <div className="left-side flex items-center gap-5 flex-wrap">
    {buttonsname.map((data,index)=>{
  
  return  <Categorybtn index= {index} btnname = {data} icons = {data === "all filter" ?<IoFilter /> : <GoChevronDown />}/>
    })}
    </div>

    <div className="rightside">
        <Categorybtn btnname={"sort by"} icons={<GoChevronDown/>} />
    </div>

      
    </div>
  )
}

export default Categorysection