import React from "react";
import "./logoHero.css";
// import banner from "./NYATEPBanner.png";
import Banner from "./Banner.png";

const LogoHero = () => {
  return (
    <div className="logoHero__container">
      <img src={Banner} />
    </div>
  );
};

export default LogoHero;