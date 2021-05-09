import React from "react";
// import { Link } from "react-router-dom";
// import IndividualStories from "../IndividualStories/IndividualStories";
import "./photoBubbles.css";
// import IndividualStories from "../IndividualStories/IndividualStories";
const PhotoBubbles = ({ year, regionName }) => {
  console.log("photo bubbles region Name", regionName);
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
  let name = regionName;
  const importImages = (r) => r.keys().map(r);

  switch (regionName) {
    case "Capital":
      images = importImages(
        require.context(`../Images/Capital`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case "Finger Lakes":
      images = importImages(
        require.context(`../Images/FingerLakes`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case "Central":
      images = importImages(
        require.context(`../Images/Central`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case "Southern":
      images = importImages(
        require.context(`../Images/Southern`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case "North":
      images = importImages(
        require.context(`../Images/North`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case "Mohawk Valley":
      images = importImages(
        require.context(`../Images/MohawkValley`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case "Hudson Valley":
      images = importImages(
        require.context(`../Images/HudsonValley`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case "New York City":
      images = importImages(
        require.context(`../Images/NewYorkCity`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case "Long Island":
      images = importImages(
        require.context(`../Images/LongIsland`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case "Western":
      images = importImages(
        require.context(`../Images/Western`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    default:
      console.log("it's not doing what you think it's doing");
  }

  let measurement;

  const dynamicWidth = () => {
    let length = Math.floor(Math.random() * (20 - 1) + 10);
    measurement = `${length}rem`;
    console.log(length);
  };

  // useEffect(() => {
  //   getAllImages();
  // }, [])
  //making a function to redirect to the correct individual page
  // const toStory = () => {
  //   console.log("to story")
  //   return <IndividualStories />
  // }

  // JSON import
  // we want a name, and a photo, and possibly a URL. and we want access to the region, given the currently-established URL structure. (/region/name)
  // is it possible to have, then, each thing structured as
  /*
  {
    name: 'jane',
    img: 'url goes here.jpg',
    region: 'central',
  }, etc.
  */
  // you have an array of those objects, or something like that, right? then you map through that and that's how the bubbles get formed?

  // that still leaves us with the point of actually fetching that person's information. that can get passed along here, or otherwise gotten from each individual story page. passing it along here has the merit of only being one map. rather than having to search for a match at every story, but has the downside of being a lot of information traveling at once.

  /*
  OPTION ONE:
  map once. have each media-person-object-thing go along as props when the bubble is made.
  OPTION TWO:
  search. search happens upon click and is matched to media-person-object-thing, passed as props to story
  OPTION RELATED TO TWO:
  search happens *after* click on the individual story page.


  bubble.json be name, img, possibly url, region?
  >separate json for an array of individual people

  everything.json is an array of people per region per year, with their whole info included, likely as a sub-object.

 */

  /*
  region: central,
  info: {
    name:
    img:
    age:
    county:
  }
 */

  /*
  import { AShitTonofInfo as stories } from 'toomuch.json';

  generateBubble() {
    stories.map(person => {
      return (
        <Link to={
          pathname: {`/${person.region}/${person.name}`},
          person: {person}
        }>
          <Bubble?> or <div className="bubble">
        </Link>
      )
    })
  }
  routed component (found at the corresponding path) should then have access to it as props.location.person.

  */

  // const storyConstructor = (data) => {
  //   data.map();
  // };

  return (
    <div>
      <div className="photoBubbles__bubbleContainer">
        {Object.keys(images)
          .slice(0, 10)
          .map((keyName, i) => {
            dynamicWidth();
            console.log(images[keyName].default);

            return (
              // <Link to= {
              //   pathname: `/${}`
              // }>
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

                //></div></a>);
              ></div>
              // </Link>
            );
          })}
      </div>
    </div>
  );
};

export default PhotoBubbles;
