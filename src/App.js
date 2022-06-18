import Header from "./Components/Landing page/Header";
import Imgpart from "./Components/Landing page/Sect1";
import Sect2 from "./Components/Landing page/Sect2";
import Sect3 from "./Components/Landing page/Sect3";
import Sect4 from "./Components/Landing page/Sect4";
import Footer from "./Components/Landing page/Footer";
import Page1 from "./Components/Landing page/mobilepage/Page1";
import Page2 from "./Components/Landing page/mobilepage/Page2";
import Page3 from "./Components/Landing page/mobilepage/Page3";

import Page0 from "./Components/Landing page/mobilepage/Page0";

function App() {

  return (
    <div className="contain">
     <Header />
     <Imgpart />
     <Sect2 />
     <Sect3 />
     <Sect4 />
     <Page0 />
     <Page1 />
     <Page2 /> 
     <Page3 />    
     <Footer />
     </div>
  );
}

export default App;
