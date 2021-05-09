import React from "react";
import PhotoBubbles from "../PhotoBubbles/PhotoBubbles";

function YearStats({ year, regionName }) {
  console.log("yrearly stats region Name", regionName)
  return (
    <div className={`${year}-yearly-stats-component margins` }>
      <h1>{year}</h1>
      <PhotoBubbles year={year} regionName={regionName} />
    </div>
  );
}

export default YearStats;
