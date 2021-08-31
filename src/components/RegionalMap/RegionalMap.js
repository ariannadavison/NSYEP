import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { Link } from "react-router-dom";
import Map from "../Map/Map.js";
import { regions } from "../../data/Regions";
import "./regionalMap.css";
import "../../variables.css";

const RegionalMap = () => {
    return (
        <div className="mappy">
            <StylesProvider injectFirst>
                <div className="map__regionNames">
                    {regions.map((region) => {
                        return (
                            <Accordion className='map__regionNames__dropdown'>
                                <AccordionSummary expandIcon={'\u25be'} className="map__regionName">
                                    <Link to={"/" + region.regionURL} id="map__regionNameLinks">
                                        <b>{region.region}</b>
                                    </Link>
                                </AccordionSummary >
                                {region.counties.map((county) => {
                                    return (
                                        <Link to={"/" + region.regionURL} id="map__regionNameLinks">
                                            <AccordionDetails target={"/" + region.regionURL} className='map__counties'>{county}
                                            </AccordionDetails>
                                        </Link>
                                    );
                                })}
                            </Accordion>
                        );
                    })}
                </div>
            </StylesProvider>
            <div className="regionMappy">
                <Map />
            </div>
        </div>
    );
};
export default RegionalMap;
