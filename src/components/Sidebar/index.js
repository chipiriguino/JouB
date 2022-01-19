import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Bebidas</SidebarLink>
        <SidebarLink to="/">Entrantes</SidebarLink>
        <SidebarLink to="/">Hambuguesas</SidebarLink>
        <SidebarLink to="/">Sandwiches</SidebarLink>
        <SidebarLink className="sidebar-dessert" to="/">Postres</SidebarLink>
        <img className="logo-sidebar" src="/imagenes/jou-PhotoRoom.png" alt="logo 2" width="250"/>
        <SidebarLink to="/">Quienes somos</SidebarLink>
      <SidebarLink to="/">Galería</SidebarLink>
      <p>C/ falsa 123 Santa Pola</p>
      <p>Teléfono: 612345678</p>
      </SidebarMenu>
   
      {/* <SideBtnWrap>
        <SidebarRoute to="/cartacompleta">Carta Completa</SidebarRoute>
      </SideBtnWrap> */}
    </SidebarContainer>
  );
};

export default Sidebar;
