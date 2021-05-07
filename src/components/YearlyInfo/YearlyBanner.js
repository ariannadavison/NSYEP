import React, { useState } from "react";
import "./yearlyBanner.css";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

function YearlyBanner({ changeBannerView }) {

  const [selectedYear, setYear] = useState('2020');

  const handleChange = (event, newYear) => {
    changeBannerView(event);
    setYear(newYear);
  }

  return (
    <div className="yearlyBannerContainer">
      <ToggleButtonGroup
        value={selectedYear}
        exclusive
        onChange={handleChange}
        aria-label="year switch"
        className="yearly-banner-component"
        id="base"
      >
        <ToggleButton value='2020' aria-label="2020">
          <li id="year-2020" name="year-2020">
            2020
          </li>
        </ToggleButton>
        <ToggleButton value="2019">
          <li id="year-2019" name="year-2019">
            2019
          </li>
        </ToggleButton>
        <ToggleButton value="2018">
          <li id="year-2018" name="year-2018">
            2018
          </li>
        </ToggleButton>
        <ToggleButton value="2017">
          <li id="year-2017" name="year-2017">
            2017
          </li>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default YearlyBanner;
