import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedinIn, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__columns container">
        <div className="footer__info">
          <p><b>NYATEP</b><br />
          518-728-9057</p>
          <p>P.O. Box 648 <br />
          Albany, New York 12201</p>
        </div>
        <div className="footer__social">
          <div className="twitter social-bg">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </div>
          <div className="linkedin social-bg">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </div>
          <div className="facebook social-bg">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </div>
          <div className="instagram social-bg">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;