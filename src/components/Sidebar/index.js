import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";
import {
  FaInstagram,
} from "react-icons/fa";
import {
  SocialIconLink,
} from "../Footer/FooterElements";


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu className="sidebar-body">
      <SidebarLink to="/">Inicio</SidebarLink>
        <SidebarLink to="/hamburguesas">Bebidas</SidebarLink>
        <SidebarLink to="/hamburguesas">Entrantes</SidebarLink>
        <SidebarLink to="/hamburguesas">Hambuguesas</SidebarLink>
        <SidebarLink className="sidebar-dessert" to="/postres">Postres</SidebarLink>
        <img className="logo-sidebar" src="/imagenes/jou-PhotoRoom.png" alt="logo 2"/>
        {/* <SidebarLink to="/">Quienes somos</SidebarLink>
      <SidebarLink to="/gallery">Galería</SidebarLink> */}
      <div className="footer-sidebar">
      <p>C/ falsa 123 Santa Pola</p>
      <p>Teléfono: 612345678</p>
      <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram className="black-insta" />
              </SocialIconLink>
      </div>
      </SidebarMenu>
   
      {/* <SideBtnWrap>
        <SidebarRoute to="/cartacompleta">Carta Completa</SidebarRoute>
      </SideBtnWrap> */}
    </SidebarContainer>
  );
};

export default Sidebar;
