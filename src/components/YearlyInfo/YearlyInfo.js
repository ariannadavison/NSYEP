import React, { useState } from "react";
import PhotoBubbles from "../PhotoBubbles/PhotoBubbles";
import YearlyBanner from "./YearlyBanner";
import YearStats from "./YearStats";

function YearlyInfo({ regionName }) {
  
  const [bannerView, setBannerView] = useState("year-2020");
  
  function changeBannerView(e) {
    console.log("should be",regionName);
    const name = e.target.getAttribute("name");
    setBannerView(name);
  }

  function getYearlyView() {
    switch (bannerView) {
      case "year-2020":
        return <YearStats year="2020" regionName={regionName}/>;
      case "year-2019":
        return <YearStats year="2019" regionName={regionName}/>;
      case "year-2018":
        return <YearStats year="2018" regionName={regionName}/>;
      case "year-2017":
        return <YearStats year="2017" regionName={regionName}/>;
      default:
        return <YearStats year="2020" regionName={regionName}/>;
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
