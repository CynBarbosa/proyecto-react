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
              <NavLink className={"Links"} to={"/category/cristal"}>
                -Vasos/Copas
              </NavLink>
            </li>
            <li>
              <NavLink className={"Links"} to={"/category/platos"}>
                -Platos
              </NavLink>
            </li>
            <li>
              <NavLink className={"Links"} to={"/category/tazas"}>
                -Tazas
              </NavLink>
            </li>
            <li>
              <NavLink className={"Links"} to={"/category/utensillos"}>
                -Cubiertos/Utensillos
              </NavLink>
            </li>
            <li>
              <NavLink className={"Links"} to={"/category/desayuno"}>
                -Teteras/Cafeteras
              </NavLink>
            </li>
            <li>
              <NavLink className={"Links"} to={"/category/cocina"}>
                -Ollas/Sartenes
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MenuHamburguesa;
