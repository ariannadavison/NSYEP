import React from "react";
import "./photoBubbles.css";

const PhotoBubbles = ({ year, regionName }) => {
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

  //here i will make a switch statement of which region to use
  let dir;

  switch(regionName) {
    case 'Capital' : dir = regionName
    case 'Western' : dir = regionName
    default: dir = 'Capital'
  }

  const importImages = (r) => r.keys().map(r);

  const images = importImages(require.context(`../Images/Capital`, false,  /\.(png|jpe?g|svg)$/))

  let measurement;

  const dynamicWidth = () => {
    let length = Math.floor(Math.random() * (20-10) + 10 );
    measurement = `${length}rem`;
    console.log(length);
  }
  return (
    <div>
      something should be here
      {year}
      <div className="photoBubbles__bubbleContainer">
        {Object.keys(images)
          .slice(0, 10)
          .map((keyName, i) => {
            dynamicWidth()
            return (<div
              key={i}
              style={{
                backgroundImage: `url(${images[keyName]})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: measurement ? measurement: 0,
                height: measurement ? measurement: 0
              }}
              className="photoBubbles"
            ></div>);
          })}
      </div>
        {/* <img src="" /> */}
    </div>
  );
};

export default PhotoBubbles;
