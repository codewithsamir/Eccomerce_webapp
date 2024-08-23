import React from 'react'

const mainimage = ({ data, id,mainimgchange,colorimg }: any) => {

  
    


    return (
        <div className="main-image w-[500px] h-[450px] rounded-2xl overflow-hidden mb-4">
            {data.map((img: any) => img.id === Number(id) ? <img key={id} src={(mainimgchange ||  colorimg  ||  img.main_image)} alt="" /> : "")}
        </div>
    )
}

export default mainimage