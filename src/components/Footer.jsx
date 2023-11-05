import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="py-5">
        <h1 className="d-flex justify-content-center footerTitle">
          Eat, Cook, Repeat
        </h1>
        <p className="d-flex justify-content-center motto-footer footerDesk">
          Share your best recipe by uploading here !
        </p>
      </div>
      <div>
        <div className="d-flex justify-content-center gap-4 mb-3 footer-link">
          <a href="#">Product</a>
          <a href="#">Company</a>
          <a href="#">Learn More</a>
          <a href="#">Get In Touch</a>
        </div>
        <div className="d-flex justify-content-center">
          <p className="copyright">©️ Pijarcamp</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
