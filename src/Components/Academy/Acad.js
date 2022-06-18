import { FaRegBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Acad = () => {
  return (
    <div className='acad'>
        <div className='headjr'>
                <p>
                Hello User,   
                </p>    
                
                <div className='ufr'>
                <FaRegBell style={bell } className="bell"/> 
                <p>U</p> 
                </div>
        </div>  
        <div className='colorbgs'>
            <div className='grade'>
            <Link to='/Courses'>
            <div className='half1'>
             <p>Courses</p>
            </div>
            </Link>
            <Link to="/Lessons">
            <div className='half2'>
             <p>Lessons</p>
            </div>
            </Link>
            </div>
            <div className='class'>
            <Link to="/Tests">
            <div className='half3'>
             <p>Tests</p>
            </div>
            </Link>
            <Link to="/Grades">
            <div className='half4'>
             <p>Grades</p>   
            </div>
            </Link>
            </div>
            </div>  
    </div>
  )
}

const bell = {
  fontSize:'33px',
  marginRight:'30px',
  transition:'all 0.3s linear',
  cursor:'pointer'
}

export default Acad
