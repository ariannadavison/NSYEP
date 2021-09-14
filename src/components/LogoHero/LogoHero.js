import React from "react";
import "./logoHero.css";
import Banner from "./Banner.png";
import nyateplogo from "./nyateplogo.png"

const LogoHero = () => {
  return (
    <div className="logoHero__container">
      <img className="logoImg" src={nyateplogo} />
      <img src={Banner} />
    </div>
  );
};

export default LogoHero;
//change