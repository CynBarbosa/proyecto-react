import React, { useState } from "react";
import "../style/menuHamburguesa.css";
import { NavLink } from "react-router-dom";

const MenuHamburguesa = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="menuHamburguesa">
      <button
        className="hamburguesaIcono"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Categoria
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
