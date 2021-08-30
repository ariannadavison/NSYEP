import RegionBanner from "./RegionBanners/RegionBanner";
import { regions } from "../data/Regions";
// import "./region.css";
import { makeStyles, Typography } from "@material-ui/core";
<<<<<<< HEAD
import { Redirect, Route } from "react-router";
import Error404 from "./Error404";
=======

import NoContent from "./Error/NoContent";
import Error404 from "./Error/Error404";
import "./region.css";
>>>>>>> eab4389a4dd394ae936fae86a7725f3f36682836

export default function Region(props) {
  let name = props.match.params.regionName;
  // the name comes through as the url, so we must name-ify it.
  name = name.replace(/-/g, " ");
  name = name.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());

  //gotta locate the right object that's holding the region name:
  let content = []
  console.log(regions, "regions")
  let region = regions.filter((r) => r.region === name);
  console.log(region.length)
  if (region.length > 0) {

    content = region[0].content;
  }

<<<<<<< HEAD

  // console.log(content, "filtered region");

  // console.log("Does name === Capital", name === "Capital");

=======
>>>>>>> eab4389a4dd394ae936fae86a7725f3f36682836
  let images;

  const importImages = (r) => r.keys().map(r);

  switch (name) {
    case "Capital":
      images = importImages(
        require.context(`./Images/Capital`, false, /\.(png|jpe?g|svg)$/i)
      );
      break;
    case "Central":
      images = importImages(
        require.context(`./Images/Central`, false, /\.(png|jpe?g|svg)$/i)
      );
      break;
    case "Finger Lakes":
      images = importImages(
        require.context(`./Images/FingerLakes`, false, /\.(png|jpe?g|svg)$/i)
      );
      break;
<<<<<<< HEAD
=======
    case "Hudson Valley":
      images = importImages(
        require.context(
          `./Images/HudsonValley`,
          false,
          /\.(png|jpe?g|svg|mp4|HEIC)$/i
        )
      );
      break;
>>>>>>> eab4389a4dd394ae936fae86a7725f3f36682836
    case "Long Island":
      images = importImages(
        require.context(`./Images/LongIsland`, false, /\.(png|jpe?g|svg)$/i)
      );
<<<<<<< HEAD
    //   break;
    // case "Central":
    //   images = importImages(
    //     require.context(`./Images/Central`, false, /\.(png|jpe?g|svg)$/)
    //   );
    //   break;
    // case "Central":
    //   images = importImages(
    //     require.context(`./Images/Central`, false, /\.(png|jpe?g|svg)$/)
    //   );
    //   break;
=======
      break;
    case "Southern":
      images = importImages(
        require.context(`./Images/Southern`, false, /\.(png|jpe?g|svg)$/i)
      );
      break;
    case "New York City":
      images = importImages(
        require.context(
          `./Images/NewYorkCity`,
          false,
          /\.(png|jpe?g|svg|mp4)$/i
        )
      );
      break;
    case "Western":
      images = importImages(
        require.context(
          `./Images/Western`,
          false,
          /\.(png|jpe?g|svg|mp4|HEIC)$/i
        )
      );
      break;
    case "Mohawk Valley":
      images = importImages(
        require.context(
          `./Images/MohawkValley`,
          false,
          /\.(png|jpe?g|svg|mp4)$/i
        )
      );
      break;
    case "North":
      images = importImages(
        require.context(`./Images/North`, false, /\.(png|jpe?g|svg|mp4)$/i)
      );
      break;
>>>>>>> eab4389a4dd394ae936fae86a7725f3f36682836
    default:
      console.log("it's not doing what you think it's doing");
  }

  let file;
  const getRightImage = (imageName) => {
    //@imageName is gunna be c.image which will be only the file name without extensions
    file = images.find(
      (i) =>
        i.default
          .split("/")
          .pop()
          .replace(/\.[^/.]+$/, "")
          .replace(/\.[^/.]+$/, "") === imageName
    );
    return file ? file.default : null;
  };

  const useStyles = makeStyles({
    root: {
      width: "100%",
      maxWidth: 500,
    },
    headers: {
      textTransform: "uppercase",
      fontWeight: "bold",
    },
  });

  const styles = useStyles();
  if (region.length === 0) {
    return (
      <div>
<<<<<<< HEAD
        {<Redirect to="/Error404" />}
        <Error404 />
      </div>
    )
  }
  else {
=======
        <Error404 />
      </div>
    );
  } else if (!content[0].image) {
    return (
      <div>
        <NoContent />
      </div>
    );
  } else {

>>>>>>> eab4389a4dd394ae936fae86a7725f3f36682836
    return (
      <div>
        <RegionBanner region={name} />

        <div className="region__content margins">
          {/* probably will be a map as according to the number of things to put into the page */}

          {content.map((c, key) => {
            let image = getRightImage(c.image);
<<<<<<< HEAD
            console.log("key", key % 2 === 0)
            return (
              <div key={key} className={key % 2 === 0 ? "region__copyContainer" : "region__copyContainer keepRight"}>
                <img src={image ? image : null} className="region__image" />
                <div className={key % 2 === 0 ? "region__copy" : "region__copy addMarginRight"}>
=======
            let imgTag = () => {
              return image.match("mp4") ? (
                <video src={image} className={styles.headers}></video>
              ) : (
                <img src={image ? image : null} className="region__image" />
              );
            };


            return (
              <div
                key={key}
                className={
                  key % 2 === 0
                    ? "region__copyContainer"
                    : "region__copyContainer keepRight"
                }
              >
                <div className="region__imageContainer">
                  {image.match("mp4") ? (
                    <video
                      src={image}
                      controls
                      className="region__image"
                    ></video>
                  ) : (
                    <img src={image ? image : null} className="region__image" />
                  )}
                </div>

                <div
                  className={
                    key % 2 === 0
                      ? "region__copy"
                      : "region__copy addMarginRight"
                  }
                >
>>>>>>> eab4389a4dd394ae936fae86a7725f3f36682836
                  <Typography variant="h6" className={styles.headers}>
                    {c.title}
                  </Typography>
                  {c.copy}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
