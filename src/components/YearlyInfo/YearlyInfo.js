import React, { useState } from "react";
import PhotoBubbles from "../PhotoBubbles/PhotoBubbles";
import YearlyBanner from "./YearlyBanner";
import YearStats from "./YearStats";

function YearlyInfo({ regionName }) {
  const [bannerView, setBannerView] = useState("year-2020");

  function changeBannerView(e) {
    const name = e.target.getAttribute("name");
    const year = e.target.getAttribute("value");
    setBannerView(name);
    return <PhotoBubbles year={name} regionName={regionName} />;
  }

  function getYearlyView() {
    switch (bannerView) {
      case "year-2020":
        return <YearStats year="2020" />;
      case "year-2019":
        return <YearStats year="2019" />;
      case "year-2018":
        return <YearStats year="2018" />;
      case "year-2017":
        return <YearStats year="2017" />;
      default:
        return <YearStats year="2020" />;
    }
  }

  return (
    <div>
      <YearlyBanner changeBannerView={changeBannerView} />
      {getYearlyView()}
    </div>
  );
}

export default YearlyInfo;
