import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
      <div className="map__regionNames">
        <ul>
          <li className="map__regionName"><Link to="/western" className="map__regionName map__regionName--turq">Western</Link></li>
          <li className="map__regionName"><Link to="/finger-lakes" className="map__regionName--pink">Finger Lakes</Link></li>
          <li className="map__regionName"><Link to="/central" className="map__regionName--blue">Central</Link></li>
          <li className="map__regionName"><Link to="/southern" className="map__regionName--lime">Southern</Link></li>
          <li className="map__regionName"><Link to="/north" className="map__regionName--gold">North</Link></li>
          <li className="map__regionName"><Link to="/mohawk-valley" className="map__regionName--red">Mohawk Valley</Link></li>
          <li className="map__regionName"><Link to="/capital" className="map__regionName--mint">Capital</Link></li>
          <li className="map__regionName"><Link to="/hudson-valley" className="map__regionName--purp">Hudson Valley</Link></li>
          <li className="map__regionName"><Link to="/new-york-city" className="map__regionName--sun">New York City</Link></li>
          <li className="map__regionName"><Link to="/long-island" className="map__regionName--ind">Long Island</Link></li>
        </ul>
      </div>

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
