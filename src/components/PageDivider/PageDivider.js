import React from "react";
import "./pageDivider.css";

const PageDivider = () => {
  return (
    <div className="pageDivider__container">
      <div className="pageDivider__left"></div>
      <div className="pageDivider__text">
        <span>Explore the stories in your area</span>
      </div>
      <div className="pageDivider__right"></div>
    </div>
  );
};

export default PageDivider;
