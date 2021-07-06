import RegionBanner from "./RegionBanners/RegionBanner";
import { regions } from "../data/Regions";
// import YearlyInfo from "./YearlyInfo/YearlyInfo";

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
      // console.log(images, "images");
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

  return (
    <div>
      <RegionBanner region={name} />

      <div className="region__content">
        {/* probably will be a map as according to the number of things to put into the page */}

        {content.map((c, key) => {
          let image = getRightImage(c.image);
          return (
            <div key={key}>
              {c.title}
              <img src={image ? image : null} />
              {c.copy}
            </div>
          );
        })}
      </div>
      {/* <YearlyInfo regionName={name} /> */}
    </div>
  );
}
