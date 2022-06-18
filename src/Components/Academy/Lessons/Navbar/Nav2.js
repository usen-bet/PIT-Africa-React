import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Nav2 = () => {
  return (
    <div className='spans'>
    <button>
   <Link to= '/Lessons'>
   <AiOutlineClose style={coll} />
   </Link>
    </button>
    </div>
  )
}

const coll = {
  color:'black',
  fontSize:'24px'
}

export default Nav2