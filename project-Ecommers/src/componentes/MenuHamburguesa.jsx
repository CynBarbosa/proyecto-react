import React, { useState } from "react";
import "../style/menuHamburguesa.css";
import { NavLink } from "react-router-dom";
import Flecha from "../assets/img/down.svg";

const MenuHamburguesa = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="menuHamburguesa">
      <button
        className="hamburguesaIcono"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Categoria<img className="flechaMenuHamburguesa" src={Flecha}></img>
      </button>
      {menuOpen && (
        <nav className="menuDesplegable">
          <ul>
            <li>
              <NavLink className={"Links"} to={"/category/jewelery"}>
                Joyeria
              </NavLink>
            </li>
            <li>
              <NavLink className={"Links"} to={"/category/electronics"}>
                Electronico
              </NavLink>
            </li>
            <li>
              <NavLink className={"Links"} to={"/category/men's clothing"}>
                Hombre
              </NavLink>
            </li>
            <li>
              <NavLink className={"Links"} to={"/category/women's clothing"}>
                Damas
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MenuHamburguesa;
