import React from 'react';
import './whySYEP.css';
import picture from './s3-syep.jpeg';

const WhySYEP = () => {
  return (
    <div className="why clearfix">
      <div className="why__header">
        <h2 className="why__header-text">Why does it matter?</h2>
        <div className="why__header-bg"></div>
      </div>
      <img src={picture} className="why__picture my-2" />
      <p>Prior to COVID-19 the youth unemployment rate in New York State hovered around 20.7% for ages 16 to 19 and 11.6% for ages 20 to 24. Additionally, the NYC Comptroller recently highlighted the alarming rise in the unemployment rate among young people, ages 16 to 24 in New York City to 35.2% from its pre-pandemic rate of 6.6%. High unemployment for young people further exacerbates growing economic inequality. Earnings gained by young adults can support the critical economic needs of their families and create more financially sustainable homes.</p>
      <p>SYEP is the entry level pathway of economic mobility for New York's most vulnerable youth and their families. The program exposes young adults to the world of work and grants young adults the opportunity to develop critical “soft skills” such as working in teams, showing up on time, problem solving, and customer service that are crucial to long-term employability. A critical set of skills many employers see lacking in today's workforce.</p>
    </div>
  )
}

export default WhySYEP;