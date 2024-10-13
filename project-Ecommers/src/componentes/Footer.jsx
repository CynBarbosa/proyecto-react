import React from "react";
import x from "../assets/img/x-icon.svg";
import tiktok from "../assets/img/tiktok-icon.svg";
import threads from "../assets/img/threads-icon.svg";
import instagram from "../assets/img/instagram-icon.svg";
import "../style/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h1 className="logo-footer">Neko</h1>
        <div className="redes-footer">
          <a href="">
            <img src={x} alt="" style={{ width: 25 }} />
          </a>
          <a href="">
            <img src={tiktok} alt="" style={{ width: 25 }} />
          </a>
          <a href="">
            <img src={threads} alt="" style={{ width: 25 }} />
          </a>
          <a href="">
            <img src={instagram} alt="" style={{ width: 25 }} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
