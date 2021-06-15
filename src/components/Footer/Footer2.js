import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { faTwitter, faFacebook, faYoutube, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

const Footer = () => {
  const useStyles = makeStyles({
    sectionTitle: {
      textTransform: "uppercase",
      fontWeight: "bold",
    },
    // contactInfo: {

    // }
  });
  let classes = useStyles();
  return (
    <div className="footer__outerContainer">
      <div className="footer__contactSections margins">
        <div className="footer__columnTitlesContainer">
          <div className="footer__columns">
            <Typography className={classes.sectionTitle}>Column One</Typography>
            <div className="footer_columnsInfo">
              <div>1725 Slough Avenue Scranton, PA 1850</div>
            </div>
          </div>
          <div className="footer__columns">
            <Typography className={classes.sectionTitle}>Column Two</Typography>
            <div className="footer_columnsInfo">
              <div> Email: </div>
              <div> Phone: </div>
            </div>
          </div>
          <div className="footer__columns">
            <Typography className={classes.sectionTitle}>
              Column Three
            </Typography>
          </div>
          <div className="footer__extraDiv"></div>
        </div>
      </div>
      <div className="footer__bottomSection margins">
        <div className="footer__copywriteSection">Copyright &#169; All rights resevered.</div>
        <div className="footer__bottomLinksSection">
          <div className="footer__socialLinks Twitter"> <FontAwesomeIcon icon={faTwitter} size="2x"/> </div>
          <div className="footer__socialLinks Facebook"> <FontAwesomeIcon icon={faFacebook} size="2x"/> </div>
          <div className="footer__socialLinks Google"> <FontAwesomeIcon icon={faGoogle} size="2x"/> </div>
          <div className="footer__socialLinks Youtube"> <FontAwesomeIcon icon={faYoutube} size="2x"/> </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
