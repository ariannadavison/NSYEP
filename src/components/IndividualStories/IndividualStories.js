import React from "react";
import { useLocation } from "react-router";
import "./individualStories.css";

const IndividualStories = () => {    
  let { state }= useLocation();
  console.log("here!", state.name)
  return (
    <div className="individualStories__container">
      <div className="individualStories__innerContent">
      <img className="individualStories_studentPicture" src={state.image} alt="student" />
        <div className="individualStories__nameDetailsBox">
          <div className="individualStories__nameAgeCountry">
            <h2 className="individualStories__details">Name: {state.name}</h2>
            <h2 className="individualStories__details"> Age: {state.age}</h2>
            <h2 className="individualStories__details"> County: {state.county}</h2>
          </div>
          <div className="individualStories__jobPlacement">
            <h2 className="individualStories__details"> SYEP Job Placement: {state.job}</h2>
            <h2 className="individualStories__details">Job title: {state.jobTitle}</h2>
          </div>
          <p>
            {state.interview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndividualStories;
