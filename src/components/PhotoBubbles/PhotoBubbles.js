import React from "react";
import "./photoBubbles.css";

const PhotoBubbles = ({ images }) => {
  //! images is being fed an object of keys with the image src ie images['doggy.png']

  //how would I make this so that the images are dynamic not hard coded.
  //- option 1: props >> image will be required in the app.js
  //- option 2: putting them in as a recursive file finding thing for each folder of region?

  /* Beyond MVP */
  /* Dynamic Photo bubbles, brainstorm */
  /* thru css? similarily done like the accordions */
  /* - make css 'templates' */
  /* randomly assign the bubble the css */
  /* For now make the bubbles to fit statically >> probably flex so that each sized content can push the others around making it look more dynamic than it is */

  // Jiaxi Notes
  // 1) You want the system to go through the pictures and populate them onto the component
  // 2) When a certain region gets clicked certain pictures from that region will show up
  // 3) The years will also dictate the kind of bubbles that will show
  // 4) start with making a bubble with details
  // 5) then use a filter to decide which ones get populated
  // 6) First build the circle component

  return (
    <div>
      something should be here
      {Object.keys(images)
        .slice(0, 10)
        .map((keyName, i) => {
          return (<div
            key={i}
            style={{
              backgroundImage: `url(${images[keyName]})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="photoBubbles"
          ></div>);
        })}
    </div>
  );
};

export default PhotoBubbles;
