import { Link } from 'react-router-dom'

const Segment1 = () => {
  return (
    <div className='segment1'>
    <div className='login1'>
        <div className='smtransbox'>
            <div className="minibox">
            <h1>
                Choose a verification method     
             </h1>

             <button>
                   Verify with my email address
             </button>
             <button>
                    Verify with my phone number
             </button>

             <p>
                 Already have an account?<Link to='/Login' style={{ color:'#00A0E3' }}>Login</Link> 
             </p>

            </div>
        </div>
    </div>    
    </div>
  )
}

export default Segment1