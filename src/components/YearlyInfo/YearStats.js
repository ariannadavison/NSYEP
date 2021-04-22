import React from 'react';

function YearStats(props) {
  const { year } = props;

  return (
    <div className={`${year}-yearly-stats-component`}>
      <h1>{year}</h1>
    </div>
  )
}

export default YearStats;
