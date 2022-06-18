
import Nav from './Nav';
import Nav2 from './Nav2';




const Header = ({ Navbar }) => {
  return (
    <div>
    <section className='sect1'>
    <div className='pit'>
     <h1>
    PIT Africa     
    </h1> 
    </div>  
     <Nav2 />
     <Nav /> 
    </section>
    </div>
  )
}

export default Header