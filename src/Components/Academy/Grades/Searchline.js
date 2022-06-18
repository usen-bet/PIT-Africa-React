

const Searchline = () => {
  return (
    <div className="deep">
    <ul style={line}  className='lineup'>
        <li>
          All
        </li>
        <li>
          New  
        </li> 
        <li>
          Ongoing  
        </li>
        <li>
          Completed
        </li>
        </ul>
        <input type="text" className='searchbr'style={searchbr}></input>    
        
           
    </div>
  )
}

const line = {


listStyle:'none',
gap:'20px',
marginTop:'30px'
}

const searchbr = {


}

export default Searchline