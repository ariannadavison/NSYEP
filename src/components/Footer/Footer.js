import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__columns">
        <div>
          <p>Basic</p>
          1725 Slough Avenue Scranton, PA 1850
        </div>
        <div>Contact</div>
        <div>Category One</div>
      </div>
      <div>Copyright &copy; All Rights Reserved</div>
      <div className="footer__social"></div>
    </div>
  )
}

export default Footer;