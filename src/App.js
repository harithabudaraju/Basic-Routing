
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import React,{useState} from 'react';

// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import  NavDropdown  from 'react-bootstrap/NavDropdown';
// import { BrowserRouter, Route,Routes} from "react-router-dom";
// import { About } from './About';
// import { Home } from './Home';
// import { Services } from './Services';

// import React from 'react';
// import Example from './Example';
// import Product from './Product';
// import Summer from './Summer';

// import { Contact } from "./Contact";

// function App(){
//   return(

//     <div>

//       <Example />
//       <Product />
//       <Summer />
      
    
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Route,Routes} from "react-router-dom";
import { Home } from './Home';
import React from 'react';
import { Contact } from "./Contact";


function App(){
  return(
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='/contact' element={<Contact />} />
          

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;



