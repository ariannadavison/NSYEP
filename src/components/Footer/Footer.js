import React from "react";
import "./footer2.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__columns">
        <div className="footer__info">
          <p>NYATEP</p>
          <p>P.O. Box 648</p>
          <p>Albany, New York 12201</p>
          <p>518-728-9057</p>
        </div>
        <div className="footer__social">
          <div className="twitter social-placeholder"></div>
          <div className="linkedin social-placeholder"></div>
          <div className="facebook social-placeholder"></div>
          <div className="instagram social-placeholder"></div>
        </div>
      </div>
    </div>
  )
}

export default Footer;