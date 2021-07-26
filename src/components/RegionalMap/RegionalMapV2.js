import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { Link } from "react-router-dom";
<<<<<<< HEAD:src/components/RegionalMap/RegionalMapV2.js
import MapV2 from "../MapV2/MapV2";
import { regions } from "../../data/Regions";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import "./regionalMap.css";

=======
import MapV2 from "../MapV2/MapV2.js";
import { regions } from "../../data/Regions";
import "./regionalMap.css";
import "../../variables.css";
>>>>>>> 149f085c2dce9128e36ee42f43077fb258376d57:src/components/RegionalMapV2.js

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
                                <AccordionSummary expandIcon={'\u02c7'} className="map__regionName">
                                    <Link to={"/" + region.regionURL} id="map__regionNameLinks">
                                        <b>{region.region}</b>
                                    </Link>
                                </AccordionSummary >
                                {region.counties.map((county) => {
                                    return (
<<<<<<< HEAD:src/components/RegionalMap/RegionalMapV2.js
                                        <Link to={"/" + region.regionURL} id="map__regionNameLinks">
                                            <AccordionDetails target={"/" + region.regionURL} className='map__counties'>{county}
                                            </AccordionDetails>
                                        </Link>
=======
                                        <AccordionDetails className='map__counties'>
                                            <Link to={"./" + region.regionURL} id="map__regionNameLinks">{county}</Link>
                                        </AccordionDetails>
>>>>>>> 149f085c2dce9128e36ee42f43077fb258376d57:src/components/RegionalMapV2.js
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
