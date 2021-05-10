import React from "react";
import "./logoHero.css";
import { ReactComponent as Banner } from "./NYATEPBanner.svg"

const LogoHero = () => {
  return (
    <div className="logoHero__container">
      <Banner />
    </div>
  );
};

export default LogoHero;
