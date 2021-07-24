import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { Link } from "react-router-dom";
import MapV2 from "../MapV2/MapV2.js";
import { regions } from "../../data/Regions";
import "./regionalMap.css";
import "../../variables.css";

const regionData = regions.map((region) => {
    return region;
});

const RegionalMapV2 = () => {
    return (
        <div className="mappy">
            <StylesProvider injectFirst>
                <div className="map__regionNames">
                    {regions.map((region) => {
                        return (
                            <Accordion className='map__regionNames'>
                                <AccordionSummary >
                                    <Link to={"/" + region.regionURL} id="map__regionNameLinks">
                                        <b>{region.region}</b>
                                    </Link>
                                </AccordionSummary>
                                {region.counties.map((county) => {
                                    return (
                                        <AccordionDetails className='map__counties'>
                                            <Link to={"./" + county.regionURL} id="map__regionNameLinks">{county}</Link>
                                        </AccordionDetails>
                                    );
                                })}
                            </Accordion>
                        );
                    })}
                </div>
            </StylesProvider>
            <div className="regionMappy">
                <MapV2 />
            </div>
        </div>
    );
};
export default RegionalMapV2;
