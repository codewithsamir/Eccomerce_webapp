import Categorybox from "./categorybox"


const categroy = () => {
  return (
    <div className='py-2 px-4 md:px-16  flex items-center justify-center gap-5'>

<Categorybox name={"mobile"} keys={1}/>
<Categorybox name={"laptop"} keys={2}/>
<Categorybox name={"kitchen"} keys={3}/>
<Categorybox name= {"kid-cloth"} keys={4}/>
<Categorybox name={"bag"} keys={5}/>
<Categorybox name={"telvision"} keys={6}/>
    </div>
  )
}

export default categroy