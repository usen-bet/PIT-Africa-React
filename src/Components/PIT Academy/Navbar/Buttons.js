import { Link } from 'react-router-dom'

const Buttons = () => {
  return (
    <div className='bt'>    
    <button className='abtus'>
      <Link to='/AboutUs' style={{link}}>
      About Us 
      </Link>
    </button>
    <button className='ourcm'> 
    <Link to='/communitypage' style={{link}}> 
   Our Community
   </Link>
   </button>
   <button className='ptacad'>
   <Link to='/pitacademy' style={{link}}>
    PIT Academy   
    </Link> 
   </button>
   </div>
  )
}

const link = {

}

export default Buttons