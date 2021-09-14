import React from "react";
import "./AboutUs.css";
import Who from './Who'
import What from "./What";
import Approach from "./Approach";
import Members from "./Members";
import Staff from "./Staff";
const WhatIs = () => {
    return (
        <div>
            {/* <div id="pageNavigation">

                <span><a href="#who_jump" >Who We Are</a></span>
                <span><a href="#what_jump" >What We Do</a></span>
                <span><a href="#approach_jump" >Our Approach</a></span>
                <span><a href="#members_jump" >Our Members</a></span>
                <span><a href="#staff_jump" >Our Staff</a></span>
            </div> */}
            <div id="who_jump" className="about">
                {/* <img src={picture} className="about__picture" /> */}
                <Who />
                <div id="what_jump" className="about__separator"></div>
                <What />
                <div id="approach_jump" className="about__separator"></div>
                <Approach />
                <div id="members_jump" className="about__separator"></div>
                <Members />
                <div id="staff_jump" className="about__separator"></div>
                <Staff />
            </div>
        </div>
    );
};

export default WhatIs;
//change