import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import { FaTimes, FaInfoCircle, FaCheck } from 'react-icons/fa'


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const E_REGEX = /[a-zA-Z0-9.%+-]+@[a-z0-9+-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
const PHONE_REGEX = /^(?=.*[0-9])(?=.*[0-9]).{7,12}$/;



const Body1 = () => {
  // const userRef = useRef();
  const errRef = useRef();

  const [fullName, setFullName] = useState('');
  const [validFullName, setValidFullName] = useState(false); 
  const [fullNameFocus, setFullNameFocus] = useState(false);
  
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false); 
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false); 
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState();
  const [success, setSuccess] = useState(); 


  useEffect(() => {
    const result = USER_REGEX.test(fullName);
    setValidFullName(result);
  }, [fullName]);

  // useEffect (() => {
  //   userRef.current.focus();
  // })
 
  useEffect (() => {
    const result = PWD_REGEX.test(password)
    // console.log(result)
    setValidPassword(result)
    const match = password === matchPwd
    // console.log(match)

    setValidMatch(match);
  }, [password, matchPwd])
  
  useEffect(() => {
    const result = E_REGEX.test(email)
    console.log(result)
    setValidEmail(result)
  })

  useEffect(() => {
    setErrMsg('');
  },[password, matchPwd, fullName])

  return (
    <div className='body1'>
        <p  ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    <div className="transbox">
    <h1>
    Sign Up to PIT Academy
    </h1>    
    <div className="divinp">
   <form>
   <ul>
   <li>
   <label htmlFor='Fullname'>
     <p>Full Name</p>
     <span >
     <FaCheck style={green} className={validFullName ? "valid" : 'hide'}/>
     </span>
     <span>
     <FaTimes style={red} className={validFullName || !fullName ? "hide" : "invalid" }/>
     </span>
   </label>    
    <input 
    type='text' 
    id='Fullname'
    placeholder="Enter your Full name" 
    className="inp"
    value={fullName}
    // ref={userRef}
    autoComplete="off"
    required
    onChange={(e) => { setFullName(e.target.value)}}
    aria-invalid={validFullName ? "false" : "true"}
    aria-describedby="uidnote"
    onFocus={() => {setFullNameFocus(true)}}
    onBlur={() => {setFullNameFocus(false)}}
    ></input>    
    <p id='uidnote' className={fullNameFocus && fullName && !validFullName ?
     "instructions" : "Offscreen"}>
       <FaInfoCircle />
       4 to 24 characters <br></br>
       must begin with a letter 
       letters, numbers, underscores and hyphens are allowed
     </p>
    </li> 




    <li>
    <label htmlFor='email'><p>Email </p></label>
    <input 
    type='email' 
    placeholder="Enter your email address" 
    autoComplete='off'
    className="inp"
    aria-describedby='enote'
    required
    aria-invalid={validEmail ? "false" : "true"}
    onChange = {(e) =>{setEmail(e.target.value)}}
    onFocus={() => setEmailFocus(true)}
    onBlur= {() => setEmailFocus(false)}></input>
    <p id='enote' className={emailFocus && email && !validEmail ?
    "instructions" : "Offscreen"}>
      <FaInfoCircle />
      Please set a valid Email address      
      </p>     
    </li>


    <li>
    <label htmlFor='password'>
      <p>Password</p>
  
     <FaCheck style={green}  className={validPassword ? "valid" : "hide"}/>
     
     
     <FaTimes style={red} className={validPassword || !password ? "hide" : "invalid" }/>
     
      </label>   
    <input 
    type='text'
    placeholder="Password must be 7 digits or more" 
    className="inp"
    value={password}
    id='password'
    onChange={(e) => setPassword(e.target.value)}
    required
    aria-invalid={validPassword ? "false" : "true"}
    aria-describedby="pwdnote"
    onFocus={() => setPasswordFocus(true)}
    onBlur= {() => setPasswordFocus(false)}
    ></input>

    <p id='pwdnote' className={ passwordFocus && !validPassword ? "instructions" : "Offscreen" }>
    <FaInfoCircle />
      8 to 24 characters <br></br>
      must include uppercase and lowercase letters, a number and
   a special character at least
    </p>   
    </li>



    <li>
    <label htmlFor='confirmPassword'>
      <p>Confirm Password</p>
      
      <FaCheck style={green} className={validMatch && matchPwd ? "valid" : "hide"}/>

      
      <FaTimes style={red} className={validMatch || !matchPwd ? "hide" : "invalid"} />
      
      </label>   
    <input
      type="password"
      id="confirmPassword"
      className='inp'
      onChange={(e) => setMatchPwd(e.target.value)}
      value={matchPwd}
      required
      aria-invalid={validMatch ? "false" : "true"}
      aria-describedby="confirmnote"
      onFocus={() => setMatchFocus(true)}
      onBlur={() => setMatchFocus(false)}
    ></input>
    <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
      <FaInfoCircle />
      Must match the first input field
    </p>    
    </li>


    <li>
    <label htmlFor='phone number'><p>Phone Number</p></label>   
    <input 
    type='Number' 
    placeholder="+234" 
    className="inp"
    required
    ></input>      
    </li> 


    <li>
     <Link to='/SignUp2'>
     <div className="tap"><input type='submit' value="Verify me" className="subzero " disabled={!validFullName || !validPassword || !validMatch ? true : false}></input></div>           
    </Link> 
    
    </li>  
   </ul>    
 
   
   </form>
   <div className="tap">
   <p>
   Already have an account?<Link to='/Login' style={{ color:'#00A0E3' }}> Login   </Link> 
   </p>
   </div>

    </div>
    </div>
    </div>
  )
}

const green = {
  color:"limegreen",
  backgroundColor:"black",
  borderRadius:"50%",
  marginBottom:"10px",
  padding:"3px",
  position:"relative",
  left:"90%",
  transform:"translateY(63px)"
}

const red ={
  color:"red",
  backgroundColor:"black",
  borderRadius:"50%",
  marginBottom:"10px",
  padding:"3px",
  position:"relative",
  left:"90%",
  transform:"translateY(63px)"  
}

export default Body1