import React, { useState } from "react";
import Navbar from "./components/Navbar/index";
import Sidebar from "./components/Sidebar/index";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/index'
import CartaFull from './components/Carta full/CartaFull';
import { GlobalStyle } from "./globalStyles";



const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <GlobalStyle/>
       <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/cartacompleta" element={<CartaFull/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;