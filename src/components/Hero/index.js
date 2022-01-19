import React from "react";
// import Navbar from "../Navbar";
// import Sidebar from "../Sidebar";
import '../../App.css';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  // HeroH1,
  // HeroP,
  // HeroBtn,
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
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
