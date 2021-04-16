import React from "react";
import "./regionBanner.css";

const RegionBanner = ({region}) => {
  return (
    <div className="regionBanner__container">
      <span className="regionBanner__regionName">{region}</span>
    </div>
  );
};

export default RegionBanner;
