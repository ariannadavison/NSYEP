import RegionBanner from "./RegionBanners/RegionBanner";
import { regions } from "../data/Regions";
// import "./region.css";
import { makeStyles, Typography } from "@material-ui/core";

import NoContent from "./Error/NoContent";
import Error404 from "./Error/Error404";
import "./region.css";

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
