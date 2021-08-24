import React from "react";
import "./mottoBanner.css";

const MottoBanner = () => {
  return (
    <div className="motto__banner">
      <div className="motto__text mb-3">
        <span>Summer Youth</span><br />
        <div className="motto__bg"></div>
        <span>Employment</span><br />
        <div className="motto__bg"></div>
        <span>Matters</span>
        <div className="motto__bg"></div>
      </div>
      <div className="banner__decorativeLine"></div>
    </div>
  );
};

export default MottoBanner;
