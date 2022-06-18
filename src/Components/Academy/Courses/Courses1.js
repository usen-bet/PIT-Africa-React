import { FaArrowLeft } from 'react-icons/fa'
import Searchline from './Searchline'
import { Link } from 'react-router-dom'

const Courses1 = () => {
  return (  
    <div>
    <div className="log">
         <div className='topper'>
         <div className='arrow'>
         <Link to="/Acad">
         <FaArrowLeft style={{color:'black'}} />
         </Link> <h1> Courses</h1>
         </div>
          <p>Browse through our catalog of <br></br> cousrses and get started learninng</p>
          </div>   
          <Searchline/>

    </div>    
    </div>
  )
}

export default Courses1