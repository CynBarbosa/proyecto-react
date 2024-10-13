import React from "react";
import CartWidget from "./CartWidget";
import "../style/navBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="encabezado">
        <div className="barra-superior">
          <NavLink className={"logoNavBar"} to={"/"}>
            Neko
          </NavLink>
          <input type="text" placeholder="Buscar producto..." id="search" />
          <CartWidget />
        </div>
      </div>
    </>
  );
};

export default NavBar;
