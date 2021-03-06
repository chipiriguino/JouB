import React from "react";
import { Nav, NavLink, NavIcon} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
      <p className="white" >C/ Falsa 1234</p>
      {/* <p className="white">666777888</p> */}
        <NavLink to="/"></NavLink>
        <NavIcon onClick={toggle}>
          <p className="menu-toggle">MENU</p>
          {/* <img src="/imagenes/Captura de pantalla 2022-01-19 a las 12.19.46-PhotoRoom.png" alt="logo 2" width="50"/> */}
          {/* <Bars /> */}
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
