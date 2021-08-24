import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__columns">
        <div className="footer__info">
          <p><b>NYATEP</b><br />
          518-728-9057</p>
          <p>P.O. Box 648 <br />
          Albany, New York 12201</p>
          {/* <p>518-728-9057</p> */}
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