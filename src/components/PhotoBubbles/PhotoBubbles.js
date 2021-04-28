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

  return (
    <div>
      something should be here
      {/* {Object.keys(images)
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
        })} */}
        {/* <img src="" /> */}
    </div>
  );
};

export default PhotoBubbles;
