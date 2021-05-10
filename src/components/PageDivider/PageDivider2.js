import React from "react";
import "./pageDivider2.css";

const PageDivider2 = () => {
  return (
    <div className="pageDivider__container">
      <div className="pageDivider__right">
        <div className="pageDivider__rect" />
        <div className="pageDivider__shapes">
          <div className="pageDivider__triangleTopLeft" />
          <div className="pageDivider__triangleBottomLeft" />
        </div>
      </div>
      <div className="pageDivider__text"> Explore the stories in your area </div>
      <div className="pageDivider__left">
        <div className="pageDivider__shapes">
          <div className="pageDivider__triangleTopRight" />
          <div className="pageDivider__triangleBottomRight" />
        </div>
        <div className="pageDivider__rect" />
      </div>
    </div>
  );
};

export default PageDivider2;
