import React from "react";
import "../style/Footer.css"

function Footer() {
  return (
    <footer>
      <div class="py-5">
        <h1 class="d-flex justify-content-center mt-5 mb-5">
          Eat, Cook, Repeat
        </h1>
        <p class="d-flex justify-content-center mb-5 motto-footer">
          Share your best recipe by uploading here !
        </p>
      </div>
      <div>
        <div class="d-flex justify-content-center gap-5 mb-3 footer-link">
          <a href="#">Product</a>
          <a href="#">Company</a>
          <a href="#">Learn More</a>
          <a href="#">Get In Touch</a>
        </div>
        <div class="d-flex justify-content-center">
          <p class="copyright">©️ Pijarcamp</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
