import React from "react";
import { Link } from "react-router-dom";
import { storyBank } from "../../data/TestStories.js";
import "./photoBubbles.css";

const PhotoBubbles = ({ year, regionName }) => {
  console.log("photo bubbles region Name", regionName);

  let images;

  const importImages = (r) => r.keys().map(r);

  //!I'll have to rework this when the different years come into play

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

  let filteredStory;

  const getStory = (region, img) => {
    //@region STRING
    //@img STRING
    const findStory = (i) => i.img === img;
    //filter to find the right region then the right img:
    //this is an array of all available stories from filtered region
    let filteredRegion = storyBank.filter((item) => item.region === region);
    filteredRegion.map(
      (item) => (filteredStory = (item.stories.find(findStory)).media)
    );
    console.log("running story", filteredStory.name)
  };

  const constuctBubbles = () => {
    console.log("running bubbles")
    return Object.keys(images)
      .slice(0, 10)
      .map((keyName, i) => {
        dynamicWidth();
        let image = images[keyName].default;
        getStory(regionName, image);
        return (
          <Link
            to={{
              pathname: `/${regionName}/${filteredStory.name}`,
              state : {
                image: image,
                name: filteredStory.name,
                age: filteredStory.age,
                county: filteredStory.county,
                job: filteredStory.job,
                jobTitle: filteredStory.jobTitle,
                interview: filteredStory.interview
              }
            }}
          >
            <div
              key={i}
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: measurement ? measurement : 0,
                height: measurement ? measurement : 0,
              }}
              className="photoBubbles"
            ></div>
          </Link>
        );
      });
  };

  return (
    <div>
      <div className="photoBubbles__bubbleContainer">{constuctBubbles()}</div>
    </div>
  );
};

export default PhotoBubbles;

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

  
  routed component (found at the corresponding path) should then have access to it as props.location.person.

  */
