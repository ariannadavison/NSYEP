import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MapV2 from "../MapV2/MapV2";
import "./regionalMap.css";

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
    <div className="mappy">
      <div className="map__regionNames">
        <ul>
<<<<<<< HEAD
          <li className="map__regionName">
            <Link to="/western" id="map__regionNameLinks">
              Western
            </Link>
          </li>
          <li className="map__regionName">
            <Link to="/finger-lakes" id="map__regionNameLinks">
              Finger Lakes
            </Link>
          </li>
          <li className="map__regionName">
            <Link to="/central" id="map__regionNameLinks">
              Central
            </Link>
          </li>
          <li className="map__regionName">
            <Link to="/southern" id="map__regionNameLinks">
              Southern
            </Link>
          </li>
          <li className="map__regionName">
            <Link to="/north" id="map__regionNameLinks">
              North
            </Link>
          </li>
          <li className="map__regionName">
            <Link to="/mohawk-valley" id="map__regionNameLinks">
              Mohawk Valley
            </Link>
          </li>
          <li className="map__regionName">
            <Link to="/capital" id="map__regionNameLinks">
              Capital
            </Link>
          </li>
          <li className="map__regionName">
            <Link to="/hudson-valley" id="map__regionNameLinks">
              Hudson Valley
            </Link>
          </li>
          <li className="map__regionName">
            <Link to="/new-york-city" id="map__regionNameLinks">
              New York City
            </Link>
          </li>
          <li className="map__regionName">
            <Link to="/long-island" id="map__regionNameLinks">
              Long Island
            </Link>
          </li>
=======
          <li className="map__regionName"><Link to="/western" className="map__regionName--turq">Western</Link></li>
          <li className="map__regionName"><Link to="/finger-lakes" className="map__regionName--pink">Finger Lakes</Link></li>
          <li className="map__regionName"><Link to="/central" className="map__regionName--ind">Central</Link></li>
          <li className="map__regionName"><Link to="/southern" className="map__regionName--lime">Southern</Link></li>
          <li className="map__regionName"><Link to="/north" className="map__regionName--gold">North</Link></li>
          <li className="map__regionName"><Link to="/mohawk-valley" className="map__regionName--red">Mohawk Valley</Link></li>
          <li className="map__regionName"><Link to="/capital" className="map__regionName--mint">Capital</Link></li>
          <li className="map__regionName"><Link to="/hudson-valley" className="map__regionName--blue">Hudson Valley</Link></li>
          <li className="map__regionName"><Link to="/new-york-city" className="map__regionName--sun">New York City</Link></li>
          <li className="map__regionName"><Link to="/long-island" className="map__regionName--purp">Long Island</Link></li>
>>>>>>> c40d66d4a8f2583250cd8c4641abf3c72d8f693e
        </ul>
      </div>
      <div className="regionMappy">
        <MapV2 />
      </div>
    </div>
  );
};

export default RegionalMap;
