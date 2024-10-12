import CartWidget from "./CartWidget";
import "../style/navBar.css";

const NavBar = () => {
  return (
    <>
      <div className="encabezado">
        <div className="barra-superior">
          <h1>Neko</h1>
          <input type="text" placeholder="Buscar producto..." id="search" />
          <CartWidget />
        </div>
      </div>
    </>
  );
};

export default NavBar;
