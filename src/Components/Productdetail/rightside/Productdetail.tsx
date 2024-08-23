import React from 'react'
import Productbrand from './Productbrand'
import Productname from './Productname'
import Productratingreview from './Productratingreview'
import Productprice from './Productprice'
import Productcolor from './Productcolor'
import Productsize from './Productsize'
import Productdetailbtn from './Productdetailbtn'
import Productdeliverymessage from './Productdeliverymessage'
import productsdetail from '@/Constant/productdetail'
import Productdetaildiscription from './Productdetaildiscription'


const Productdetail = ({id, setcolorimg}:any) => {
  return (
    <div className="right">
     {productsdetail.map((data,index)=>{
      return data.id === Number(id) && <div key={index}>
           <Productbrand brandname = {data.brandname && data.brandname } />
        <Productname  productname={data.name}/>
        <Productratingreview rating = {data.rating} />
        <Productprice price={data.price}/>
        <Productcolor setcolorimg={setcolorimg } color={data.color ? data.color : "no color"} img={data['red-image']} mainimg={data.main_image} />
        <Productsize size={data.size && data.size} />
        <Productdetaildiscription descriptions={data.description} />
        <Productdetailbtn />
        <Productdeliverymessage />
      </div>
     })}
    </div>
  )
}

export default Productdetail