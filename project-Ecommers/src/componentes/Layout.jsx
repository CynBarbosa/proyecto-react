import Footer from "./footer";
import MenuHamburguesa from "./MenuHamburguesa";
import NavBar from "./NavBar";
import "../style/layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <MenuHamburguesa />
      <div className="body-layout">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
