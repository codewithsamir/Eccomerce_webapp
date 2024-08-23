import Header from "@/Components/Header/Header"
import Banner from "@/Components/Banner/Bannerimg"

import Category from "@/Components/Category/Categroysection"
import Productsection from "@/Components/Productcard/Productsection"
import Footer from "@/Components/Footer/Footer"
import Filtersection from "@/Components/Section/fitersection"


const page = () => {
  return (
    <div className="bg-gray-300">
    <Category/>
      <Banner />
      <Filtersection />
<Productsection/>

    </div>
  )
}

export default page