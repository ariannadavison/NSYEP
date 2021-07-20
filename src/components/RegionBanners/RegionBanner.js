import React from "react";
import "./regionBanner.css";

const RegionBanner = ({region}) => {
  return (
    <div className="regionBanner__container">
      <div className="regionBanner__rect"/>
      <span className="regionBanner__regionName">{region}</span>
    </div>
  );
};

export default RegionBanner;
