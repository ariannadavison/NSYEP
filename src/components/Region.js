import RegionBanner from "./RegionBanners/RegionBanner";
import { regions } from "../data/Regions";
import "./region.css";
import { makeStyles, Typography } from "@material-ui/core";

export default function Region(props) {
  // console.log(props.match.params.regionName);
  let name = props.match.params.regionName;
  // the name comes through as the url, so we must name-ify it.
  name = name.replace(/-/g, " ");
  name = name.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
  // console.log(name, "name");
  //gotta locate the right object that's holding the region name:

  let region = regions.filter((r) => r.region === name);
  let content = region[0].content;
  // console.log(content, "filtered region");

  // console.log("Does name === Capital", name === "Capital");

  let images;

  const importImages = (r) => r.keys().map(r);

  switch (name) {
    case "Capital":
      images = importImages(
        require.context(`./Images/Capital`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case "Central":
      images = importImages(
        require.context(`./Images/Central`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case "Finger Lakes":
      images = importImages(
        require.context(`./Images/FingerLakes`, false, /\.(png|jpe?g|svg)$/)
      );
      break;
    case "Long Island":
      images = importImages(
        require.context(`./Images/LongIsland`, false, /\.(png|jpe?g|svg)$/)
      );
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

  return (
    <div>
      <RegionBanner region={name} />

      <div className="region__content margins">
        {/* probably will be a map as according to the number of things to put into the page */}

        {content.map((c, key) => {
          let image = getRightImage(c.image);
          console.log("key", key % 2 === 0)
          return (
            <div key={key} className={key % 2 === 0? "region__copyContainer"  : "region__copyContainer keepRight"}>
              <img src={image ? image : null} className="region__image"/>
              <div className={key % 2 === 0 ? "region__copy" : "region__copy addMarginRight"}>
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
