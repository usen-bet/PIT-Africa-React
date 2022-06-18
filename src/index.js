import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CommunityPage from "./Components/Links/CommunityPage";
import PITAcad from './Components/Links/PITAcad';
import AboutUs from './Components/Links/AboutUs';
import Navbar from './Components/Links/Navbar';
import Navbar1 from './Components/Links/Navbar1';
import Navbar2 from './Components/Links/Navbar2';
import Signup from './Components/PIT Academy/SignUp/Signup';
import Login from './Components/PIT Academy/LogIn/Login';
import Navbar4 from './Components/Links/Navbar4';
import Navbar5 from "./Components/Links/Navbar5";
import SignUp2 from './Components/PIT Academy/SignUp2/SignUp2';
import Navbar6 from './Components/Links/Navbar6';
import SignUp3 from './Components/PIT Academy/SignUp3/SignUp3'
import Academy from './Components/Links/Academy';
import Navbar7 from './Components/Links/Navbar7';
import Navbar8 from './Components/Links/Navbar8';
import Courses from './Components/Academy/Courses/Courses'
import Navbar9 from './Components/Links/Navbar9'
import Grades from "./Components/Academy/Grades/Grades"
import Lessons from "./Components/Academy/Lessons/Lessons"
import Tests from "./Components/Academy/Tests/Tests" 
import Navbar10 from './Components/Links/Navbar10';
import Navbar11 from './Components/Links/Navbar11';
import Navbar12 from "./Components/Links/Navbar12"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App />}/>  
  <Route path='/communitypage' element={<CommunityPage></CommunityPage>}/>
  <Route path='/pitacademy' element={<PITAcad></PITAcad>} /> 
  <Route path='/AboutUs' element={<AboutUs></AboutUs>} />
  <Route path='/Hammenu' element={<Navbar></Navbar>} />
  <Route path='/Hammenu1' element={<Navbar1></Navbar1>} />
  <Route path='/Hammenu2' element={<Navbar2></Navbar2>} />
  <Route path='/Signup' element={<Signup></Signup>} />
  <Route path='/Login' element={<Login></Login>} />
  <Route path='Hammenu3' element={<Navbar4></Navbar4>} />
  <Route path='/Hammenu4' element={<Navbar5></Navbar5>} />
  <Route path='/Signup2' element={<SignUp2></SignUp2>} />
  <Route path='/Hammenu5' element={<Navbar6></Navbar6>} />
  <Route path='/SignUp3' element={<SignUp3></SignUp3>} />
  <Route path='/Acad' element={<Academy></Academy>} />
  <Route path='/Hammenu6' element={<Navbar7></Navbar7>} />
  <Route path='/Hammenu7' element={<Navbar8></Navbar8>} />
  <Route path='/Courses' element={<Courses></Courses>} />
  <Route path='/Hammenu8' element={<Navbar9></Navbar9>} />
  <Route path='/Grades' element={<Grades></Grades>} />
  <Route path='/Lessons' element={<Lessons></Lessons>} />
  <Route path='/Tests' element={<Tests></Tests>}/>
  <Route path='/Hammenu9' element={<Navbar10></Navbar10>} />
  <Route path='/Hammenu10' element={<Navbar11></Navbar11>} />
  <Route path="/Hammenu11" element={<Navbar12></Navbar12>} />
  </Routes> 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
