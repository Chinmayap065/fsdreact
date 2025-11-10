
//import Timer from './timer';
//import React from "react";
//import ErrorBoundary from "./ErrorBoundary";
//import DivisionComponent from "./DivisionComponent";
//import ArrayComponent from "./ArrayComponent";
// import DepartmentList from "./DepartmentList";
import { Routes,Route,Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import React from "react";

function App() {
  return (
    <div>
      <h1>Student portal</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
    
 

      
      


    
    
  
}

export default App;
