import RegionBanner from "./RegionBanners/RegionBanner";
import { regions } from "../data/Regions";

import { makeStyles, Typography } from "@material-ui/core";
import { Redirect, Route } from "react-router";
import NoContent from "./Error/NoContent";
import Error404 from "./Error/Error404";
import "./region.css";
import { Autocomplete } from "@material-ui/lab";
export default function Region(props) {
  // console.log(props.match.params.regionName);
  let name = props.match.params.regionName;
  // the name comes through as the url, so we must name-ify it.
  name = name.replace(/-/g, " ");
  name = name.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
  // console.log(name, "name");
  //gotta locate the right object that's holding the region name:
  let content = [];
  let region = regions.filter((r) => r.region === name);
  if (region.length > 0) {
    content = region[0].content;
  }

  // console.log(content, "filtered region");

  // console.log("Does name === Capital", name === "Capital");

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
    case "Hudson Valley":
      images = importImages(
        require.context(
          `./Images/HudsonValley`,
          false,
          /\.(png|jpe?g|svg|mp4|HEIC)$/i
        )
      );
      break;
    case "Long Island":
      images = importImages(
        require.context(`./Images/LongIsland`, false, /\.(png|jpe?g|svg)$/i)
      );
      break;
    case "Southern":
      images = importImages(
        require.context(`./Images/Southern`, false, /\.(png|jpe?g|svg)$/i)
      );
      break;
    case "New York City":
      images = importImages(
        require.context(`./Images/NewYorkCity`, false, /\.(png|jpe?g|svg|mp4)$/i)
      );
      break;
    case "Western":
      images = importImages(
        require.context(`./Images/Western`, false, /\.(png|jpe?g|svg|mp4|HEIC)$/i)
      );
      break;
    case "Mohawk Valley":
      images = importImages(
        require.context(`./Images/MohawkValley`, false, /\.(png|jpe?g|svg|mp4)$/i)
      );
      break;
    case "North":
      images = importImages(
        require.context(`./Images/North`, false, /\.(png|jpe?g|svg|mp4)$/i)
      );
      break;
    default:
      console.log("it's not doing what you think it's doing");
  }
  console.log(images)
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
      textAlign: "auto",
    },
  });

  const styles = useStyles();
  if (region.length == 0) {
    return (
      <div>

        <Error404 />
      </div>
    );
  }
  else if (!content[0].image) {

    return (
      <div>
        <NoContent />
      </div>
    );
  } else {
    console.log(!content[0].image)
    return (
      <div>
        <RegionBanner region={name} />

        <div className="region__content margins">
          {/* probably will be a map as according to the number of things to put into the page */}

          {content.map((c, key) => {
            let image = getRightImage(c.image);
            let imgTag = () => {
              return image.match("mp4") ? (
                <video src={image} className={styles.headers}></video>
              ) : (
                <img src={image ? image : null} className="region__image" />
              );
            };

            console.log("key", key % 2 === 0);
            return (
              <div
                key={key}
                className={
                  key % 2 === 0
                    ? "region__copyContainer"
                    : "region__copyContainer keepRight"
                }
              >
                {image.match("mp4") ? (
                  // <iframe classname='region__image'>
                  <video
                    src={image}
                    controls
                    // muted
                    className="region__image"
                  // autoPlay
                  ></video>
                ) : (
                  // </iframe>
                  <img src={image ? image : null} className="region__image" />
                )}

                {/* <img src={image ? image : null} className="region__image" /> */}
                <div
                  className={
                    key % 2 === 0
                      ? "region__copy"
                      : "region__copy addMarginRight"
                  }
                >
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
