import { useState, useEffect, useRef } from "react"
import { Link } from 'react-router-dom'

const Login1 = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    userRef.current.focus();
  }, [])
  
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();

    setUser('')
    setPwd(' ')
    setSuccess(true)
  }

  return (
  <>
  { success ? (
    <section>

       <Link to='/' style={{color:'white'}}>Home</Link>
    </section>
  ) : (
    <div className="login1">
      <p  ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    <div className="litya">
    <h1>Login to your Account</h1>  
    <div className="login2">
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
        <label htmlFor="Email"><p>Email</p></label>
        <input
         type="email" 
         placeholder="Enter email" 
         className="inp"
         id="Email"
         ref={userRef}
         autoComplete="off"
         onChange={(e) => setUser(e.target.value)}
         value={user}
         required
         ></input>
        </li>
        <li>
       <label htmlFor="password"><p>Password</p></label> 
        <input 
        type="password" 
        placeholder="Enter password" 
        className="inp"
        id="password"
        autoComplete="off"
        onChange={(e) => setPwd(e.target.value)}
        value={pwd}
        required
        ></input>  
        </li>
        <li className="tap">

        <Link to="/Acad"> 
        <input type="submit" value="Verify me" className="subzero"></input>
        </Link> 
        </li>
      </ul>
    </form>
    </div>
    </div>  
    </div>)}
  </>
  )
}

export default Login1