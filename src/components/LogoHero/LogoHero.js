import React from "react";
import "./logoHero.css";
import { ReactComponent as Banner } from "./NYATEPBanner.svg"

const LogoHero = () => {
  
  // const style = {
    // backgroundImage: `url(${banner})`
  // }

  return (
    // <div style={style} className="logoHero__container" />
    <div className="logoHero__container">
      <Banner />
    </div>
  );
};

export default LogoHero;
