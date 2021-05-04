import React from "react";
import "./photoBubbles.css";
// import IndividualStories from "../IndividualStories/IndividualStories";
const PhotoBubbles = ({ year, regionName }) => {
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
  let images;
  const importImages = (r) => r.keys().map(r);

  switch (regionName) {
    case "Capital":
      images = importImages(
        require.context(`../Images/Capital`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case "Western":
      images = importImages(
        require.context(`../Images/Western`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    default:
      images = importImages(
        require.context(`../Images/Capital`, false, /\.(png|jpe?g|svg)$/)
      );
  }


  let measurement;

  const dynamicWidth = () => {
    let length = Math.floor(Math.random() * (30 - 1) + 10);
    measurement = `${length}rem`;
    console.log(length);
  };

  //making a function to redirect to the correct individual page
  // const toStory = () => {
  //   console.log("to story")
  //   return <IndividualStories />
  // }

  return (
    <div>
      something should be here
      {year}
      <div className="photoBubbles__bubbleContainer">
        {Object.keys(images)
          .slice(0, 10)
          .map((keyName, i) => {
            dynamicWidth();
            console.log(images[keyName].default);
            return (
              <div
                key={i}
                style={{
                  backgroundImage: `url(${images[keyName].default})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: measurement ? measurement : 0,
                  height: measurement ? measurement : 0,
                }}
                className="photoBubbles"
                // onClick={toStory}
              ></div>
            );
          })}
      </div>
      {/* <img src="" /> */}
    </div>
  );
};

export default PhotoBubbles;
