import React from 'react'

const Page1 = () => {
  return (
    <div className='page1'>
    <h1>
    About Us    
    </h1>    
    <div className='divimg'>
    <img src='./pics/img1.jpg'></img>     
    </div>  
   <div className='parr1'>
   <p>
      A community for every pharmacist and pharmacy student
       in Nigeria and other <br></br>
       african countries in tech or wanting to get into tech.  
      </p>
      <h2>
        Why are we here?
      </h2>
      <p>
      Owing to the fast development rate in Nigeria and Africa. there has been the <br></br>
       need to call on professionals in the healthcare industry to come up with
       <br></br> technological innovations to improve healthcare services and products.
      </p>
      <h2>
        Why join us?
      </h2>
      <p>
      We are the biggest and fastest growing community of pharmacist/ pharmacy 
      <br></br> students in tech throughout Africa. Our vast network of individuals with diverse
      <br></br> tech skills will help you in networking with others that will facilitate your growth
      <br></br> in tech.
      </p>
   </div>
   <div className='btn2'>
   <button>
       Learn More
   </button>
   </div>

    </div>
  )
}

export default Page1