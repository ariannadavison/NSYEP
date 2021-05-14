import React from "react";
import { Link } from "react-router-dom";
import { storyBank } from "../../data/TestStories.js";
import "./photoBubbles.css";

const PhotoBubbles = ({ year, regionName }) => {
  let images;

  const importImages = (r) => r.keys().map(r);

  switch (regionName) {
    case "Capital":
      switch (year) {
        case "2020":
          images = importImages(
            require.context(
              `../Images/Capital/2020`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2019":
          images = importImages(
            require.context(
              `../Images/Capital/2019`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2018":
          images = importImages(
            require.context(
              `../Images/Capital/2018`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2017":
          images = importImages(
            require.context(
              `../Images/Capital/2017`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        default:
          console.log("The year's haven't been seen.");
      }
      break;
    case "Finger Lakes":
      switch (year) {
        case "2020":
          images = importImages(
            require.context(
              `../Images/FingerLakes/2020`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2019":
          images = importImages(
            require.context(
              `../Images/FingerLakes/2019`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2018":
          images = importImages(
            require.context(
              `../Images/FingerLakes/2018`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2017":
          images = importImages(
            require.context(
              `../Images/FingerLakes/2017`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        default:
          console.log("The year's haven't been seen.");
      }
      break;
    case "Central":
      switch (year) {
        case "2020":
          images = importImages(
            require.context(
              `../Images/Central/2020`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2019":
          images = importImages(
            require.context(
              `../Images/Central/2019`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2018":
          images = importImages(
            require.context(
              `../Images/Central/2018`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2017":
          images = importImages(
            require.context(
              `../Images/Central/2017`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        default:
          console.log("The year's haven't been seen.");
      }
      break;
    case "Southern":
      switch (year) {
        case "2020":
          images = importImages(
            require.context(
              `../Images/Southern/2020`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2019":
          images = importImages(
            require.context(
              `../Images/Southern/2019`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2018":
          images = importImages(
            require.context(
              `../Images/Southern/2018`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2017":
          images = importImages(
            require.context(
              `../Images/Southern/2017`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        default:
          console.log("The year's haven't been seen.");
      }
      break;
    case "North":
      switch (year) {
        case "2020":
          images = importImages(
            require.context(`../Images/North/2020`, false, /\.(png|jpe?g|svg)$/)
          );
          break;
        case "2019":
          images = importImages(
            require.context(`../Images/North/2019`, false, /\.(png|jpe?g|svg)$/)
          );
          break;
        case "2018":
          images = importImages(
            require.context(`../Images/North/2018`, false, /\.(png|jpe?g|svg)$/)
          );
          break;
        case "2017":
          images = importImages(
            require.context(`../Images/North/2017`, false, /\.(png|jpe?g|svg)$/)
          );
          break;
        default:
          console.log("The year's haven't been seen.");
      }
      break;
    case "Mohawk Valley":
      switch (year) {
        case "2020":
          images = importImages(
            require.context(
              `../Images/MohawkValley/2020`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2019":
          images = importImages(
            require.context(
              `../Images/MohawkValley/2019`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2018":
          images = importImages(
            require.context(
              `../Images/MohawkValley/2018`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2017":
          images = importImages(
            require.context(
              `../Images/MohawkValley/2017`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        default:
          console.log("The year's haven't been seen.");
      }
      break;
    case "Hudson Valley":
      images = importImages(
        require.context(`../Images/HudsonValley`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case "New York City":
      switch (year) {
        case "2020":
          images = importImages(
            require.context(
              `../Images/NewYorkCity/2020`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2019":
          images = importImages(
            require.context(
              `../Images/NewYorkCity/2019`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2018":
          images = importImages(
            require.context(
              `../Images/NewYorkCity/2018`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2017":
          images = importImages(
            require.context(
              `../Images/NewYorkCity/2017`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        default:
          console.log("The year's haven't been seen.");
      }
      break;
    case "Long Island":
      switch (year) {
        case "2020":
          images = importImages(
            require.context(
              `../Images/LongIsland/2020`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2019":
          images = importImages(
            require.context(
              `../Images/LongIsland/2019`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2018":
          images = importImages(
            require.context(
              `../Images/LongIsland/2018`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2017":
          images = importImages(
            require.context(
              `../Images/LongIsland/2017`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        default:
          console.log("The year's haven't been seen.");
      }
      break;
    case "Western":
      switch (year) {
        case "2020":
          images = importImages(
            require.context(
              `../Images/Western/2020`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2019":
          images = importImages(
            require.context(
              `../Images/Western/2019`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2018":
          images = importImages(
            require.context(
              `../Images/Western/2018`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        case "2017":
          images = importImages(
            require.context(
              `../Images/Western/2017`,
              false,
              /\.(png|jpe?g|svg)$/
            )
          );
          break;
        default:
          console.log("The year's haven't been seen.");
      }
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

  const getStory = (region, img, year) => {
    //@region STRING
    //@img STRING

    //filter to find the right region then the right year, then finally by img:
    //this is an array of all available stories from filtered region
    img = img
      .split("/")
      .pop()
      .replace(/\.[^/.]+$/, "")
      .replace(/\.[^/.]+$/, "");
    console.log("photobubbles year", year, " new img variable", img);
    const findStory = (i) => i.img === img;
    let filteredRegion = storyBank.filter((item) => item.region === region);
    console.log(filteredRegion, "this be filtered region");
    let filteredYear = filteredRegion.map((item) =>
      item.years.find((yr) => yr.year === year)
    );
    console.log(filteredYear[0], "filtered year", filteredYear[0].stories[1].img)
    filteredStory = (filteredYear[0].stories.find(findStory).media);
    console.log("it stopped at the first img passed");
  };

  const constuctBubbles = () => {
    console.log("running bubbles");
    return Object.keys(images)
      .slice(0, 10)
      .map((keyName, i) => {
        dynamicWidth();
        let image = images[keyName].default;
        console.log(image,"old image name being passed")
        getStory(regionName, image, year);
        let newRegion = regionName.replace(/\s+/g,'-').toLowerCase();
        let newName = filteredStory.name.replace(/\s+/g,'-').toLowerCase();
        return (
          <Link
            key={i}
            to={{
              pathname: `/${newRegion}/${newName}`,
              state: {
                image: image,
                name: filteredStory.name,
                age: filteredStory.age,
                county: filteredStory.county,
                job: filteredStory.job,
                jobTitle: filteredStory.jobTitle,
                interview: filteredStory.interview,
              },
            }}
          >
            <img
              src={image}
              style={{
                // backgroundImage: `url(${image})`,
                // backgroundPosition: "center",
                // backgroundSize: "cover",
                // backgroundRepeat: "no-repeat",
                width: measurement ? measurement : 10,
                height: measurement ? measurement : 10,
                border: "solid",
                objectFit: "cover",
              }}
              className="photoBubbles"
            />
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
