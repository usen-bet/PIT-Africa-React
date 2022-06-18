import { Link } from "react-router-dom"

const Page0 = () => {
  return (
    <div className="page0">
        <div className='nav-i'>
        <button className='abtus size'>
         <Link to='/AboutUs' style={{link}}>
           About Us 
         </Link>
        </button>
        <button className='ourcm size'> 
        <Link to='/communitypage' style={{link}}> 
         Our Community
        </Link>
        </button>
        <button className='ptacad size'>
        <Link to='/pitacademy' style={{link}}>
         PIT Academy   
        </Link> 
        </button>
        </div>    
    </div>
  )
  
}

const link = {

}

export default Page0