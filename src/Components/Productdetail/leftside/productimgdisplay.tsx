import React, { useState } from 'react'
import Mainimage from './mainimage'
import Smallimage from './smallimage'
import productsdetail from "@/Constant/productdetail"

const productimgdisplay = ({ id ,colorimgs,setcolorimgs}: any) => {

    const [mainimgchange, setMainimgchange]  = useState()

    return (
        <div className="left w-[600px]">
            <Mainimage id={id} data={productsdetail} colorimg={colorimgs}  mainimgchange = {mainimgchange} />
            <div className="small-images ">
                {productsdetail.map((data,index) => {

                    const images = [data.main_image, data.image2, data.image3, data.image4, data.image5]



                    return data.id === Number(id) && <div key={index}  className='flex gap-3' >
                        { images.map((data) => (<Smallimage img={data} index={index} setMainimgchange={setMainimgchange} setcolorimg={setcolorimgs} />)) }
                    </div>

                }
                )}




            </div>
        </div>
    )
}

export default productimgdisplay