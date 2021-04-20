import React, { useState } from 'react';
import YearlyBanner from './YearlyBanner';
import YearStats from './YearStats';

function YearlyInfo() {
  const [bannerView, setBannerView] = useState('year-2020');

  function changeBannerView(e) {
    const name = e.target.getAttribute("name");
    setBannerView(name);
  }

  function getYearlyView() {
    switch(bannerView) {
      case 'year-2020':
        return <YearStats year="2020" />
      case 'year-2019':
        return <YearStats year="2019" />
      case 'year-2018':
        return <YearStats year="2018" />
      default:
        return <YearStats year="2020" />
    }
  }

  return(
    <div>
      <YearlyBanner changeBannerView={ changeBannerView } />
      { getYearlyView() }
    </div>
  )
}

export default YearlyInfo;
