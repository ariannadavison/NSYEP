import React, { useEffect } from "react";
import './regionalMap.css';

const RegionalMap = () => {

  useEffect(() => {
    function callback() {
      if (
        window.event.data.length >= 22 &&
        window.event.data.substr(0, 22) === "__MM-LOCATION.REDIRECT"
      ) {
        window.location = window.event.data.substr(22);
      }
    }

    window.addEventListener("message", callback, false);

    return () => {
      window.removeEventListener("message", callback, false);
    };
  });

  return (
    <div className="map">
      <div className="map__wrapper">
        <iframe
          src="https://createaclickablemap.com/map.php?id=101499&maplocation=ny&online=true"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
};

export default RegionalMap;
