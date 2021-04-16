import React from "react";
import "./logoHero.css";
import banner from "./NYATEPBanner.svg"

const LogoHero = () => {
  
  const style = {
    backgroundImage: `url(${banner})`
  }

  return (
    <div style={style} className="logoHero__container" />
  );
};

export default LogoHero;
