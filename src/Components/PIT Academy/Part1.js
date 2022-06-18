import { Link } from 'react-router-dom'

const Part1 = () => {
  return (
    
    <div className="part1">
    <div className="plot">
    <h1>
    Welcome to PIT Academy
    </h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur
     adipiscing elit. Morbi <br></br> dictum sodales luctus.
      Nullam turpis tortor,
     dignissim quis <br></br> sapien id, mollis aliquet nisi. 
    </p>

    <div className="buttn">
    <button className="buttn1">
    <Link to='/Signup'>
    Sign Up
    </Link>
    </button>
    <button className="buttn2">
    <Link to='/Login'>
    Login
    </Link>
 
    </button >
    </div>    
    </div>
    </div>
  )
}

export default Part1