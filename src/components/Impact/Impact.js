import React from 'react';
import './impact.css';
import people from './people.png';
import slash from './slash.png';
import employer from './employer.png'

const Impact = () => {
  return (
    <div className="impact margins">
      <h2 className="impact__header">2020 Statewide TANF SYEP Impact</h2>
      <div className="impact__header-bg"></div>

<<<<<<< HEAD
      <div className="impact__inner">
=======
      <div className="impact__inner col-12 col-sm-8 col-lg-10 offset-md-1 my-lg-3">
>>>>>>> eab4389a4dd394ae936fae86a7725f3f36682836
        <div className="impact__part">
          <img src={people} className="impact__img" alt="People icons" />
          <p>4,500 participated and were provided with a paid employment opportunity</p>
        </div>

        <img src={slash} className="impact__slash" />

        <div className="impact__part">
          <img src={employer} className="impact__img" alt="Handshake icon" />
          <p>1,253 employer worksites developed</p>
        </div>
      </div>

    </div>
  )
}

export default Impact;