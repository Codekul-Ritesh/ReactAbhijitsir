import React  from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';


function App() {
  return (
  
    <>   
     <Router>
      <Navbar />
<Routes>     
      
      <Route exact path="/" element={<Home/>}/>  
      <Route exact path="/about" element={<About/>}/>  

    </Routes>
  </Router>
  </>

  );
}

export default App;
