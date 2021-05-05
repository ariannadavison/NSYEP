import React from "react";
import PhotoBubbles from "../PhotoBubbles/PhotoBubbles";

function YearStats({ year }) {
  return (
    <div className={`${year}-yearly-stats-component`}>
      <h1>{year}</h1>
      <PhotoBubbles year={year}/>
    </div>
  );
}

export default YearStats;
