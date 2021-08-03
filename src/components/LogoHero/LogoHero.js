import React from "react";
import "./logoHero.css";
import banner from "./NYATEPBanner.png";

const LogoHero = () => {
  return (
    <div className="logoHero__container">
      <img src={banner} />
    </div>
  );
};

export default LogoHero;