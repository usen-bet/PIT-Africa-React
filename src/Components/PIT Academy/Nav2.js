import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Nav2 = () => {
  return (
    <div className='spans'>
    <button>
   <Link to= '/Hammenu2'>
  <FaBars style={{ color:'black', fontSize:'24px',marginRight:'5px'}}/>
   </Link>
    </button>
    </div>
  )
}

export default Nav2