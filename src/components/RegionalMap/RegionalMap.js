import React, { useEffect } from "react";

const RegionalMap = () => {
    useEffect(() => {
      function callback() {
        if (
          window.event.data.length >= 22
          && window.event.data.substr(0, 22) == "__MM-LOCATION.REDIRECT"
        ) {
          // Also: where is `location` defined? I know old JS code
          // tends to have globals everywhere but is modern JS
          // (with modules) it's pretty much impossible.
          window.location = window.event.data.substr(22);
        }
      }
  
      window.addEventListener("message", callback, false);
  
      return () => {
        window.removeEventListener("message", callback, false);
      }
    });
  
    return (
      <iframe
        src="https://createaclickablemap.com/map.php?id=101499&maplocation=ny&online=true"
        width="900"
        height="525"
        style={{border: "none"}}
      />
    )
  }

export default RegionalMap;
