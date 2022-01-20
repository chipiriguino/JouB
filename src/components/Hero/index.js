import React from "react";
// import Navbar from "../Navbar";
// import Sidebar from "../Sidebar";
import { Button } from 'react-bootstrap';
import '../../App.css';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <HeroContainer>
      {/* <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <HeroContent>
        <HeroItems>
          <img src="/imagenes/whitelogo-PhotoRoom.png" alt="logo" className="logo-img"/>
          {/* <HeroBtn>Haz tú reserva!</HeroBtn> */}
          <div className="button-container">
          {/* <a href="tel:+346262626262"><button className="button-landing" href="tel:+346262626262">Llámanos </button></a>
          <button className="button-landing">Carta </button> */}
          <Button className="btn-landin" variant="light" href="tel:+346262626262">LLÁMANOS</Button>
          <Button className="btn-landin" variant="dark" >CARTA</Button>{' '}
          </div>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
