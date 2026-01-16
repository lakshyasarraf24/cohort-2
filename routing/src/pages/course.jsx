import { Outlet, useNavigate } from "react-router-dom"

const course = () => {
const navigate=useNavigate()
  return (
    <div>
      <h1>courses</h1>
       <Outlet/>
       <button className="px-4 py-0.5 bg-red-400 ds" onClick={()=>{
          navigate('/course/ds')
       }}>ds</button>
       <button className="px-4 py-0.5 bg-red-400 webdev" onClick={()=>{
        navigate('/course/webdev')
       }}>webdev</button>
    </div>
   
  )
}

export default course
