import React from "react";
import "../style/navBar.css";
import { NavLink } from "react-router-dom";
import cartBuy from "../assets/img/cart-buy.svg";
import Search from "./Search";

const NavBar = () => {
  return (
    <>
      <div className="encabezado">
        <div className="barra-superior">
          <NavLink className={"logoNavBar"} to={"/"}>
            Neko
          </NavLink>
          <Search />
          <NavLink to={"/cart"}>
            <img
              className="logoCart"
              src={cartBuy}
              alt=""
              style={{ width: 35, margin: 10, background: "white" }}
            />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
