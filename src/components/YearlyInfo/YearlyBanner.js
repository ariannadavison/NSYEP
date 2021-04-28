import React from "react";
import "./yearlyBanner.css";

function YearlyBanner({ changeBannerView }) {
  return (
    <div className="yearly-banner-component">
      <ul onClick={changeBannerView} className="yearlyBanner-years">
        <li id="year-2020" name="year-2020">
          2020
        </li>
        <li id="year-2019" name="year-2019">
          2019
        </li>
        <li id="year-2018" name="year-2018">
          2018
        </li>
        <li id="year-2017" name="year-2017">
          2017
        </li>
      </ul>
    </div>
  );
}

export default YearlyBanner;
