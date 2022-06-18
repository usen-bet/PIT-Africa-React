import { FaArrowLeft } from "react-icons/fa"
import Searchline from "./Searchline"
import { Link } from "react-router-dom"

const Lessons1 = () => {
  return (  
    <div className="log">
         <div className='topper'>
         <div className='arrow'>
         <Link to="/Acad">
         <FaArrowLeft style={{color:'black'}} />
         </Link> <h1> Grades</h1>
         </div>
          <p>Keep track of your progress, and recieve
            <br></br> certification upon successful completion</p>
          </div>   
          <Searchline/>

    </div>    

  )
}

export default Lessons1