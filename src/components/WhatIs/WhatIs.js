import React from 'react';
import './whatis.css';
import picture from './Robert_Walsh_Capital.jpg';

const WhatIs = () => {
  return (
    <div className="what">
      <img src={picture} className="what__picture" />
      <div>
        <h2 className="what__header">What is SYEP?</h2>
        <div className="what__header-bg"></div>
        <p>The Summer Youth Employment Program (SYEP) supports communities across the state in creating summer jobs for youth from low-income families. These summer work opportunities allow young New Yorkers to gain new skills this summer, resulting in improved academic performance and increasing future job prospects.</p>
        <p>To be eligible, young people must be ages 14 to 20 and have a family income below 200 percent of the federal poverty level (or $39,850 for a family of three). Employers can use the funds to subsidize wages, support education and training activities, as well as offer counseling and employment-related services, such as transportation to and from work.</p>
      </div>
    </div>
  )
}

export default WhatIs;