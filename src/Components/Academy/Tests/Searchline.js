

const Searchline = () => {
  return (
    <div className="deep">
    <ul style={line}  className='lineup'>
        <li>
          Most Popular  
        </li>
        <li>
          New  
        </li>
        <li>
          Beginner Friendly  
        </li>
        <input type="text" className='searchbrs'style={searchbr}></input> 
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